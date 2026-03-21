import { useEffect, useRef } from "react";
import { Eye, Clock, Award, Phone } from "lucide-react";
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
  { icon: Eye, title: "Profesjonell synsprøve", desc: "Grundig undersøkelse av synet ditt med moderne utstyr" },
  { icon: Award, title: "40% på brilleglass", desc: "Spar stort på kvalitetsglass fra ledende produsenter" },
  { icon: Clock, title: "Rask timebestilling", desc: "Vi kontakter deg innen kort tid for å finne en passende time" },
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
            SmartLook <span className="text-primary">Optik</span>
          </span>
          <a href="tel:+47" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Ring oss</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up">
              <span className="offer-badge mb-6">Tidsbegrenset tilbud</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mt-4 mb-5">
                Få 40% rabatt på brilleglass
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Bestill synsprøve og nye briller hos SmartLook Optik – og spar stort med vårt eksklusive tilbud på brilleglass. Tilbudet gjelder så lenge det varer!
              </p>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Bestill time nå →
              </button>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
                <img
                  src={heroImage}
                  alt="Moderne optiker butikk med brilleinnfatninger hos SmartLook Optik"
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

      {/* How it works */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Section>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Slik fungerer det
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Tre enkle steg til dine nye briller med 40% rabatt
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { step: "1", title: "Fyll inn skjemaet", desc: "Skriv inn ditt navn og telefonnummer nedenfor" },
                { step: "2", title: "Motta bekreftelse", desc: "Du får en SMS med bekreftelse på tilbudet" },
                { step: "3", title: "Vi ringer deg", desc: "Vi kontakter deg for å avtale time til synsprøve" },
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
      <section ref={formRef} className="py-16 md:py-24" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <Section>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl shadow-foreground/[0.04]">
              <div className="text-center mb-8">
                <span className="offer-badge mb-4">Spar 40%</span>
                <h2 className="text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">
                  Bestill din synsprøve
                </h2>
                <p className="text-muted-foreground">
                  Fyll inn skjemaet, så tar vi kontakt med deg for å avtale en time.
                </p>
              </div>
              <BookingForm />
            </div>
          </Section>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartLook Optik — smartlookoptik.no
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
