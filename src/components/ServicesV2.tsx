const ServicesV2 = () => {
  const services = [
    {
      emoji: "🔍",
      title: "Undersøkelse",
      desc: "Moderne utstyr, digitale røntgen, grundig diagnose.",
      price: "Fra 1 050 kr",
    },
    {
      emoji: "🧹",
      title: "Tannrens",
      desc: "Profesjonell rens med Airflow. Grunnlag for god helse.",
      price: "Inkl. undersøkelse",
    },
    {
      emoji: "🚨",
      title: "Akutthjelp",
      desc: "Tannpine, brukket tann? Vi hjelper samme dag.",
      price: "Ring 22 83 70 88",
    },
    {
      emoji: "✨",
      title: "Tannbleking",
      desc: "Lysere smil på kort tid. Trygt og effektivt.",
      price: "2 400 kr",
    },
    {
      emoji: "👑",
      title: "Kroner & broer",
      desc: "Porselen i høy kvalitet. Naturtro resultat.",
      price: "Fra 5 950 kr",
    },
    {
      emoji: "💪",
      title: "Fyllinger",
      desc: "Moderne kompositt som varer og ser naturlig ut.",
      price: "Fra 850 kr",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Vi tilbyr alt du trenger
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Fra akutt hjelp til estetisk behandling — alle tjenester under ett tak.
          </p>
        </div>

        {/* Services grid - simple, clean */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur"
            >
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{s.title}</h3>
              <p className="text-foreground/60 text-sm mb-4 leading-relaxed">{s.desc}</p>
              <p className="text-sm font-semibold text-primary">{s.price}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/60 mb-6">Usikker på hva du trenger? Ring oss!</p>
          <a href="tel:22837088" className="btn-cta px-10 py-4 text-lg font-bold inline-block">
            Ring 22 83 70 88
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
