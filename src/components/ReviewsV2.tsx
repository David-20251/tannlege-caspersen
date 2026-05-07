const ReviewsV2 = () => {
  const reviews = [
    {
      name: "Anne K. (34)",
      text: "Jeg var nervøs før første besøk. Judith tok seg tid, forklarte alt, og jeg felt meg trygg. Nå gleder jeg meg til tannlegetimen!",
      rating: 5,
    },
    {
      name: "Mikael T. (42)",
      text: "Akutt tannpine, fikk time samme dag. Smertefri og effektiv behandling. Anbefalendes!",
      rating: 5,
    },
    {
      name: "Ingrid S. (51)",
      text: "Hadde dårlig erfaring før. Judith er helt annerledes — ingen stress, bare omsorg. Kjemperesultat!",
      rating: 5,
    },
    {
      name: "Lars M. (67)",
      text: "Fast pasient i mange år. Judith er dyktig, klinikken er moderne. Det beste jeg vet.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
            5,0 stjerner • 6 Google anmeldelser
          </h2>
          <p className="text-lg text-foreground/60">
            Dette er hva pasientene sier om oss
          </p>
        </div>

        {/* Reviews - simple, focused */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-xl p-8 shadow-sm border border-border/30">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
              <p className="text-foreground/70 mb-4 italic leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">{review.name}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center">
          <p className="text-xl font-semibold text-foreground mb-4">
            25+ år erfaring • Moderne teknologi • Pasientfokus
          </p>
          <p className="text-foreground/60">
            Judith Caspersen og hennes team har hjulpet tusenvis av pasienter — fra akutt hjelp til komplekse behandlinger.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsV2;
