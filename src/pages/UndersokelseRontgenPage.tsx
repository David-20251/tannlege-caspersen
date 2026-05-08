import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const UndersokelseRontgenPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background">
      <NavbarProduction onBookClick={scrollToForm} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Forebyggende tannhelse</p>
          <h1 className="text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Undersøkelse & røntgen – Prøv tannene dine
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            En grundig tannlegeundersøkelse med moderne røntgenteknologi er grunnlaget for god tannhelse. Vi avdekker problemer tidlig og gir deg en klar plan for behandling.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* What is it? */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva inkluderer en undersøkelse?
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              En grundig tannlegeundersøkelse hos oss består av en visuell inspektion av alle tennene, undersøkelse av gummene, og munn-mage-halspalpering. Vi sjekker både for tannproblemer og andre forhold som påvirker din munnhelse.
            </p>
          </div>

          {/* Why you need it */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hvorfor regelmessig undersøkelse?
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Tidlig avdekking:</strong> Vi finner små problemer før de blir store og dyre.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Gummesjekk:</strong> Vi kontrollerer for tegn på gingivitt eller parodontitt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Røntgen:</strong> Vi ser ting som ikke er synlige med det blotte øyet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Forebygging:</strong> En liten investering nå sparer store kostnader senere.</span>
              </li>
            </ul>
          </div>

          {/* The process */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Slik går en undersøkelse til
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-foreground mb-2">1. Helsekontroll</h3>
                <p className="text-foreground/70">Vi spør om dine helseforhold og eventuelle medisiner som påvirker tannhelsen.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">2. Visuell undersøkelse</h3>
                <p className="text-foreground/70">Vi undersøker alle tennene for karies, slitasje og andre problem.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">3. Gummesjekk</h3>
                <p className="text-foreground/70">Vi måler gjernedypet og sjekker for tegn på gingivitt.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">4. Røntgen (om nødvendig)</h3>
                <p className="text-foreground/70">Vi tar digitale røntgenbilder som viser mellomrommet mellom tennene og under gummene.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">5. Diskusjon og plan</h3>
                <p className="text-foreground/70">Vi viser deg funnene og lager en behandlingsplan hvis det trengs.</p>
              </div>
            </div>
          </div>

          {/* X-ray technology */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Moderne røntgenteknologi
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Vi bruker digitale røntgenbilder som gir flere fordeler:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Lavere stråling:</strong> 90% mindre strålingsdose enn tradisjonelle røntgenbilder.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Bedre kvalitet:</strong> Klare bilder med fine detaljer.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Umiddelbar resultat:</strong> Vi ser bildene med en gang.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span><strong>Miljøvennlig:</strong> Ingen kjemiske prosesser eller avfall.</span>
              </li>
            </ul>
          </div>

          {/* Frequency */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hvor ofte bør du komme?
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Vi anbefaler undersøkelse og professionell tannrens hver 6. måned for de fleste pasienter. Hvis du har gingivitt eller andre risikofaktorer, kan du trenge hyppigere besøk.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Spørsmål om undersøkelse
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">Er røntgen trygt?</h3>
                <p className="text-foreground/70">
                  Ja, digitale røntgenbilder bruker veldig lav strålingsdose. Risikoen er minimal sammenlignet med fordelen av tidlig avdekking av problemer.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Hva hvis røntgenen avslører noe?</h3>
                <p className="text-foreground/70">
                  Vi diskuterer funnene og lager en plan for behandling. Du velger selv hva du vil gjøre, og når du vil gjøre det.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Hvor lang tid tar en undersøkelse?</h3>
                <p className="text-foreground/70">
                  En grundig undersøkelse tar omkring 30-45 minutter, avhengig av hva vi finner.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Når var ditt siste besøk?</h2>
            <p className="text-foreground/70 mb-6">
              Bestill en grundig undersøkelse og røntgen i dag. Vi sikrer at tennene dine er i topp form.
            </p>
            <button
              onClick={scrollToForm}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg inline-block"
            >
              Bestill undersøkelse
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer />
    </main>
  );
};

export default UndersokelseRontgenPage;
