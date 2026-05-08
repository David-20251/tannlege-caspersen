import { useRef } from "react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const KontaktPage = () => {
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
            Kontakt oss
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Har du spørsmål eller ønsker å bestille time? Vi er her for deg — ring, skriv eller besøk oss i Klingenberggata 5.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="text-center">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Ring oss</h3>
            <p className="text-foreground/60 mb-4">Svar innen få minutter</p>
            <a href="tel:22837088" className="text-primary font-bold text-lg hover:underline">
              22 83 70 88
            </a>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Åpningstider</h3>
            <p className="text-foreground/60 space-y-1">
              <div>Man–Fre: 08:00–16:00</div>
              <div>Lørdag–Søndag: Stengt</div>
            </p>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Adresse</h3>
            <p className="text-foreground/60">
              <div>Klingenberggata 5</div>
              <div>0161 Oslo</div>
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <MapSection />
      </section>

      {/* Booking Form Section */}
      <section className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Bestill time online
            </h2>
            <p className="text-lg text-foreground/60">
              Fyll inn skjemaet nedenfor, og vi kontakter deg snart.
            </p>
          </div>
          <CTASection ref={formRef} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default KontaktPage;
