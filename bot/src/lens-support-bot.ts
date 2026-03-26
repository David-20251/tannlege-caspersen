import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";

const app = express();
app.use(cors());
app.use(express.json());

const LM_STUDIO_COMPLETIONS = "http://localhost:1234/v1/completions";
const MODEL = "qwen/qwen3.5-9b";

type SiteIndexFile = {
  generatedAt: string;
  count: number;
  pages: Array<{ url: string; title: string; text: string }>;
};

const SITE_INDEX_PATH = path.join(process.cwd(), "data", "smartlook_site_index.json");
let siteIndex: SiteIndexFile | null = null;

function loadSiteIndex(): void {
  try {
    if (!fs.existsSync(SITE_INDEX_PATH)) return;
    const raw = fs.readFileSync(SITE_INDEX_PATH, "utf-8");
    const parsed = JSON.parse(raw) as SiteIndexFile;
    if (!parsed?.pages?.length) return;
    siteIndex = parsed;
  } catch {
    siteIndex = null;
  }
}

function tokenize(q: string): string[] {
  return (q || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]+/gu, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3)
    .slice(0, 12);
}

function cleanModelText(text: string): string {
  let out = (text || "").trim();
  // Some local models include <think>...</think> blocks; strip them for a professional UX.
  out = out.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  out = out.replace(/<\/?think>/gi, "").trim();
  out = out.replace(/\n{3,}/g, "\n\n").trim();
  return out;
}

