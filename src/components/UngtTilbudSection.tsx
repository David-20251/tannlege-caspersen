interface UngtTilbudSectionProps {
  onBookClick: () => void;
}

const UngtTilbudSection = ({ onBookClick }: UngtTilbudSectionProps) => {
  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Ungdomstilbud</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Under 30?
              <br />
              <span className="text-primary">Få 25% rabatt</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Vi vet at økonomi kan være streng som ung. Derfor gir vi alle under 30 år 25% rabatt på dine første tre behandlinger — ikke bare den første.
            </p>
            <ul className="space-y-3 mb-8 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>25% rabatt på første 3 behandlinger</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Gjelder alle behandlinger (unntatt kosmetikk)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Gyldig med ID-kopi</span>
              </li>
            </ul>
            <button
              onClick={onBookClick}
              className="btn-cta px-8 py-4 text-lg font-bold rounded-lg"
            >
              Bestill med rabatt →
            </button>
          </div>

          {/* Right: Highlight Box */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-primary/20 shadow-lg">
            <p className="text-foreground/60 mb-4">
              <span className="text-5xl font-bold text-primary">25%</span>
              <br />
              <span className="text-lg">rabatt på første 3 behandlinger</span>
            </p>
            <p className="text-sm text-foreground/50 border-t border-border/30 pt-4 mt-4">
              Må fylles 30 år før 2027 for å kvalifisere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UngtTilbudSection;
