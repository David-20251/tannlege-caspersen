interface PricingTier {
  name: string;
  price: string | number;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Gratis Konsultasjon",
    price: "525 kr",
    description: "Perfekt for nye pasienter",
    features: [
      "Komplett tannstatus",
      "2 røntgenbilder",
      "Enkel rens + Airflow",
      "Personlig behandlingsplan",
    ],
    cta: "Bestill gratis",
  },
  {
    name: "VIP Prioritert",
    price: "2 500 kr",
    description: "Raskere, enklere, tryggere",
    features: [
      "Prioritert time (ingen venteliste)",
      "Utvidet 90-min konsultasjon",
      "Detaljert 3D-røntgen",
      "Direkte oppfølging fra Judith",
      "30% rabatt på behandlinger",
    ],
    isPopular: true,
    cta: "Velg VIP",
  },
];

const PricingTiers = () => (
  <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Priser</p>
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Velg ditt nivå
        </h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Alle pakker inkluderer smertefri behandling med The Wand. Nye pasienter starter med gratis konsultasjon.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 transition-all duration-300 ${
              tier.isPopular
                ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary shadow-lg scale-105 md:scale-100"
                : "bg-white border border-border/20 hover:border-primary/30"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-sm text-foreground/60 mt-1">{tier.description}</p>
              </div>
              {tier.isPopular && (
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                  MEST POPULÆRT
                </span>
              )}
            </div>

            <div className="mb-6 py-4 border-y border-border/20">
              <p className="text-4xl font-bold text-primary">{tier.price}</p>
              <p className="text-sm text-foreground/60 mt-1">for første konsultasjon</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full btn-cta py-3.5 font-bold transition-all hover:shadow-lg">
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-foreground/60">
          Usikker på hva du trenger?{" "}
          <a href="tel:22837088" className="text-primary font-semibold hover:underline">
            Ring oss på 22 83 70 88
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default PricingTiers;
