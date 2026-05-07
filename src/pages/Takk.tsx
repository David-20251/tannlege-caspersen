import { CheckCircle2, Phone, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Takk = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current?.classList.add("section-fade-in");
  }, []);

  return (
    <main className="min-h-screen bg-background mesh-bg">
      <header className="py-4 px-6 border-b border-border/50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Tannlege <span className="text-gradient">Caspersen</span>
          </Link>
          <a
            href="tel:22837088"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>22 83 70 88</span>
          </a>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-6 py-20 md:py-32">
        <div ref={ref} className="opacity-0 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 glow-primary float-slow">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>

          <h1
            className="text-3xl md:text-4xl text-foreground mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Takk for din timeforespørsel!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            Vi kontakter deg innen kort tid for å bekrefte tidspunkt.
          </p>
          <p className="text-muted-foreground mb-8">
            Du vil motta bekreftelse når timen er avtalt.
          </p>

          <div className="glass-card shimmer-border depth-card rounded-2xl p-6 mb-8 text-left">
            <h2 className="font-bold text-foreground mb-4">Hva skjer videre?</h2>
            <ol className="space-y-4 text-sm text-muted-foreground">
              {[
                "Vi ringer deg for å bekrefte tidspunkt",
                "Møt opp i Klingenberggata 5 — lett tilgjengelig fra Nationalteateret T-bane",
                "Nye pasienter: 50% rabatt på første konsultasjon inkl. røntgen og rens",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {text}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til forsiden
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Klingenberggata+5+Oslo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Se veibeskrivelse
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Takk;
