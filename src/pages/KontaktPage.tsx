import { useRef } from "react";
import { Phone, MapPin, Clock, Mail, AlertCircle } from "lucide-react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

const KontaktPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavbarProduction onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* 1. HERO — Enkel, tydelig, to CTAer */}
      <section className="pt-36 pb-16 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-5 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Kontakt oss
          </h1>
          <p className="text-xl text-foreground/60 max-w-xl mx-auto leading-relaxed mb-10">
            Vi er her for deg — ring oss direkte eller send en melding så tar vi kontakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:22837088"
              className="btn-cta px-8 py-4 text-base font-bold rounded-lg inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ring 22 83 70 88
            </a>
            <button
              onClick={scrollToForm}
              className="border-2 border-primary text-primary px-8 py-4 text-base font-bold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Send melding
            </button>
          </div>
        </div>
      </section>

      {/* 2. KONTAKTINFO — 4 kompakte kort */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/40 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Telefon</p>
              <a href="tel:22837088" className="font-bold text-foreground hover:text-primary transition-colors">
                22 83 70 88
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/40 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Adresse</p>
              <a
                href="https://www.google.com/maps/place/Tannlege+Caspersen"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground hover:text-primary transition-colors text-sm"
              >
                Klingenberggata 5<br />0161 Oslo
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/40 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Åpningstider</p>
              <p className="font-bold text-foreground text-sm">
                Man–Fre<br />08:00–16:00
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/40 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">E-post</p>
              <a href="mailto:j.casper@online.no" className="font-bold text-foreground hover:text-primary transition-colors text-sm break-all">
                j.casper@online.no
              </a>
            </div>
          </div>

          {/* Akutt-notis — liten, inline, ikke en hel seksjon */}
          <div className="mt-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <p className="text-sm text-red-700">
              <strong>Akutt tannpine?</strong> Ring oss direkte på{" "}
              <a href="tel:22837088" className="font-bold underline">22 83 70 88</a>
              {" "}— vi hjelper deg samme dag.
            </p>
          </div>
        </div>
      </section>

      {/* 3. KART + SKJEMA — side om side */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-border/40 shadow-sm h-[400px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5779654321!2d10.729598!3d59.913607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7e0184e9af%3A0xd0cc7332731589e0!2sTannlege%20Caspersen!5e0!3m2!1sno!2sno!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Kontaktskjema */}
            <div ref={formRef}>
              <h2
                className="text-2xl font-bold text-foreground mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Send oss en melding
              </h2>
              <p className="text-foreground/60 mb-6 text-sm">
                Fyll inn skjemaet, så ringer vi deg tilbake innen én virkedag.
              </p>
              <ContactFormSection inline />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer />
    </main>
  );
};

export default KontaktPage;
