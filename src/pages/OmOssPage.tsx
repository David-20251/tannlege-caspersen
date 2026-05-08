import { useRef } from "react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TeamSection from "@/components/TeamSection";
import ReviewCarouselTannlege from "@/components/ReviewCarouselTannlege";
import Footer from "@/components/Footer";

const OmOssPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavbarProduction onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-28 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Om Tannlege Caspersen
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Vi er en tannlegeklinikk i Oslo sentrum dedikert til å gi deg den beste tannhelseopplevelsen med omsorg, profesjonalitet og moderne teknologi.
          </p>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Vår misjon
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Vi tror at god tannhelse er grunnlaget for et sunt og lykkelig liv. Derfor arbeider vi hver dag for å tilby behandlinger av høyeste kvalitet, med fokus på dine behov og komfort.
            </p>
          </div>

          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Hvorfor velge oss?
            </h2>
            <ul className="space-y-3 text-lg text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span><strong>25+ år erfaring</strong> — Judith Caspersen har drevet klinikken siden 2000 med dedikasjon og faglig dybde</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span><strong>Moderne teknologi</strong> — Digitale røntgen, Airflow-system og The Wand for smertefri behandling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span><strong>Same-day akutttimer</strong> — Tannpine? Vi hjelper deg samme dag, når det er som verst</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span><strong>Smertefri behandling</strong> — Lokalbedøvelse som virkelig virker, så du kan slappe av</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span><strong>Erfaren og varmt team</strong> — Ikke bare teknisk kompetanse, men også innlevelse og forståelse</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Teamet</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Møt dine tannleger
            </h2>
          </div>
          <TeamSection />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Pasientomtaler</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Hva pasientene sier
            </h2>
          </div>
          <ReviewCarouselTannlege />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Klar for å møte teamet?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Ring oss eller bestill din første gratis konsultasjon i dag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:22837088"
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg text-center"
            >
              📞 Ring 22 83 70 88
            </a>
            <button
              onClick={scrollToForm}
              className="border border-primary text-primary px-8 py-4 text-lg font-bold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Bestill konsultasjon
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default OmOssPage;
