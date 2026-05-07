import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: "👨‍⚕️",
    title: "På dine premisser",
    description: "Du bestemmer tempo og hvilke behandlinger du vil ha. Vi respekterer dine ønsker og bekymringer fullt ut.",
  },
  {
    icon: "💡",
    title: "Alltid oppdatert",
    description: "Judith investerer kontinuerlig i ny teknologi og kursing. Siste generasjons utstyr og metoder.",
  },
  {
    icon: "🎓",
    title: "Dedikerte eksperter",
    description: "Judith (25+ år), Wenche, og Heidi jobber som et lag. Faglig kompetanse og menneskelig varmth.",
  },
  {
    icon: "✨",
    title: "Premium behandling",
    description: "Vi tar oss god tid. Ingen stress, ingen kjappkjørte behandlinger. Kvalitet og komfort først.",
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Main features */}
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Hva vi tilbyr</p>
              <h2
                className="text-4xl md:text-5xl text-foreground mb-8 leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700 }}
              >
                Tannhelse uten<br />
                <span className="text-gradient">stress og angst</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-12 leading-relaxed max-w-lg">
                Vi forstår at mange er nervøse for tannlegen. Derfor gjør vi alt annerledes — med fokus på din trygghet, komfort og kontroll.
              </p>
            </div>

            {/* Right side: Feature cards with animations */}
            <div className="space-y-5">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="card-3d animate-text-reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="card-3d-inner glass-card rounded-2xl p-8 depth-card hover:border-primary/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <div className="flex gap-5 items-start">
                      <span className="text-4xl flex-shrink-0 pt-1">{feature.icon}</span>
                      <div>
                        <h3
                          className="text-xl font-bold text-foreground mb-2"
                          style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
