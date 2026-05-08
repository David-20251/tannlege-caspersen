const FleksibeltBetalingSection = () => {
  const options = [
    {
      icon: "💳",
      title: "Delbetaling",
      desc: "Del behandlingen i flere betalinger — ingen renter eller gebyrer.",
      detail: "Betale over 2-6 måneder"
    },
    {
      icon: "🏦",
      title: "Finansiering",
      desc: "Lån opp til 50 000 kr med fleksibel nedbetaling.",
      detail: "Fra 3-60 måneder, fra 2,99% rente"
    },
    {
      icon: "🏛️",
      title: "HELFO-oppgjør",
      desc: "Vi sender direkte til HELFO. Du betaler kun din del.",
      detail: "For pasienter med HELFO-rett"
    },
    {
      icon: "📅",
      title: "Betalingsplan",
      desc: "Lag din egen plan — vi er fleksible med timing.",
      detail: "Kontakt oss for spesielle avtaler"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Betaling</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Fleksibel betaling
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Pris skal ikke hindre deg fra å få god tannhelse. Vi tilbyr flere betalingsalternativer som passer din økonomi.
          </p>
        </div>

        {/* Payment Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {options.map((option, i) => (
            <div
              key={i}
              className="border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all bg-white/50 backdrop-blur"
            >
                      <h3 className="text-2xl font-bold text-foreground mb-2">{option.title}</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">{option.desc}</p>
              <p className="text-sm text-primary font-semibold">{option.detail}</p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <p className="text-foreground/70 mb-4">
            <span className="font-semibold text-foreground">Usikker hva som passer deg?</span>
            <br />
            Ring oss og vi finner løsningen sammen — ingen forpliktelse.
          </p>
          <a
            href="tel:22837088"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Ring 22 83 70 88
          </a>
        </div>
      </div>
    </section>
  );
};

export default FleksibeltBetalingSection;
