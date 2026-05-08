const GoogleReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Andersen",
      rating: 5,
      text: "Veldig hyggelig og profesjonell behandling. Judith tok seg tid til å forklare alt, og jeg følte meg helt trygg. Kommer definitivt tilbake!",
      initials: "SA"
    },
    {
      name: "Erik Johansen",
      rating: 5,
      text: "Bedre tannlege finnes ikke i Oslo. Moderne utstyr, dyktig personale, og priser som stemmer. Tusen takk!",
      initials: "EJ"
    },
    {
      name: "Maria Kristensen",
      rating: 5,
      text: "Jeg var nervøs, men Judith og teamet var så rolige og snille. Behandlingen var smertefri, og jeg er veldig fornøyd med resultatet.",
      initials: "MK"
    },
    {
      name: "Thomas Berg",
      rating: 5,
      text: "Samme dag akutthjelp når jeg hadde tannpine. Rask, effektiv og greit prissatt. Anbefaleres!",
      initials: "TB"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Pasientomtaler</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Hva pasientene sier
          </h2>
          <p className="text-lg text-foreground/60">
            <span className="text-yellow-400">★★★★★</span> 4.9/5 fra over 200 Google-anmeldelser
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-border/30 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/70 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary text-sm">{review.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-foreground/50">Verifisert pasient</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to see more */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Tannlege+Caspersen+oslo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Se alle anmeldelser på Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
