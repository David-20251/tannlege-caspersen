import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const AkutthjelPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background">
      <NavbarProduction onBookClick={scrollToForm} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-4">Haster? Vi hjelper på samme dag</p>
          <h1 className="text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Akutthjelp – Når det haster
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Har du tannpine, brukt tann eller annen tannlegenotstand? Vi tilbyr same-day akutthjelp og håndterer nødtilfeller raskt og profesjonelt.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Common Emergencies */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Vanlige tannlegenotfall
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground mb-2">Akutt tannpine</h3>
                <p className="text-foreground/70">
                  Uutsendelig tannpine kan skyldes karies, infeksjon eller annen skade. Vi finner årsaken og gir umiddelbar lindring.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground mb-2">Brukt eller knust tann</h3>
                <p className="text-foreground/70">
                  Om mulig, oppbevar brudstykket i melk eller speikk. Kom til oss med en gang – rask handling øker sjansen for å redde tannen.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground mb-2">Løs eller utslått tann</h3>
                <p className="text-foreground/70">
                  Hvis tannen er helt ute, håndteres den forsiktig og plasseres i melk eller saltvannsløsning. Kom raskt til oss.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground mb-2">Betennelse eller hovnet kinn</h3>
                <p className="text-foreground/70">
                  Tegn på infeksjon. Dette krever rask behandling for å unngå at infeksjonen sprer seg.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-foreground mb-2">Løs eller fallende fylling/krone</h3>
                <p className="text-foreground/70">
                  Vi kan reparere eller erstatte løse restaureringer samme dag.
                </p>
              </div>
            </div>
          </div>

          {/* What to do immediately */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva du kan gjøre nå
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Mens du venter på time hos oss:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">1</span>
                <span><strong>Ring oss med en gang</strong> på 22 83 70 88. Vi setter av akutt tid samme dag.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">2</span>
                <span><strong>Smertelindring:</strong> Ta en smertestillende (paracetamol eller ibuprofen) og hold is mot kinden.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">3</span>
                <span><strong>Bevare tannstykker:</strong> Om mulig, lagre i melk eller speikk.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">4</span>
                <span><strong>Unngå:</strong> Hard mat, overdreven varme/kulde, og munnsvir som presser på området.</span>
              </li>
            </ul>
          </div>

          {/* Our guarantee */}
          <div className="bg-primary/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Vår garanti</h2>
            <p className="text-foreground/70 leading-relaxed">
              Vi garanterer akutt time <strong>samme dag</strong> for pasienter med virkelige tannlegenotfall. Hvis du ringer før kl. 14.00, prøver vi å få deg inn samme dag.
            </p>
          </div>

          {/* Treatment approach */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Vår tilnærming til akutt behandling
            </h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                <strong className="text-foreground">Rask diagnose:</strong> Vi tar røntgen og undersøker ørsaken til notfallet raskt.
              </p>
              <p>
                <strong className="text-foreground">Lindring først:</strong> Vi gir umiddelbar smertelindring med lokal bedøvelse.
              </p>
              <p>
                <strong className="text-foreground">Temporær løsning:</strong> Vi kan behandle problemet midlertidig eller gi deler av behandlingen for å stabilisere situasjonen.
              </p>
              <p>
                <strong className="text-foreground">Plan for oppfølging:</strong> Vi diskuterer hva som må gjøres videre og planlegger eventuelle ytterligere behandlinger.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Spørsmål og svar om akutthjelp
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Hva koster akutthjelp?</h3>
                <p className="text-foreground/70">
                  Akutthjelp behandles som en vanlig tannlegebehandling. Prisen avhenger av hva som må gjøres. Vi informerer alltid om kostnaden før vi starter behandlingen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Hva hvis jeg ikke er pasient hos dere fra før?</h3>
                <p className="text-foreground/70">
                  Det spiller ingen rolle. Vi hjelper alle pasienter med virkelige notfall, uansett hvor de kommer fra eller om de er registrert hos oss.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Hvor snarlig kan jeg komme inn?</h3>
                <p className="text-foreground/70">
                  For alvorlige notfall ringer vi deg tilbake innen 15 minutter med en tid. Vi setter av plasser til akuttkall hver dag.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Har dere åpent på kveldstid eller helger?</h3>
                <p className="text-foreground/70">
                  Vår vanlige åpningstid er hverdager 8:00-17:30. For akuttt hjelp utenom disse timene, anbefaler vi Tannlegevakten i Oslo.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-50 rounded-2xl p-8 text-center border-2 border-red-200">
            <h2 className="text-2xl font-bold text-foreground mb-4">Har du tannlegenotfall nå?</h2>
            <p className="text-foreground/70 mb-6 text-lg">
              Ring oss med en gang på <span className="font-bold text-red-600">22 83 70 88</span>
            </p>
            <p className="text-foreground/70 mb-6">
              Vi setter av akutt tid samme dag for alvorlige notfall.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg inline-block"
            >
              Bestill akutt time
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer />
    </main>
  );
};

export default AkutthjelPage;
