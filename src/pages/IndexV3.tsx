import { useRef } from "react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroV2 from "@/components/HeroV2";
import TrustBadgesTannlege from "@/components/TrustBadgesTannlege";
import ProblemSection from "@/components/ProblemSection";
import ServicesV2 from "@/components/ServicesV2";
import TeamSection from "@/components/TeamSection";
import AkuttSection from "@/components/AkuttSection";
import ReviewCarouselTannlege from "@/components/ReviewCarouselTannlege";
import FAQSection from "@/components/FAQSection";
import PricingTiers from "@/components/PricingTiers";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const IndexV3 = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavbarProduction onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* 1. HERO — Problem + Solution + CTA */}
      <HeroV2 onBookClick={scrollToForm} />

      {/* 2. TRUST SIGNALS */}
      <section className="py-14 md:py-20 bg-primary/5 border-y border-border/30">
        <div className="max-w-5xl mx-auto px-6">
          <TrustBadgesTannlege />
        </div>
      </section>

      {/* 3. PROBLEM — pasienten kjenner seg igjen */}
      <ProblemSection onBookClick={scrollToForm} />

      {/* 4. SERVICES — 6 tjenester */}
      <ServicesV2 />

      {/* 5. TEAM — Judith, Wenche, Heidi */}
      <TeamSection />

      {/* 6. AKUTT — emergency highlight */}
      <AkuttSection onBookClick={scrollToForm} />

      {/* 7. REVIEWS — scrolling carousel 5,0 ⭐ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Pasientomtaler</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Hva pasientene sier
            </h2>
          </div>
          <ReviewCarouselTannlege />
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. PRICING TIERS — Gratis + VIP */}
      <PricingTiers />

      {/* 10. MAP + CONTACT */}
      <MapSection />

      {/* 11. FINAL CTA */}
      <CTASection ref={formRef} />

      {/* 11. FOOTER */}
      <Footer />
    </main>
  );
};

export default IndexV3;
