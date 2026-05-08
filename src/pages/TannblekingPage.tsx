import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const TannblekingPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background">
      <NavbarProduction onBookClick={scrollToForm} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Kosmetisk tannbehandling</p>
          <h1 className="text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Tannbleking – Et lysere smil
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Få hvitere og lysere tenner på kort tid med profesjonell tannbleking fra Tannlege Caspersen. Vi bruker moderne, sikker og effektiv bleking som gir naturlige resultater.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* What is it? */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva er tannbleking?
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Tannbleking er en kosmetisk tannbehandling som gjør tennene lysere og hvitere. Vi bruker et spesialisert blegemiddel som trenger inn i tannemaljen og lysner den naturlige fargen på tennene dine. Dette er helt forskjellig fra en vanlig tannrens, som bare fjerner flekker på overflaten.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Hos Tannlege Caspersen bruker vi profesjonelt blegemiddel under kontrollerte forhold for å sikre både sikkerhet og resultat.
            </p>
          </div>

          {/* When do you need it? */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Når er tannbleking riktig for deg?
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Tannbleking er ideelt hvis du ønsker å få lysere tenner for et mer stralende smil. Det er en fin mulighet hvis:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Du ønsker lysere og hvitere tenner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Du skal til viktig arrangement eller fotoshoot</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tennene har fått gul eller grå farge over tid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Du ønsker å oppfylle en personlig skjønnhetsmål</span>
              </li>
            </ul>
            <p className="text-foreground/70 leading-relaxed mt-6">
              Merk: Tannbleking krever at tennene dine er fulle og fri for dype hulrom. Vi gjør alltid en grundig undersøkelse først.
            </p>
          </div>

          {/* How does it work? */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hvordan fungerer tannbleking?
            </h2>
            <div className="space-y-4 text-foreground/70">
              <div>
                <h3 className="font-bold text-foreground mb-2">Trinn 1: Konsultasjon og forberedelse</h3>
                <p>Vi starter med å vurdere tennene dine og diskutere resultatene du håper på. Vi tar også et bilde før behandlingen for å kunne sammenligne etterpå.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Trinn 2: Beskyttelse av munnen</h3>
                <p>Vi beskytter gummene dine med spesialkrem slik at blegemiddelet kun virker på tennene. Dette sikrer at du ikke får irritasjon på det ømfintlige vevet rundt tennene.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Trinn 3: Påføring av blegemiddel</h3>
                <p>Vi påfører profesjonelt blegemiddel (Opalescence) på alle tennene. Blegemiddelet virker på pigmentene i tannemaljene og lysner dem gradvis.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Trinn 4: Aktivering og ventetid</h3>
                <p>Blegemiddelet virker i 15-20 minutter. I det meste av tilfellene gjentar vi prosessen 2-3 ganger under samme besøk for optimalt resultat.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Trinn 5: Finisering og fluoridbehandling</h3>
                <p>Vi skylles munnen og påfører en fluoridbehandling for å styrke tannemaljen og redusere sensitivitet.</p>
              </div>
            </div>
          </div>

          {/* Duration & Equipment */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Varighet og utstyr
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">Tid</h3>
                <p className="text-foreground/70">
                  Behandlingen tar cirka 45-60 minutter. Du kan gå direkte tilbake til dine daglige aktiviteter etterpå.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Teknologi</h3>
                <p className="text-foreground/70">
                  Vi bruker Opalescence blegemiddel og moderne lysaktiveringsutstyr for optimal effektivitet og sikkerhet.
                </p>
              </div>
            </div>
          </div>

          {/* Cost */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Pris og resultater
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Tannbleking koster 2 400 kr for en behandling hos oss. De fleste ser betydelig lysere tenner allerede etter første besøk.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Resultatene holder vanligvis i 1-3 år avhengig av dine vaner. Hvis du røyker, drikker mye rødvin eller kaffe, kan resultatene fade raskere.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Du kan opprettholde resultater med hjemmebleking eller ved å gjøre en oppfriskningsbehandling når det trengs.
            </p>
          </div>

          {/* Aftercare */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Etter behandlingen – Pleie av tannene
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              For å bevare dine lysere tenner, anbefaler vi:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Unngå veldig varme eller kalde drikker de første 48 timene</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Unngå rødvin, kaffe, te og røyk for maksimal resultat</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Bruk en myk tannbørste og sensitivitetstannkrem hvis du får økt følsomhet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Fortsett med god tanntannhygiene (pusting 2 ganger daglig)</span>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Vanlige spørsmål om tannbleking
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Er tannbleking trygt?</h3>
                <p className="text-foreground/70">
                  Ja, profesjonell tannbleking under overvakning av en tannlege er helt trygt. Vi bruker konsentrasjoner som er godkjent og vi beskytter gummene dine. Noen opplever mild sensitivitet som forsvinner innen 24 timer.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Vil det skade tannemaljen min?</h3>
                <p className="text-foreground/70">
                  Nei, tannbleking endrer ikke strukturen på tannemaljen når det utføres riktig. Blegemiddelet lysner fargen, men det er ikke skadelig.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Hvor lysere blir tennene mine?</h3>
                <p className="text-foreground/70">
                  Resultatene varierer, men de fleste ser 3-5 skalagrader lysere tenner. Vi viser før- og etterfoto for å dokumentere endringen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Hvor lenge holder resultatene?</h3>
                <p className="text-foreground/70">
                  Resultatene holder vanligvis 1-3 år. Hvis du opprettholder god tannhygiene og unngår sterkere fargestoffer, kan det vare lenger.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Kan jeg få tannbleking hvis jeg har tannimplantater?</h3>
                <p className="text-foreground/70">
                  Bleking påvirker ikke kunstige implantater. Vi kan bleke de naturlige tennene rundt implantatet, men du må diskutere fargen på implantatet separat.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Klar for et lysere smil?</h2>
            <p className="text-foreground/70 mb-6">
              Bestill en konsultasjon hos oss i dag. Vi diskuterer dine ønsker og viser deg hva som er mulig.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg inline-block"
            >
              Bestill time
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer />
    </main>
  );
};

export default TannblekingPage;