function scoreText(tokens: string[], text: string): number {
  const lower = ` ${text.toLowerCase()} `;
  let score = 0;
  for (const t of tokens) {
    // Crude term frequency score; good enough for a small, local first iteration.
    const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\b`, "g");
    const matches = lower.match(re);
    score += (matches?.length ?? 0) * 2;
  }
  return score;
}

function makeSnippet(text: string, tokens: string[], maxLen = 700): string {
  const raw = (text || "").replace(/\s+/g, " ").trim();
  if (!raw) return "";
  const lower = raw.toLowerCase();
  let hitIdx = -1;
  for (const t of tokens) {
    const idx = lower.indexOf(t);
    if (idx !== -1) {
      hitIdx = hitIdx === -1 ? idx : Math.min(hitIdx, idx);
    }
  }
  const start = hitIdx === -1 ? 0 : Math.max(0, hitIdx - 180);
  return raw.slice(start, start + maxLen);
}

function searchSite(query: string, limit = 4): Array<{ url: string; title: string; snippet: string }> {
  if (!siteIndex?.pages?.length) return [];
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const scored = siteIndex.pages
    .map((p) => {
      const s = scoreText(tokens, `${p.title}\n${p.text}`);
      return { p, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit);

  return scored.map(({ p }) => ({
    url: p.url,
    title: p.title,
    snippet: makeSnippet(p.text, tokens)
  }));
}

function buildRagContext(query: string): { context: string; sources: Array<{ title: string; url: string }> } {
  const hits = searchSite(query, 5);
  if (!hits.length) return { context: "", sources: [] };

  const context = hits
    .map((h, idx) => `Kilde ${idx + 1}:\nTittel: ${h.title}\nURL: ${h.url}\nUtdrag:\n${h.snippet}`)
    .join("\n\n");

  const sources = hits.map((h) => ({ title: h.title, url: h.url }));
  return { context, sources };
}

loadSiteIndex();

const GLASS_OFFER = {
  headline: "40% rabatt på brilleglass",
  terms: "Tilbudet gjelder 40% rabatt på brilleglass ved kjøp av komplett brille.",
  nextStep: "Bestill synstest, så hjelper vi deg med å velge riktige glass og innfatning.",
  phone: "63 82 40 00",
  offerUrl: "https://www.smartlookoptikk.no/",
  lensShopUrl: "https://www.smartlookoptikk.no/linsebutikk"
};

function isOfferTermsQuestion(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = ["vilkar", "vilkår", "inneholder", "gjelder", "40", "rabatt", "tilbud", "komplett", "brilleglass"];
  return terms.some((x) => t.includes(x));
}

function isBookingQuestion(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = ["bestill", "bestille", "book", "time", "synsprøve", "synsprove", "synprøve"];
  return terms.some((x) => t.includes(x));
}

function isSynstestInfoQuestion(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = [
    "hva er synstest",
    "hva er en synstest",
    "hva skjer",
    "hvordan foregar",
    "hvordan foregår",
    "hvor lang tid",
    "hvor lenge tar",
    "synstest",
    "synsprøve",
    "synsprove",
    "synprøve"
  ];
  // Guard: avoid treating pure booking questions as "synstest info".
  if (t.includes("bestill") || t.includes("book")) return false;
  return terms.some((x) => t.includes(x));
}

function isAvailabilityQuestion(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = ["ledig", "tilgjeng", "neste uke", "i morgen", "idag", "i dag", "nar kan", "når kan", "time"];
  return terms.some((x) => t.includes(x));
}

function isMoreInfoQuestion(text: string): boolean {
  const t = (text || "").toLowerCase().trim();
  return (
    t === "har flere opplysninger" ||
    t.includes("fortell mer") ||
    t.includes("mer info") ||
    t.includes("flere opplysninger") ||
    t.includes("kan du utdype")
  );
}

function isContactLensQuestion(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = ["linser", "kontaktlinser", "linse", "contact lens", "contact lenses"];
  return terms.some((x) => t.includes(x));
}

function isContactLensTypeQuestion(text: string): boolean {
  const t = (text || "").toLowerCase();
  const terms = ["hvilken type", "dagslinser", "daglinser", "månedslinser", "manedslinser", "toriske", "multifokale"];
  return isContactLensQuestion(text) && terms.some((x) => t.includes(x));
}

type Product = {
  name: string;
  type: "dagslinser" | "manedslinser" | "toriske" | "multifokale";
  notes: string;
};

const catalog: Product[] = [
  { name: "Biofinity", type: "manedslinser", notes: "Komfort hele dagen, silikonhydrogel." },
  { name: "Biotrue ONEday", type: "dagslinser", notes: "Daglig bruk, ingen rengjoring." },
  { name: "Ultra for Astigmatism", type: "toriske", notes: "For skjeve hornhinner (astigmatisme)." },
  { name: "Dailies Total1 Multifocal", type: "multifokale", notes: "For naersyn + avstand i samme linse." }
];

const trustedSources = [
  { name: "Helsenorge", url: "https://www.helsenorge.no/" },
  { name: "Folkehelseinstituttet", url: "https://www.fhi.no/" },
  { name: "NHS (Eye health)", url: "https://www.nhs.uk/conditions/" }
];

function isMedicalRiskQuestion(text: string): boolean {
  const t = text.toLowerCase();
  const terms = [
    "smerte",
    "rød",
    "rod",
    "infeksjon",
    "betennelse",
    "blurry",
    "tåkete",
    "takete",
    "taakete",
    "allergi",
    "bivirkning",
    "hodepine"
  ];
  return terms.some((term) => t.includes(term));
}

function buildCatalogContext(): string {
  return catalog.map((p) => `- ${p.name} (${p.type}): ${p.notes}`).join("\n");
}

function buildPrompt(userMessage: string): string {
  const sourceBlock = trustedSources.map((s) => `- ${s.name}: ${s.url}`).join("\n");
  const safetyNote = isMedicalRiskQuestion(userMessage)
    ? "Brukeren beskriver mulig medisinsk risiko. Anbefal rask kontakt med optiker/lege og ikke gi diagnose."
    : "Svar hjelpsomt med fokus pa produkthjelp og brukervennlig veiledning.";

  return [
    "Du er en kundestottende linse-assistent for en nettbutikk.",
    "Svar kort, vennlig og konkret pa norsk (maks 4 korte avsnitt).",
    "Hvis bruker sporrer om linsetype, foresla 1-2 passende typer basert pa behov.",
    "Hvis du er usikker, still ett oppklarende sporsmal.",
    safetyNote,
    "Legg alltid ved relevante offentlige kilder nar temaet handler om oyehelse/medisinsk risiko.",
    "",
    "Produktkatalog:",
    buildCatalogContext(),
    "",
    "Offentlige kilder:",
    sourceBlock,
    "",
    `Kundens melding: ${userMessage}`,
    "Svar:"
  ].join("\n");
}

function buildOfferPrompt(userMessage: string): string {
  return [
    "Du er en kundestøttende tilbudshjelper for en optiker.",
    "Svar kort, vennlig og profesjonelt på norsk (maks 3 korte avsnitt).",
    "Svar på det kunden faktisk spør om. Ikke gjenta tilbudstekst unødvendig.",
    "Du skal ikke gjette vilkår. Bruk faktaene under når relevant.",
    "Hvis kunden spør om kontaktlinser: svar kort at det er et eget produktområde og henvis til nettsiden/telefon (ikke bland med brilleglass-tilbudet).",
    "Ikke oppgi priser, tall, datoer eller spesifikke vilkår hvis de ikke står i kildene du får.",
    "Avslutt med en tydelig CTA (book synstest eller ring).",
    "",
    "Fakta om tilbudet:",
    `- Overskrift: ${GLASS_OFFER.headline}`,
    `- Vilkar: ${GLASS_OFFER.terms}`,
    `- Neste steg: ${GLASS_OFFER.nextStep}`,
    `- Telefon: ${GLASS_OFFER.phone}`,
    `- Tilbudsside: ${GLASS_OFFER.offerUrl}`,
    "",
    `Kundens melding: ${userMessage}`,
    "Svar:"
  ].join("\n");
}

function buildSitePrompt(userMessage: string): string {
  return [
    "Du er en hjelpsom nettsideassistent for SmartLook Optikk.",
    "Svar kort, vennlig og profesjonelt pa norsk (maks 3 korte avsnitt).",
    "Svar pa det kunden faktisk spor om.",
    "Bruk kun fakta fra kildene du far. Hvis du ikke finner svaret i kildene, si det tydelig og pek pa relevante lenker.",
    "Ikke oppgi priser, tall, datoer eller spesifikke vilkar hvis de ikke star i kildene.",
    "Avslutt med en relevant CTA: enten book synstest eller ring hvis det passer sporsmalet.",
    "",
    `Kontakt: ${GLASS_OFFER.phone}`,
    "",
    `Kundens melding: ${userMessage}`,
    "Svar:"
  ].join("\n");
}

app.post("/api/lens-bot", async (req, res) => {
  try {
    const userMessage = String(req.body?.message ?? "").trim();
    if (!userMessage) {
      res.status(400).json({ error: "message is required" });
      return;
    }

    const lmRes = await fetch(LM_STUDIO_COMPLETIONS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        prompt: buildPrompt(userMessage),
        temperature: 0.2,
        max_tokens: 280,
        stop: ["\nKundens melding:", "\nSvar:"]
      })
    });

    if (!lmRes.ok) {
      const body = await lmRes.text();
      res.status(502).json({ error: `LM Studio error ${lmRes.status}`, details: body });
      return;
    }

    const data = (await lmRes.json()) as { choices?: Array<{ text?: string }> };
    const answer = cleanModelText(data.choices?.[0]?.text ?? "");

    res.json({
      answer:
        answer ||
        "Jeg kan hjelpe deg med linsetype, komfort og bruk. Kan du si om du onsker dagslinser eller manedslinser?",
      sources: isMedicalRiskQuestion(userMessage) ? trustedSources : []
    });
  } catch (error) {
    res.status(500).json({ error: "Internal error", details: String(error) });
  }
});

app.post("/api/offer-bot", async (req, res) => {
  try {
    const userMessage = String(req.body?.message ?? "").trim();
    if (!userMessage) {
      res.status(400).json({ error: "message is required" });
      return;
    }

    // Deterministic responses for key intents (more professional, avoids model guessing).
    if (isSynstestInfoQuestion(userMessage)) {
      const rag = buildRagContext("synstest synsprøve tjenester");
      res.json({
        answer:
          "En synstest (synsprøve) er en undersøkelse der optikeren sjekker synet ditt og hva slags styrke du eventuelt trenger.\n\n" +
          "Vanligvis snakker dere om behovene dine (jobb, skjerm, bilkjoring), tester synsstyrke og ser pa øyehelse. Etterpa får du anbefaling om brille- eller linsetype som passer.\n\n" +
          "Vil du bestille time? Du kan booke i skjemaet pa siden, eller ringe oss pa " +
          GLASS_OFFER.phone +
          ".",
        sources: rag.sources
      });
      return;
    }

    if (isAvailabilityQuestion(userMessage)) {
      res.json({
        answer:
          "Jeg kan dessverre ikke se kalenderen her, men vi hjelper deg raskt med a finne en time som passer.\n\n" +
          "Book i skjemaet pa siden (velg dato/tid), eller ring oss pa " +
          GLASS_OFFER.phone +
          ". Hvis du sier hvilken dag og om du foretrekker formiddag/ettermiddag, kan jeg ogsa foresla hva du burde velge.",
        sources: buildRagContext("bestille time synstest tjenester").sources
      });
      return;
    }

    if (isContactLensTypeQuestion(userMessage)) {
      const rag = buildRagContext("linsebutikk kontaktlinser dagslinser manedslinser toriske multifokale");
      res.json({
        answer:
          "Vi kan hjelpe med flere typer kontaktlinser, for eksempel dagslinser, manedslinser, toriske (for skjev hornhinne) og multifokale (for nar + avstand).\n\n" +
          "Fortell gjerne om du har astigmatisme, torke i øynene, eller om du trenger linser til nararbeid, sa kan vi peke deg i riktig retning.\n\n" +
          "Du kan ogsa se linsebutikken her: " +
          GLASS_OFFER.lensShopUrl +
          " eller ringe oss pa " +
          GLASS_OFFER.phone +
          ".",
        sources: rag.sources
      });
      return;
    }

    if (isContactLensQuestion(userMessage)) {
      const rag = buildRagContext("linsebutikk kontaktlinser");
      res.json({
        answer:
          "Ja, vi kan hjelpe med kontaktlinser også. På denne siden handler tilbudet om brilleglass, " +
          "men du kan ringe oss på " +
          GLASS_OFFER.phone +
          " eller se linsebutikken på " +
          GLASS_OFFER.lensShopUrl +
          " så finner vi riktig løsning for deg."
        ,
        sources: rag.sources
      });
      return;
    }

    if (isBookingQuestion(userMessage)) {
      res.json({
        answer:
          "For å bruke tilbudet bestiller du synstest først. " +
          "Du kan booke i skjemaet på siden, eller ringe oss på " +
          GLASS_OFFER.phone +
          "."
      });
      return;
    }

    if (isOfferTermsQuestion(userMessage)) {
      res.json({
        answer:
          `${GLASS_OFFER.terms}\n\n` +
          `${GLASS_OFFER.nextStep}\n\n` +
          `Book synstest i skjemaet på siden, eller ring ${GLASS_OFFER.phone}.`
      });
      return;
    }

    if (isMoreInfoQuestion(userMessage)) {
      res.json({
        answer:
          `${GLASS_OFFER.terms}\n` +
          "Dette er en enkel måte å få nye glass til en bedre pris når du kjøper komplett brille.\n\n" +
          `${GLASS_OFFER.nextStep}\n\n` +
          "Vil du at jeg skal hjelpe deg å bestille time, eller har du et spørsmål om glass (enkeltstyrke, progressive, skjermglass)?"
      });
      return;
    }

    const rag = buildRagContext(userMessage);
    const promptBase = isOfferTermsQuestion(userMessage) ? buildOfferPrompt(userMessage) : buildSitePrompt(userMessage);

    let answer = "";
    try {
      const lmRes = await fetch(LM_STUDIO_COMPLETIONS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: MODEL,
          prompt:
            promptBase +
            (rag.context
              ? `\n\nBruk kun fakta fra kildene under nar du svarer. Hvis du ikke finner svaret i kildene, si det tydelig.\n\n${rag.context}\n`
              : ""),
          temperature: 0.2,
          max_tokens: 280,
          stop: ["\nKundens melding:", "\nSvar:"]
        })
      });

      if (!lmRes.ok) {
        throw new Error(`LM Studio HTTP ${lmRes.status}`);
      }

      const data = (await lmRes.json()) as { choices?: Array<{ text?: string }> };
      answer = cleanModelText(data.choices?.[0]?.text ?? "");
    } catch {
      // If the model isn't available, still help by returning sources/links from the local site index.
      if (rag.sources.length) {
        const topLinks = rag.sources.slice(0, 3).map((s) => s.url).join("\n");
        answer =
          "Jeg fant relevante sider pa smartlookoptikk.no, men AI-modellen er ikke tilgjengelig akkurat na.\n\n" +
          "Sjekk disse lenkene:\n" +
          topLinks +
          "\n\nVil du at jeg skal oppsummere hvis du starter LM Studio igjen?";
      } else {
        answer =
          "Jeg fikk ikke kontakt med AI-modellen akkurat na. Du kan fortsatt bestille synstest i skjemaet pa siden, eller ringe " +
          GLASS_OFFER.phone +
          ".";
      }
    }

    res.json({
      answer:
        answer ||
        `${GLASS_OFFER.terms} ${GLASS_OFFER.nextStep} Ring ${GLASS_OFFER.phone} eller book i skjemaet på siden.`,
      sources: rag.sources
    });
  } catch (error) {
    res.status(500).json({ error: "Internal error", details: String(error) });
  }
});

app.post("/api/site-search", async (req, res) => {
  const query = String(req.body?.query ?? "").trim();
  if (!query) {
    res.status(400).json({ error: "query is required" });
    return;
  }
  const hits = searchSite(query, 8);
  res.json({ generatedAt: siteIndex?.generatedAt ?? null, count: siteIndex?.count ?? 0, hits });
});

app.listen(8081, () => {
  // Keep this endpoint separate from your storefront to simplify rollout.
  console.log("Lens support bot API running on http://localhost:8081");
});
