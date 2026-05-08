import { useRef } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FleksibeltBetalingSection from "@/components/FleksibeltBetalingSection";
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

      {/* Contact Info Section */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group hover:bg-primary/18 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Ring oss</h3>
            <p className="text-foreground/60 mb-4">Svar innen få minutter</p>
            <a href="tel:22837088" className="text-primary font-bold text-lg hover:underline">
              22 83 70 88
            </a>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group hover:bg-primary/18 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Adresse</h3>
            <p className="text-foreground/60">
              <div>Klingenberggata 5</div>
              <div>0161 Oslo</div>
            </p>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group hover:bg-primary/18 transition-colors">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Åpningstider</h3>
            <p className="text-foreground/60 space-y-1">
              <div>Man–Fre: 08:00–16:00</div>
              <div>Lørdag–Søndag: Stengt</div>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Before Flexible Payment */}
      <section className="py-12 md:py-16 px-6 bg-gradient-to-r from-primary/10 to-accent/5 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">Klar for et besøk?</h3>
          <p className="text-foreground/70 mb-6">
            Bestill time online eller ring oss for å finne en tid som passer deg.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-cta px-8 py-3 text-base font-bold rounded-lg"
          >
            Bestill time nå
          </button>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <FleksibeltBetalingSection />

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
