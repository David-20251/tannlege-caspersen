

## Plan: Forbedre BookingForm med bedre validering og fremtidig struktur

### Hva som allerede fungerer
Mye av det som etterspørres er allerede implementert: loading state, bekreftelsesmelding, deaktivert knapp under sending, trim, og 6-sifret fødselsdato-validering. Webhook URL, feltnavn og payload er uendret.

### Forbedringer som trengs

**1. Strengere telefonvalidering (norsk 8-sifret)**
Dagens regex godtar 8-15 siffer. Endres til nøyaktig 8 siffer (norsk mobilnummer).

**2. Duplikatbeskyttelse**
Legg til en `useRef`-basert guard som forhindrer flere raske klikk (debounce). Knappen er allerede `disabled` under `isLoading`, men vi sikrer at `handleSubmit` returnerer tidlig hvis allerede i prosess.

**3. Oppdatert bekreftelsestekst**
Endre til "Takk! Vi kontakter deg innen 24 timer." som ønsket.

**4. Strukturér for fremtiden**
Trekk ut webhook-kallet til en egen `submitLead`-funksjon i `src/lib/api.ts`, slik at det senere er enkelt å legge til SMS-trigger eller Supabase-lagring uten å endre skjemakomponenten.

### Filer som endres
- `src/components/BookingForm.tsx` — strengere validering, duplikatguard, oppdatert bekreftelsestekst
- `src/lib/api.ts` — ny fil med `submitLead()` funksjon (klargjort for utvidelse)

### Hva som IKKE endres
- Webhook URL
- Feltnavn og payload-struktur
- Zapier-integrasjon
- Landingsside-layout

