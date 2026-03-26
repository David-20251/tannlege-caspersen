import { useEffect, useState } from "react";
import type { ChatMessage } from "@/lib/offer-bot-api";
import { sendOfferBotMessage } from "@/lib/offer-bot-api";

const STORAGE_KEY = "glass_tilbud_offer_bot_messages_v1";

function loadMessages(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (m): m is ChatMessage =>
          !!m &&
          typeof m === "object" &&
          (m as any).role &&
          (m as any).content &&
          ((m as any).role === "user" || (m as any).role === "assistant") &&
          typeof (m as any).content === "string" &&
          (!("sources" in (m as any)) ||
            (Array.isArray((m as any).sources) &&
              (m as any).sources.every((s: any) => !!s && typeof s === "object" && typeof s.url === "string")))
      )
      .slice(-20);
  } catch {
    return [];
  }
}

function saveMessages(messages: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-20)));
  } catch {
    // ignore storage errors
  }
}

export function useOfferChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMessages(loadMessages());
  }, []);

  useEffect(() => {
    if (messages.length) saveMessages(messages);
  }, [messages]);

  async function send(message: string) {
    const text = message.trim();
    if (!text) return;
    if (isLoading) return;

    // Prevent accidental double-submit (e.g. double click).
    const last = messages[messages.length - 1];
    if (last && last.role === "user" && last.content.trim() === text) {
      return;
    }

    setError(null);
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: text }]);

    try {
      const history = [...messages, { role: "user", content: text }];
      const result = await sendOfferBotMessage({ message: text, history });
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            result.text ||
            "Jeg kan forklare tilbudet og hjelpe deg bestille synstest. Vil du bestille time?",
          sources: result.sources?.length ? result.sources : undefined
        }
      ]);
    } catch (e) {
      setError("Bot er ikke tilgjengelig akkurat na.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Beklager, jeg fikk ikke kontakt med boten. Du kan ringe 63 82 40 00 eller bruke skjemaet for a bestille synstest."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function reset() {
    setMessages([]);
    setError(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  return { messages, isLoading, error, send, reset };
}
