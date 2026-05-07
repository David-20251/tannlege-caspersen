import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    step: "1",
    title: "Fyll inn skjemaet",
    desc: "Legg igjen navn og telefonnummer — det tar under ett minutt.",
    emoji: "📋",
  },
  {
    step: "2",
    title: "Vi ringer deg",
    desc: "Vi kontakter deg raskt for å avtale tidspunkt som passer for deg.",
    emoji: "📞",
  },
  {
    step: "3",
    title: "Møt opp hos oss",
    desc: "Kom til Klingenberggata 5 og bli tatt imot av et vennlig team.",
    emoji: "🦷",
  },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-secondary/5 mesh-bg">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={ref} className="opacity-0">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Enkel prosess</p>
          <h2
            className="text-3xl md:text-5xl text-foreground mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Slik bestiller du time
          </h2>
          <p className="text-muted-foreground mb-14 text-lg">Tre enkle steg — vi gjør resten</p>

          <div className="grid sm:grid-cols-3 gap-8 stagger-children">
            {steps.map((item, i) => (
              <div key={item.step} className="flex flex-col items-center animate-text-reveal">
                <div className="relative mb-6">
                  {/* Step number with 3D effect */}
                  <div className="card-3d">
                    <div className="card-3d-inner w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex flex-col items-center justify-center depth-card">
                      <span className="text-2xl mb-0.5">{item.emoji}</span>
                      <span className="text-xs font-bold text-primary">Steg {item.step}</span>
                    </div>
                  </div>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div
                      className="hidden sm:block absolute top-1/2 left-full w-full h-px -translate-y-1/2"
                      style={{
                        background: "linear-gradient(90deg, hsl(196,75%,38%) 0%, transparent 100%)",
                        opacity: 0.3,
                      }}
                    />
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Akutt note */}
          <div className="mt-14 glass-card shimmer-border rounded-2xl px-8 py-6 depth-card inline-block">
            <p className="text-sm text-foreground/80">
              <span className="font-bold text-primary">Akutt tannpine?</span>{" "}
              Ring oss direkte på{" "}
              <a href="tel:22837088" className="font-bold text-primary hover:underline">
                22 83 70 88
              </a>{" "}
              — vi prioriterer akutte tilfeller.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
