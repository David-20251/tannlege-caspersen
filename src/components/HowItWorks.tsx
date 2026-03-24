import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { step: "1", title: "Meld din interesse", desc: "Fyll inn navn og telefonnummer i skjemaet" },
  { step: "2", title: "Motta bekreftelse", desc: "Du får SMS med bekreftelse og vi kontakter deg" },
  { step: "3", title: "Kom til synsprøve", desc: "Grundig synsundersøkelse med din optiker" },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={ref} className="opacity-0">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Enkel prosess</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Slik fungerer det</h2>
          <p className="text-muted-foreground mb-14 text-lg">Tre enkle steg til din synsprøve</p>

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="relative mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl border border-primary/20">
                    {item.step}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 left-full w-full h-px bg-border -translate-y-1/2" />
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
