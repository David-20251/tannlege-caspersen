import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Mic, Phone, Sparkles, Volume2, VolumeX, X } from "lucide-react";
import { useOfferChat } from "@/hooks/use-offer-chat";
import { toast } from "@/hooks/use-toast";

type OfferBotWidgetProps = {
  onBookClick: () => void;
};

const OFFER_URL: string = import.meta.env.VITE_OFFER_URL ?? "https://www.smartlookoptikk.no/";

const TTS_API_URL: string | undefined = import.meta.env.VITE_TTS_API_URL;

function shouldShowHealthSources(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = ["smerte", "rod", "rodt", "rød", "infeksjon", "betennelse", "synstap", "takete", "taakete"];
  return terms.some((x) => t.includes(x));
}

export default function OfferBotWidget({ onBookClick }: OfferBotWidgetProps) {
  const { messages, isLoading, error, send, reset } = useOfferChat();
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const lastSpokenIndexRef = useRef<number>(-1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const showSources = useMemo(() => {
    return messages.some((m) => shouldShowHealthSources(m.content));
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [isOpen, messages, isLoading]);

  function isProbablyEnglish(text: string): boolean {
    const lower = ` ${(text || "").toLowerCase()} `;
    const markers = [" the ", " and ", " you ", " are ", " is ", " i ", " want ", " please ", " how "];
    const score = markers.reduce((acc, m) => acc + (lower.includes(m) ? 1 : 0), 0);
    return score >= 2;
  }

  async function speak(text: string) {
    const cleaned = (text || "").trim();
    if (!cleaned) return;
    // Prefer high-quality server TTS if configured, otherwise fallback to browser speechSynthesis.
    if (TTS_API_URL) {
      try {
        const res = await fetch(TTS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: cleaned })
        });
        if (!res.ok) throw new Error(`TTS HTTP ${res.status}`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        if (!audioRef.current) audioRef.current = new Audio();
        const audio = audioRef.current;
        audio.pause();
        audio.src = url;
        await audio.play();
        return;
      } catch {
        // Fall through to browser TTS.
      }
    }

    if (!("speechSynthesis" in window)) {
      toast({
        title: "Taleavspilling ikke tilgjengelig",
        description: "Nettleseren din stotter ikke opplesning, og lokal TTS-server er ikke tilgjengelig."
      });
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = isProbablyEnglish(cleaned) ? "en-US" : "nb-NO";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (!ttsEnabled) return;
    if (!isOpen) return;
    const lastIndex = messages.length - 1;
    if (lastIndex <= lastSpokenIndexRef.current) return;
    const lastMessage = messages[lastIndex];
    if (!lastMessage || lastMessage.role !== "assistant") return;
    lastSpokenIndexRef.current = lastIndex;
    speak(lastMessage.content);
  }, [messages, ttsEnabled, isOpen]);

  function startListening() {
    const Ctor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Ctor) {
      toast({
        title: "Stemmeopptak ikke tilgjengelig",
        description:
          "Nettleseren din stotter ikke SpeechRecognition. Proev Chrome/Edge, eller skriv sporsmalet."
      });
      return;
    }

    if (isListening) return;

    try {
      const recognition = new Ctor();
      recognition.lang = "nb-NO";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results?.item(0) ?? event.results?.[0];
        const alt = result?.item(0) ?? result?.[0];
        const transcript = (alt?.transcript ?? "").trim();
        if (transcript) submit(transcript);
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        const code = String(event?.error || "").toLowerCase();
        let description = code ? `Feil: ${code}` : "Kunne ikke lese mikrofon.";

        if (code === "network") {
          description =
            "SpeechRecognition feilet (network). Dette er ofte fordi nettleserens tale-til-tekst krever internett " +
            "eller er blokkert av policy/brannmur. Proev Chrome/Edge med internett, eller bruk tekstfeltet.";
        } else if (code === "not-allowed" || code === "service-not-allowed") {
          description =
            "Mikrofontillatelse er blokkert. Klikk paa hengelasen ved adressen og tillat mikrofon, og prov igjen.";
        } else if (code === "no-speech") {
          description = "Jeg horte ingen tale. Proev igjen og snakk litt tydeligere.";
        }

        toast({ title: "Stemmeopptak feilet", description });
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
      };

      recognitionRef.current = recognition;
      setIsListening(true);
      recognition.start();
    } catch (e) {
      setIsListening(false);
      recognitionRef.current = null;
      toast({ title: "Stemmeopptak feilet", description: String(e) });
    }
  }

  function stopListening() {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    try {
      recognition.stop();
    } catch {
      // ignore
    }
  }

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    void send(trimmed);
    setDraft("");
  }

  const quickQuestions: Array<{ label: string; ask?: string; action?: () => void }> = [
    { label: "Hva inneholder tilbudet?", ask: "Hva inneholder 40% tilbudet pa brilleglass, og hvilke vilkar gjelder?" },
    { label: "Hvordan bestille time?", action: onBookClick },
    { label: "Se tilbudssiden", action: () => window.open(OFFER_URL, "_blank", "noopener,noreferrer") }
  ];

  return (
    <div className="fixed right-4 bottom-20 md:bottom-4 z-[60] w-[calc(100%-2rem)] max-w-sm">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full rounded-2xl bg-foreground text-background shadow-lg shadow-foreground/10 hover:shadow-xl transition-shadow px-4 py-3 flex items-center justify-between"
        >
          <span className="flex items-center gap-2 font-semibold">
            <Sparkles className="w-4 h-4" />
            Tilbudshjelper
          </span>
          <span className="flex items-center gap-2 text-sm opacity-90">
            <MessageCircle className="w-4 h-4" />
            Sporsmal?
          </span>
        </button>
      ) : (
        <div className="glass-card rounded-2xl border border-border/60 shadow-2xl overflow-hidden flex flex-col max-h-[560px]">
          <div className="px-4 py-3 flex items-center justify-between border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="min-w-0">
              <div className="font-semibold text-foreground">AI tilbudshjelper</div>
              <div className="text-xs text-muted-foreground truncate">
                Forklarer tilbudet og hjelper deg bestille synstest
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTtsEnabled((v) => !v)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl hover:bg-secondary/40 transition-colors"
                aria-label={ttsEnabled ? "Skru av opplesning" : "Skru pa opplesning"}
                title={ttsEnabled ? "Opplesning pa" : "Opplesning av"}
              >
                {ttsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <a
                href="tel:63824000"
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl hover:bg-secondary/40 transition-colors"
                aria-label="Ring"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl hover:bg-secondary/40 transition-colors"
                aria-label="Lukk"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-secondary/5">
            {messages.length === 0 && (
              <div className="text-sm text-muted-foreground">
                Sporr om tilbudet, pris, hva som skjer pa synstest, eller hvordan du bestiller time.
              </div>
            )}

            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[88%] rounded-2xl px-3 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-foreground text-background ml-auto"
                    : "bg-background/90 border border-border/60 text-foreground mr-auto"
                }`}
              >
                <div className="whitespace-pre-wrap">{m.content}</div>
                {m.role === "assistant" && m.sources?.length ? (
                  <div className="mt-2 pt-2 border-t border-border/40 text-xs text-muted-foreground space-y-1">
                    <div className="text-[11px] uppercase tracking-wide">Kilder</div>
                    {m.sources.slice(0, 4).map((s) => (
                      <a
                        key={s.url}
                        className="block underline hover:no-underline truncate"
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        title={s.title || s.url}
                      >
                        {s.title || s.url}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {isLoading && (
              <div className="text-xs text-muted-foreground">Skriver ...</div>
            )}

            {error && (
              <div className="text-xs text-destructive">{error}</div>
            )}

            {showSources && (
              <div className="text-xs text-muted-foreground">
                Offentlige kilder:{" "}
                <a className="underline hover:no-underline" href="https://www.helsenorge.no/" target="_blank" rel="noreferrer">
                  Helsenorge
                </a>
                {" · "}
                <a className="underline hover:no-underline" href="https://www.fhi.no/" target="_blank" rel="noreferrer">
                  FHI
                </a>
              </div>
            )}
          </div>

          <div className="px-4 py-3 border-t border-border/60 bg-background/80 backdrop-blur space-y-2">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => {
                    if (q.action) q.action();
                    if (q.ask) submit(q.ask);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary/30 hover:bg-secondary/45 transition-colors"
                >
                  {q.label}
                </button>
              ))}
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary/30 hover:bg-secondary/45 transition-colors"
                >
                  Nullstill
                </button>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(draft);
              }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                onClick={() => (isListening ? stopListening() : startListening())}
                className={`h-11 w-11 rounded-xl border border-border flex items-center justify-center transition-colors ${
                  isListening ? "bg-destructive text-destructive-foreground" : "bg-background hover:bg-secondary/40"
                }`}
                aria-label={isListening ? "Stopp opptak" : "Start opptak"}
                title={isListening ? "Lytter ... klikk for a stoppe" : "Snakk i stedet for a skrive"}
              >
                <Mic className="w-4 h-4" />
              </button>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Skriv et sporsmal ..."
                className="flex-1 h-11 rounded-xl bg-background border border-border px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                disabled={isLoading || !draft.trim()}
                className="h-11 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
