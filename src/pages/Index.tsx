import { useEffect, useRef } from "react";
import { Eye, Clock, Award, Phone, MapPin, Mail, Glasses, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-optik.jpg";
import BookingForm from "@/components/BookingForm";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-fade-in");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

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
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-6 border-b border-border bg-card">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-foreground">
            SmartLook <span className="text-primary">Optikk</span>
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:48608939" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">48 60 89 39</span>
            </a>
            <a href="mailto:post@smartlookoptikk.no" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">post@smartlookoptikk.no</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up">
              <span className="offer-badge mb-6">Årets beste tilbud!</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mt-4 mb-5">
                40% rabatt på alle brilleglass
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                Hos SmartLook Optikk på Sørumsand får du faglig trygghet og personlig service med optiker David Guldager. Bestill synsprøve og nye briller – og spar stort med vårt eksklusive tilbud.
              </p>
              <p className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Tverrveien 1, 1920 Sørumsand
              </p>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Bestill synsprøve nå →
              </button>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
                <img
                  src={heroImage}
                  alt="Moderne brillebutikk hos SmartLook Optikk på Sørumsand"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="grid sm:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="bg-card rounded-xl p-6 shadow-md shadow-foreground/[0.03] hover:shadow-lg hover:shadow-foreground/[0.06] transition-shadow duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <Section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Hva vi hjelper deg med
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                SmartLook Optikk tilbyr et bredt utvalg av tjenester for din synshelse
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Glasses, title: "Synsundersøkelse", desc: "Grundig synsprøve og førerkortattest med skreddersydde tester tilpasset dine behov" },
                { icon: Eye, title: "OCT-A netthinneundersøkelse", desc: "Avansert netthinnescanning for tidlig oppdagelse av øyesykdommer" },
                { icon: ShieldCheck, title: "Brilletilpasning", desc: "Personlig veiledning for å finne de perfekte brillene til deg – nå med 40% rabatt på glass" },
                { icon: Clock, title: "Rask service", desc: "Vi sender bekreftelse innen to arbeidsdager og finner en tid som passer for deg" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* How it works */}
      <section className="py-16 md:py-24" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Section>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Slik fungerer det
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Tre enkle steg til dine nye briller med 40% rabatt på glass
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { step: "1", title: "Meld din interesse", desc: "Fyll inn navn og telefonnummer i skjemaet nedenfor" },
                { step: "2", title: "Motta bekreftelse", desc: "Du får en SMS med bekreftelse og vi kontakter deg snart" },
                { step: "3", title: "Kom til synsprøve", desc: "Vi finner en passende tid for din grundige synsundersøkelse" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={formRef} className="py-16 md:py-24 bg-card">
        <div className="max-w-2xl mx-auto px-6">
          <Section>
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-xl shadow-foreground/[0.04] border border-border">
              <div className="text-center mb-8">
                <span className="offer-badge mb-4">Spar 40% på brilleglass</span>
                <h2 className="text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">
                  Bestill din synsprøve
                </h2>
                <p className="text-muted-foreground">
                  Fyll inn skjemaet, så tar vi kontakt med deg for å avtale en time. Normalt innen to arbeidsdager.
                </p>
              </div>
              <BookingForm />
            </div>
          </Section>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 md:py-16" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <Section>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Ring oss</p>
                <a href="tel:48608939" className="text-sm text-muted-foreground hover:text-primary transition-colors">48 60 89 39</a>
              </div>
              <div>
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Besøk oss</p>
                <a
                  href="https://maps.google.com/?q=59.987272,11.246747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tverrveien 1, 1920 Sørumsand
                </a>
              </div>
              <div>
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">Åpningstider</p>
                <p className="text-sm text-muted-foreground">Man–Fre 10–17 · Lør 11–15</p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartLook Optikk — Tverrveien 1, 1920 Sørumsand —{" "}
            <a href="https://www.smartlookoptikk.no" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              smartlookoptikk.no
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
