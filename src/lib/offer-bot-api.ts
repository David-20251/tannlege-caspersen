export type SourceLink = { title?: string; url: string };

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  sources?: SourceLink[];
};

export const OFFER_BOT_API_URL: string =
  import.meta.env.VITE_BOT_API_URL ?? "http://localhost:8081/api/lens-bot";

type OfferBotResponse = {
  answer?: string;
  text?: string;
  response?: string;
  sources?: SourceLink[];
  error?: string;
};

export async function sendOfferBotMessage(args: {
  message: string;
  history: ChatMessage[];
}): Promise<{ text: string; sources: SourceLink[] }> {
  const res = await fetch(OFFER_BOT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: args.message,
      history: args.history,
      site: "glass-tilbud"
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Offer bot HTTP ${res.status}${body ? `: ${body}` : ""}`);
  }

  const data = (await res.json()) as OfferBotResponse;
  const text = (data.answer ?? data.text ?? data.response ?? "").trim();
  const sources = Array.isArray(data.sources)
    ? data.sources.filter((s): s is SourceLink => !!s && typeof (s as any).url === "string")
    : [];

  if (text) return { text, sources };
  if (data.error) return { text: String(data.error), sources };
  return { text: "", sources };
}
