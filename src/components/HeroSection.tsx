import { Phone } from "lucide-react";
import heroImage from "@/assets/butikk.webp";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Full-bleed background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Moderne brillebutikk hos SmartLook Optikk på Sørumsand"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
    </div>

    {/* Floating background elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 float-slow" />
      <div className="absolute bottom-20 -left-16 w-72 h-72 rounded-full bg-secondary/5 float-medium" />
    </div>

    <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
      <div className="max-w-xl animate-fade-up">
        {/* Headline */}
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mb-6">
            <span className="text-gradient animate-pulse-glow">40% rabatt</span>
            <br />
            på alle brilleglass
          </h1>

          {/* Big arrow pointing directly at "40% rabatt" from the right */}
          <svg
            className="absolute -right-2 -top-10 w-[130px] h-[65px] sm:-right-6 sm:top-0 sm:w-[140px] sm:h-[60px] md:-right-28 md:top-2 md:w-[220px] md:h-[80px] block pointer-events-none hero-arrow-container"
            viewBox="0 0 220 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* "Se her!" badge */}
            <rect x="120" y="0" rx="10" ry="10" width="96" height="32" fill="hsl(25, 95%, 53%)" className="hero-arrow-label-bg" />
            <text
              x="168"
              y="22"
              fill="white"
              fontSize="16"
              fontWeight="900"
              fontFamily="Inter, sans-serif"
              textAnchor="middle"
              className="hero-arrow-label-1"
            >
              Se her!
            </text>
            {/* Thick arrow pointing left */}
            <path
              d="M168 34C158 44 120 52 60 50"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="6"
              strokeLinecap="round"
              className="hero-arrow-path-1"
            />
            <path
              d="M74 38L56 50L74 62"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-arrow-tip-1"
            />
          </svg>
        </div>

        <p className="text-lg text-foreground/70 mb-10 max-w-lg leading-relaxed">
          Bestill synstest hos din lokale optiker på Sørumsand og spar stort ved kjøp av komplett brille.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 relative">
          <button onClick={onBookClick} className="btn-cta px-8 py-4 text-lg animate-cta-attention">
            Bestill synstest
          </button>
          <a
            href="tel:48608939"
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200 px-4 py-4 rounded-xl hover:bg-background/40 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">48 60 89 39</span>
          </a>
        </div>
      </div>
    </div>

    {/* Floating badge */}
    <div className="absolute bottom-12 right-8 md:right-16 z-10 glass-card rounded-2xl px-5 py-4 shadow-lg float-medium hidden md:block">
      <p className="text-sm font-bold text-foreground">⭐ 4.6 på Google</p>
      <p className="text-xs text-muted-foreground">Fornøyde kunder</p>
    </div>
  </section>
);

export default HeroSection;
