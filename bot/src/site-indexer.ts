import fs from "node:fs";
import path from "node:path";

type IndexedPage = {
  url: string;
  title: string;
  text: string;
};

const OUT_PATH = path.join(process.cwd(), "data", "smartlook_site_index.json");
const DOMAIN = "www.smartlookoptikk.no";

const SEEDS = [
  "https://www.smartlookoptikk.no/syn-og-oyne",
  "https://www.smartlookoptikk.no/tjenester",
  "https://www.smartlookoptikk.no/faste-tilbud",
  "https://www.smartlookoptikk.no/linsebutikk"
];

function stripTags(html: string): string {
  const decoded = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(p|div|br|li|h\d|section|article|header|footer|main)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));

  return decoded
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function extractTitle(html: string): string {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return stripTags(m?.[1] ?? "").replace(/\s+/g, " ").trim();
}

function extractLinks(html: string): string[] {
  const links: string[] = [];
  const re = /href\s*=\s*["']([^"']+)["']/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    links.push(match[1]);
  }
  return links;
}

function decodeHref(raw: string): string {
  return (raw || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function normalizeUrl(raw: string, base: string): string | null {
  try {
    const u = new URL(decodeHref(raw), base);
    if (u.hostname !== DOMAIN) return null;
    if (!["http:", "https:"].includes(u.protocol)) return null;
    u.hash = "";

    const p = u.pathname.toLowerCase();
    if (
      p.endsWith(".jpg") ||
      p.endsWith(".jpeg") ||
      p.endsWith(".png") ||
      p.endsWith(".webp") ||
      p.endsWith(".gif") ||
      p.endsWith(".svg") ||
      p.endsWith(".ico") ||
      p.endsWith(".pdf") ||
      p.endsWith(".css") ||
      p.endsWith(".js") ||
      p.endsWith(".map") ||
      p.endsWith(".json") ||
      p.endsWith(".woff") ||
      p.endsWith(".woff2") ||
      p.endsWith(".ttf") ||
      p.endsWith(".eot")
    ) {
      return null;
    }
    if (p.includes("/wp-admin") || p.includes("/wp-json")) return null;

    return u.toString();
  } catch {
    return null;
  }
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "User-Agent": "smartlook-bot/0.1" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

async function main() {
  const visited = new Set<string>();
  const queue: string[] = [...SEEDS];
  const pages: IndexedPage[] = [];

  const MAX_PAGES = Number(process.env.SITE_INDEX_MAX_PAGES ?? "120");
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });

  while (queue.length && pages.length < MAX_PAGES) {
    const url = queue.shift()!;
    if (visited.has(url)) continue;
    visited.add(url);

    let html: string;
    try {
      html = await fetchHtml(url);
    } catch {
      continue;
    }

    const title = extractTitle(html) || url;
    const text = stripTags(html);
    if (text.length > 200) pages.push({ url, title, text });

    for (const rawHref of extractLinks(html)) {
      const normalized = normalizeUrl(rawHref, url);
      if (!normalized) continue;
      if (!visited.has(normalized)) queue.push(normalized);
    }
  }

  fs.writeFileSync(
    OUT_PATH,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        seeds: SEEDS,
        count: pages.length,
        pages
      },
      null,
      2
    ),
    "utf-8"
  );
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
