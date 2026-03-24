import type { VercelRequest, VercelResponse } from "@vercel/node";

const requestTimestamps = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

type LeadPayload = {
  name?: string;
  birthdate?: string;
  phone?: string;
  preferred_date?: string;
  timestamp?: string;
  source?: string;
};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recentTimestamps = (requestTimestamps.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS,
  );

  if (recentTimestamps.length >= RATE_LIMIT) {
    requestTimestamps.set(ip, recentTimestamps);
    return true;
  }

  recentTimestamps.push(now);
  requestTimestamps.set(ip, recentTimestamps);
  return false;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const forwardedFor = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests" });
  }

  const payload = (req.body ?? {}) as LeadPayload;
  const normalizedPhone = String(payload.phone ?? "").replace(/\D/g, "");

  if (normalizedPhone.length < 8) {
    return res.status(400).json({ error: "Invalid phone" });
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ error: "Webhook not configured" });
  }

  const forwardPayload = {
    name: typeof payload.name === "string" ? payload.name.trim() : "",
    birthdate: typeof payload.birthdate === "string" ? payload.birthdate.trim() : "",
    phone: normalizedPhone,
    preferred_date:
      typeof payload.preferred_date === "string" ? payload.preferred_date : "Ikke valgt",
    timestamp: typeof payload.timestamp === "string" ? payload.timestamp : new Date().toISOString(),
    source:
      typeof payload.source === "string" ? payload.source : "SmartLook Optikk - 40% kampanje",
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const zapResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forwardPayload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!zapResponse.ok) {
      return res.status(502).json({ error: "Upstream error" });
    }

    return res.status(200).json({ success: true });
  } catch {
    clearTimeout(timeout);
    return res.status(500).json({ error: "Failed to submit lead" });
  }
}
