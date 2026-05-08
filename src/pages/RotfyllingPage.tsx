import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const RotfyllingPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background">
      <NavbarProduction onBookClick={scrollToForm} />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Smertefri behandling</p>
          <h1 className="text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Rotfylling – Smertefri og diskret
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Rotfylling redder tannen din når nerven er infisert. Moderne teknikk gjør prosessen rask, komfortabel og svært vellykket.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva er rotfylling?
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Rotfylling (endodontisk behandling) fjerner den infiserte eller skadede nerven inni tannen og fylles kanalen med et sterilisert materiale. Dette redder tannen din fra utdragning.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Når trenger du rotfylling?
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">Du kan trenge rotfylling hvis:</p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Du har alvorlig tannpine som kjennes ved tyggjing eller trykk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tannen er mørknet eller misfarget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Det er en byld eller øm pukkel på gummene</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Røntgen viser infeksjon i roten</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tannen har en stor fylling eller brudd</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Prosessen – Trinn for trinn
            </h2>
            <div className="space-y-3 text-foreground/70">
              <p><strong className="text-foreground">1. Anestesi:</strong> Vi bedøver tannen fullstendig slik at du ikke kjenne smerte.</p>
              <p><strong className="text-foreground">2. Åpning:</strong> Vi åpner tannen for tilgang til nerven.</p>
              <p><strong className="text-foreground">3. Fjerning:</strong> Vi fjerner forsiktig den infiserte nerven og renser kanalen.</p>
              <p><strong className="text-foreground">4. Fylling:</strong> Vi fyller kanalen med et sterilt, langvarigt materiale.</p>
              <p><strong className="text-foreground">5. Lukking:</strong> Vi lukker tannen med en permanent fylling eller krone.</p>
            </div>
          </div>

          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Hvor lenge tar det?</h3>
            <p className="text-foreground/70 leading-relaxed">
              En rotfylling tar vanligvis 60-90 minutter. I noen tilfeller kan kompleks anatomis kreve to besøk.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Smerter og smertelindring
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Rotfylling gjør IKKE vondt – den gjør vårere det BEDRE! Den moderne lokalanestesi gjør prosessen helt smertefri. Du kan oppleve lett ømhet 1-2 dager etter, som behandles med vanlig smertestillende.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Pris
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              En rotfylling koster fra 3 500 kr inkludert røntgen, bedøvelse og krone/fylling. Vi gir alltid et kostnadsan slag før vi begynner.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Etter behandlingen
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Unngå kauing på tannen til den får permanent krone/fylling</li>
              <li>✓ Unngå veldig varme drikker 24 timer</li>
              <li>✓ Ta smertestillende hvis du har ubehag</li>
              <li>✓ Tannen trenger ofte en krone for langsiktig styrke</li>
              <li>✓ Normal tanntannhygiene som vanlig</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Spørsmål om rotfylling
            </h2>
            <div className="space-y-4 text-foreground/70">
              <div>
                <p><strong className="text-foreground">Hvor lenge holder det?</strong></p>
                <p>Rotfyllinger holder ofte livet ut hvis tannen blir tannhynd korrekt etterpå (vanligvis med en krone).</p>
              </div>
              <div>
                <p><strong className="text-foreground">Er det bedre å trekke ut tannen?</strong></p>
                <p>Nei! Det er alltid bedre å redde din egen tann enn å miste den. Kunstige tenner er dyrere og krevende.</p>
              </div>
              <div>
                <p><strong className="text-foreground">Hva hvis det ikke blir bedre?</strong></p>
                <p>Svartfyllinger er veldig vellykket (95%+). I sjeldne tilfeller kan vi gjøre en ny behandling.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Har du tannpine?</h2>
            <p className="text-foreground/70 mb-6">Vi kan hjelpe deg – raskt og smertefritt. Bestill en tid i dag.</p>
            <button
              onClick={scrollToForm}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg inline-block"
            >
              Bestill time nå
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RotfyllingPage;
