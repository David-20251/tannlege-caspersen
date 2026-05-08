import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const PorselenPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background">
      <NavbarProduction onBookClick={scrollToForm} />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Estetisk restaurering</p>
          <h1 className="text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Kroner & Broer – Naturtro resultater
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Porselenskoker og broer gir deg en vakker og varig løsning for ødelagte eller manglende tenner.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva er en krone?
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              En krone (eller kappe) er en kunstig tanntopp som dekker en skadot tann. Den gjenoppretter tannens styrke, funksjon og utseende. Kronen er laget av porselen som ser ut og føles helt som en naturlig tann.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Når trenger du en krone?
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Stor fylling som har fallfall eller blitt svak</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tann som har gjennomgått rotfylling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Brukt eller knust tann som trenger rekonstruksjon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tangens som trenger estetisk forbedring</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Prosessen
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-foreground mb-2">Besøk 1: Forberedelse (45 minutter)</h3>
                <p className="text-foreground/70">Vi forbereder tannen, tar av en hvilken skalt, tar fargeprøver og lager et avtrykk for laboratoriet. Du får en midlertidig krone.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">I laboratoriet (10-14 dager)</h3>
                <p className="text-foreground/70">En tanntekniker lager din permanente krone som passer perfekt og matcher dine andre tenner.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Besøk 2: Innsetning (30 minutter)</h3>
                <p className="text-foreground/70">Vi sjekker passform, justering og bitt før vi limer kronen fast permanent.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Broer – For manglende tenner
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              En bro fyller et gap fra en manglende tann ved å hvile på nabotennene. Den er en fast, permanent løsning som ser og fungerer som en naturlig tann.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Materiale og holdbarhet
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Vi bruker høykvalitets porselen som:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Ligner helt naturlige tenner</li>
              <li>✓ Er ekstremt sterke og holdbare</li>
              <li>✓ Motstår flekker fra kaffe og rødvin</li>
              <li>✓ Holder 10+ år med god pleie</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Pris
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Porselenskoker starter fra 5 950 kr per enhet. Broer varierer avhengig av antall tenner. Vi gir et presist kostnadsoverslag under konsultasjonen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Etter behandlingen
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Vær forsiktig med den midlertidlige kronen</li>
              <li>✓ Unngå veldig klebig mat</li>
              <li>✓ Børst og tanntrål som normal</li>
              <li>✓ Regular tannpleie forlenger levetiden</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Klart for et stilig smil?</h2>
            <p className="text-foreground/70 mb-6">Porselenskoker og broer gir deg selvtillit. Bestill en konsultasjon i dag.</p>
            <button
              onClick={scrollToForm}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg inline-block"
            >
              Bestill konsultasjon
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PorselenPage;
