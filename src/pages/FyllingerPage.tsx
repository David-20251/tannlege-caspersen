import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const FyllingerPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background">
      <NavbarProduction onBookClick={scrollToForm} />

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Enkel og effektiv behandling</p>
          <h1 className="text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Fyllinger – Reparer tannene dine
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Moderne tannfyllinger reparerer skader fra karies og brudd og gjendanner tannens funksjon og utseende.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva er en fylling?
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              En fylling er en restaurering som brukes for å reparere en tann som er skadet av karies (hull) eller brudd. Vi fjerner den skadede delen og fyller hullet med et sterkt, langvarigt materiale.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Når trenger du en fylling?
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Du har et synlig hull i tannen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Tannen er brukt eller knekt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>En eksisterende fylling er løs eller ødelagt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Røntgen viser karies mellom tennene</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Sånn gjøres det
            </h2>
            <div className="space-y-3 text-foreground/70">
              <p><strong className="text-foreground">1. Bedøvelse:</strong> Vi bedøver tannen slik at du ikke kjenne smerte.</p>
              <p><strong className="text-foreground">2. Fjerning:</strong> Vi fjerner den syke eller skadede delen av tannen.</p>
              <p><strong className="text-foreground">3. Tørking:</strong> Vi holder området tørt og rent under arbeidet.</p>
              <p><strong className="text-foreground">4. Fylling:</strong> Vi fyller hullet med et moderne komposittmateriale i fargen på tannen din.</p>
              <p><strong className="text-foreground">5. Polering:</strong> Vi polerer og stiler fyllingen for et naturlig utseende.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Moderne fylli ngsmaterialer
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Vi bruker kun moderne komposittfyllinger som:
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Farges til dine naturlige tenner</li>
              <li>✓ Varer 7-10 år eller lenger</li>
              <li>✓ Styrker tannen</li>
              <li>✓ Er kjemisk bundet til tannen</li>
              <li>✓ Sier nei til kvikksølv (sikker og miljøvennlig)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Pris og varighet
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Prisen for en fylling starter fra 850 kr og avhenger av størrelse og kompleksitet. Moderne fyllinger holder vanligvis 7-10 år før de trenger reparasjon.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Etter behandlingen
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li>✓ Unngå hard mat de første 24 timene</li>
              <li>✓ Du kan spise normalt når bedøvelsen er borte</li>
              <li>✓ Fortsett normal tanntannhygiene</li>
              <li>✓ Ring oss hvis fyllingen blir løs eller gir ubehag</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Har du et hull i tannen?</h2>
            <p className="text-foreground/70 mb-6">Små problemer vokser til store. Bestill en tid og fikse det i dag.</p>
            <button
              onClick={scrollToForm}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg inline-block"
            >
              Bestill time
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FyllingerPage;
