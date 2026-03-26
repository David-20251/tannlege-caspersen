# Plan: AI Support Widget for `glass-tilbud`

Dato: 2026-03-26 (Europe/Oslo)

## Mal
Legge til en liten AI-widget pa landing pages som hjelper kunder:
- forsta brilleglass-tilbudet (hva som inngar, vilkar, neste steg)
- bli tryggere pa valget (hvorfor synsprove, hva skjer hos optiker)
- ende i klar CTA: "Book synsprove" og/eller "Ja takk til tilbud"

Dette bygges lokalt forst (ingen Vercel-krav). Nar flyten sitter, kan vi flytte backend til sky ved a bytte kun URL i env.

## Status (hva som finnes na)
Frontend (landing page + widget):
- Repo: `D:\repos\glass-tilbud`
- Widget: `src/components/OfferBotWidget.tsx`
- Integrert pa forsiden: `src/pages/Index.tsx`
- Konfig via env:
  - `VITE_BOT_API_URL=http://localhost:8081/api/offer-bot`
  - `VITE_TTS_API_URL=http://127.0.0.1:8099/tts` (valgfritt, for bedre opplesning)
  - `VITE_OFFER_URL=https://www.smartlookoptikk.no/`

Backend (lokal bot + indeks + TTS):
- Ligger i repoet: `D:\repos\glass-tilbud\bot`
- API: `bot/src/lens-support-bot.ts` (Express)
- Site indexer: `bot/src/site-indexer.ts`
- TTS server: `bot/tts_server.py` (Edge TTS -> MP3)
- Lokal site-index (runtime-data): `bot/data/smartlook_site_index.json` (genereres lokalt)

## Beslutning: Beste losning for landing pages
Vi bruker en egen AI-widget i React (ikke Chatwoot i denne fasen).

Grunner:
- Full kontroll pa design/CTA for konvertering
- Lett a iterere og A/B-teste tekst og flyt
- Kan holdes enkel (ingen portal/DB/Redis) til vi ser verdi

Chatwoot vurderes senere nar vi trenger menneskelig takeover + inbox + historikk.

## Ide og fremgangsmate
Vi bygger dette som en kombinasjon av:
1. Conversion-first faste svar for de viktigste intensjonene (tilbud, booking, kontakt).
   - Poeng: unnga rare/uproffe svar og hallusinasjoner pa kritiske sporsmal.
2. ChatGPT-lignende svar for bredere sporsmal ved a bruke innhold fra smartlookoptikk.no som kilde (RAG).
   - Poeng: boten kan svare pa mer enn bare tilbudet, men skal holde seg til det nettsiden faktisk sier.
3. Naturlig opplesning (TTS) via lokal `edge_tts` server.

## Arkitektur (local-first)
Frontend (Vite/React):
- Kjorer pa `http://localhost:8080/`
- Inneholder widget-komponent
- Kaller backend via `VITE_BOT_API_URL`
- (Valgfritt) kaller TTS via `VITE_TTS_API_URL`

Backend (Node/TS):
- Kjorer pa `http://localhost:8081`
- Endpoint brukt av widgeten: `POST /api/offer-bot` med JSON `{ "message": "..." }`
- Returnerer `{ "answer": "...", "sources": [{ "title": "...", "url": "..." }] }`

RAG (lokal sok i site-index):
- Index bygges med `bot/src/site-indexer.ts` til `bot/data/smartlook_site_index.json`
- Bot sokker i indexen og legger relevante utdrag inn i prompten
- Backend returnerer `sources` som kan vises i widgeten (troverdighet)

## Viktig: mikrofon / opptak
Widgetens mikrofon-knapp bruker nettleserens innebygde SpeechRecognition.
Den gir ofte "network" hvis nettleser/policy krever internett eller blokkerer tale-til-tekst.
Dette er ikke en kodefeil vi kan garantere a fikse lokalt uten a bytte til egen STT-backend (f.eks. Whisper).

## Kommandoer (lokalt)
1) Frontend:
```powershell
cd D:\repos\glass-tilbud
npm install
npm run dev
```

2) Bot API:
```powershell
cd D:\repos\glass-tilbud\bot
npm install
npm run build:bot
npm run start:bot
```

3) TTS (valgfritt, for naturlig opplesning):
```powershell
cd D:\repos\glass-tilbud\bot
py tts_server.py
```

4) Bygg/oppdater site-index for smartlookoptikk.no (for RAG):
```powershell
cd D:\repos\glass-tilbud\bot
npm run build:bot
npm run index:smartlook
```

## Neste steg
1. Fullfore opprydding i `bot/` sa `bot/src` er eneste kodeplass (ingen duplikatkode).
2. Sikre at index alltid ligger i `bot/data/smartlook_site_index.json` (og er ignorert i git).
3. (Valgfritt) Vis "Kilder" i widgeten nar backend returnerer `sources`.
4. Finjustere tone/CTA og legge inn flere faste svar for typiske sporsmal (betaling, levering, garanti, osv.).

## Flytte til sky senere
Nar MVP virker lokalt:
- Flytt bot-API + (evt) TTS til en offentlig URL (VPS, container, etc.)
- Endre kun `VITE_BOT_API_URL` (og evt `VITE_TTS_API_URL`) i env

