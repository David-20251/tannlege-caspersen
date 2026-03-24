import { useRef } from "react";
import { Eye, Clock, Award, Phone, MapPin, Glasses, ShieldCheck, Scan, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-optik.jpg";
import octScan from "@/assets/oct-scan.png";
import BookingForm from "@/components/BookingForm";
import StickyHeader from "@/components/StickyHeader";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustBar from "@/components/TrustBar";
import Reviews from "@/components/Reviews";
import MeetOptician from "@/components/MeetOptician";
import VideoSection from "@/components/VideoSection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

const features = [
  { icon: Eye, title: "Grundig synsprøve", desc: "Skreddersydd synsundersøkelse med høy nøyaktighet – tilpasset dine daglige behov" },
  { icon: Award, title: "40% på brilleglass", desc: "Spar stort på kvalitetsglass fra ledende produsenter. Tilbudet gjelder så lenge det varer!" },
  { icon: ShieldCheck, title: "Faglig trygghet", desc: "Optiker David Guldager følger deg gjennom hele prosessen for optimal synshelse" },
];

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StickyHeader onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* Hero — 3-second rule: WHAT, WHY, WHAT TO DO */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Moderne brillebutikk hos SmartLook Optikk på Sørumsand" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="animate-fade-up">
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-foreground/70 mb-6">
              SmartLook Optikk · Sørumsand
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
              <span className="text-gradient">–40%</span><br />på alle brilleglass
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Bestill synsprøve og spar stort hos din lokale optiker.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={scrollToForm} className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-primary/25 glow-accent">
                Bestill synsprøve nå
              </button>
              <a href="tel:48608939" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">
                <Phone className="w-4 h-4" /> Ring 48 60 89 39
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="text-center mb-14">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Våre tjenester</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Hvorfor velge oss</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-xl p-7 hover:border-primary/20 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <MeetOptician />

      {/* What we help with */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <Section>
            <div className="text-center mb-14">
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Komplett øyehelse</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Hva vi hjelper deg med</h2>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden mb-8 hover:border-primary/20 transition-all duration-200">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="overflow-hidden">
                  <img
                    src={octScan}
                    alt="OCT-A netthinneundersøkelse – avansert skanning av netthinnen"
                    className="w-full h-full min-h-[220px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Scan className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">OCT-A netthinneundersøkelse</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Verdensledende Revo FC130 gir detaljerte tverrsnitt og blodstrømskart over netthinnen. 
                    Tidlig oppdagelse av øyesykdommer som glaukom og makuladegenerasjon.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Glasses, title: "Synsundersøkelse og førerkort", desc: "Skreddersydde tester med høy nøyaktighet – tilpasset dine daglige behov og krav til førerkort" },
                { icon: Eye, title: "Samsynsvurdering", desc: "Kartlegging og tiltak ved dobbeltsyn, hodepine eller lese- og konsentrasjonsvansker" },
                { icon: Droplets, title: "Tørre øyne-utredning", desc: "Avansert analyse og anbefaling av lindrende tiltak for tørre eller irriterte øyne" },
                { icon: ShieldCheck, title: "Brilletilpasning med 40% rabatt", desc: "Personlig veiledning for å finne de perfekte brillene – nå med 40% på alle brilleglass" },
                { icon: Clock, title: "Rask henvisning til øyelege", desc: "Ved mistanke om øyesykdom henviser vi deg raskt med full dokumentasjon" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl glass-card hover:border-primary/20 transition-all duration-200">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <VideoSection />

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Section>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Enkel prosess</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Slik fungerer det</h2>
            <p className="text-muted-foreground mb-14 text-lg">Tre enkle steg til dine nye briller med 40% rabatt</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Meld din interesse", desc: "Fyll inn navn og telefonnummer i skjemaet nedenfor" },
                { step: "2", title: "Motta bekreftelse", desc: "Du får en SMS med bekreftelse og vi kontakter deg snart" },
                { step: "3", title: "Kom til synsprøve", desc: "Vi finner en passende tid for din grundige synsundersøkelse" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <span className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl mb-5 border border-primary/20">
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <Reviews />

      {/* Booking Form */}
      <section ref={formRef} className="py-20 md:py-28 bg-card/50">
        <div className="max-w-2xl mx-auto px-6">
          <Section>
            <div className="glass-card rounded-2xl p-8 md:p-12 glow-accent">
              <div className="text-center mb-8">
                <span className="offer-badge mb-4">Spar 40% på brilleglass</span>
                <h2 className="text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">Bestill din synsprøve</h2>
                <p className="text-muted-foreground">Fyll inn skjemaet, så tar vi kontakt for å avtale time.</p>
              </div>
              <BookingForm />
            </div>
          </Section>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="glass-card rounded-xl p-6">
                <Phone className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Ring oss</p>
                <a href="tel:48608939" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">48 60 89 39</a>
              </div>
              <div className="glass-card rounded-xl p-6">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Besøk oss</p>
                <a href="https://maps.google.com/?q=59.987272,11.246747" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Tverrveien 1, 1920 Sørumsand
                </a>
              </div>
              <div className="glass-card rounded-xl p-6">
                <Clock className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Åpningstider</p>
                <p className="text-sm text-muted-foreground">Man–Fre 10–17 · Lør 11–15</p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartLook Optikk — Tverrveien 1, 1920 Sørumsand —{" "}
            <a href="https://www.smartlookoptikk.no" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              smartlookoptikk.no
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
