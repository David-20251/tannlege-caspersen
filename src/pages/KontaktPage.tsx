import { useRef } from "react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactFormSection from "@/components/ContactFormSection";
import FleksibeltBetalingSection from "@/components/FleksibeltBetalingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const KontaktPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavbarProduction onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* Contact Form Section */}
      <ContactFormSection />

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
          <button
            onClick={scrollToForm}
            className="btn-cta px-8 py-3 text-base font-bold rounded-lg inline-block mt-8"
          >
            Bestill time
          </button>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 md:py-16 px-6 bg-white/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Tjenesteområde</h2>
          <p className="text-lg text-foreground/70">
            Vi betjener hele Oslo og omliggende områder
          </p>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-red-50 to-red-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl font-bold text-red-600 mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Akutt tannpine?
              </h2>
              <p className="text-xl text-red-700 mb-6">
                Vi hjelper deg raskt
              </p>
              <p className="text-foreground/70 mb-6">
                Har du alvorlig tannpine eller en annen tannlegenotfall? Kontakt oss umiddelbart og vi vil hjelpe deg med akutt behandling samme dag.
              </p>
              <a href="/behandlinger/akutthjelp" className="text-primary font-semibold hover:underline">
                Les mer om akutthjelp →
              </a>
            </div>

            {/* Right: Contact Info */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-red-600">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">RING OSS UMIDDELBART</p>
                  <a href="tel:22837088" className="text-4xl font-bold text-red-600 hover:text-red-700">
                    22 83 70 88
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-1">Tilgjengelig</p>
                  <p className="text-foreground">
                    Mandag–Fredag: 08:00–16:00
                  </p>
                </div>
                <button
                  onClick={() => window.location.href = 'tel:22837088'}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Ring oss nå
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Flexible Payment Options */}
      <FleksibeltBetalingSection />

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
