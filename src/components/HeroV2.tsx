interface HeroV2Props {
  onBookClick: () => void;
}

const HeroV2 = ({ onBookClick }: HeroV2Props) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background pt-32 pb-16 px-6">
      <div className="max-w-2xl w-full text-center">

        {/* Main problem + solution headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Få et smil <br />
          <span className="text-primary">du faktisk er trygg på</span>
        </h1>

        {/* Problem statement - pasienten gjenkjenner seg */}
        <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-xl mx-auto font-medium">
          Smerter når du tygger? Unngår du å smile på bilder? Eller har du utsatt tannlegebesøk for lenge?
        </p>

        {/* Promise */}
        <p className="text-lg text-foreground/60 mb-10 max-w-lg mx-auto">
          Vi finner årsaken — og gir deg en løsning som varer. Med 25+ års erfaring og moderne teknologi.
        </p>

        {/* Main CTA - this is the only action */}
        <button
          onClick={onBookClick}
          className="btn-cta px-12 py-5 text-xl font-bold animate-cta-attention mb-6 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Bestill time gratis
        </button>

        {/* Trust signals - minimal but powerful */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">5,0 stjerner • 6 anmeldelser</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">25+ års erfaring</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Same-day akutttimer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
