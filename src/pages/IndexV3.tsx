import { useRef } from "react";
import { Link } from "react-router-dom";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroVideoSection from "@/components/HeroVideoSection";
import UngtTilbudSection from "@/components/UngtTilbudSection";
import TrustBadgesTannlege from "@/components/TrustBadgesTannlege";
import ProblemSection from "@/components/ProblemSection";
import ServicesV2 from "@/components/ServicesV2";
import SedertBehandlingSection from "@/components/SedertBehandlingSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const IndexV3 = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavbarProduction onBookClick={scrollToForm} />
      <UrgencyBanner onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* 1. HERO VIDEO — Full screen video with text overlay */}
      <HeroVideoSection onBookClick={scrollToForm} />

      {/* 2. UNGDOM TILBUD — 25% rabatt for under 30 */}
      <UngtTilbudSection onBookClick={scrollToForm} />

      {/* 3. TRUST SIGNALS */}
      <section className="py-14 md:py-20 bg-primary/5 border-y border-border/30">
        <div className="max-w-5xl mx-auto px-6">
          <TrustBadgesTannlege />
        </div>
      </section>

      {/* 3. PROBLEM — pasienten kjenner seg igjen */}
      <ProblemSection onBookClick={scrollToForm} />

      {/* 4. SERVICES — 6 tjenester */}
      <ServicesV2 />

      {/* 4.5. SEDERT BEHANDLING — For nervøse pasienter */}
      <SedertBehandlingSection onBookClick={scrollToForm} />

      {/* 5. GOOGLE REVIEWS */}
      <GoogleReviewsSection />

      {/* 6. QUICK LINKS TO FULL PAGES */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Link */}
            <Link to="/om-oss" className="group">
              <div className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all bg-white">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Møt teamet</h3>
                <p className="text-foreground/60 mb-4">Lær å kjenne Judith, Wenche og Heidi</p>
                <span className="text-primary font-semibold flex items-center gap-2">
                  Les mer →
                </span>
              </div>
            </Link>

            {/* Prices Link */}
            <Link to="/priser" className="group">
              <div className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all bg-white">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Priser</h3>
                <p className="text-foreground/60 mb-4">Transparente og rettferdige priser</p>
                <span className="text-primary font-semibold flex items-center gap-2">
                  Se prisene →
                </span>
              </div>
            </Link>

            {/* Contact Link */}
            <Link to="/kontakt" className="group">
              <div className="p-8 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all bg-white">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Kontakt</h3>
                <p className="text-foreground/60 mb-4">Ring, skriv eller besøk oss</p>
                <span className="text-primary font-semibold flex items-center gap-2">
                  Kontakt oss →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <CTASection ref={formRef} />

      {/* 11. FOOTER */}
      <Footer />
    </main>
  );
};

export default IndexV3;
