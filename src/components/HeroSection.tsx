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
        <div className="relative mb-2">
          {/* Arrow above headline on mobile, to the right on desktop */}
          <svg
            className="relative mb-3 w-[180px] h-[70px] sm:absolute sm:mb-0 sm:-right-6 sm:-top-2 sm:w-[180px] sm:h-[70px] md:-right-32 md:-top-2 md:w-[260px] md:h-[90px] pointer-events-none hero-arrow-container"
            viewBox="0 0 260 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* "Se her!" badge */}
            <rect x="145" y="0" rx="12" ry="12" width="110" height="38" fill="hsl(25, 95%, 53%)" className="hero-arrow-label-bg" />
            <text
              x="200"
              y="26"
              fill="white"
              fontSize="19"
              fontWeight="900"
              fontFamily="Inter, sans-serif"
              textAnchor="middle"
              className="hero-arrow-label-1"
            >
              Se her!
            </text>
            {/* Thick arrow pointing left */}
            <path
              d="M200 40C185 52 140 62 70 58"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="7"
              strokeLinecap="round"
              className="hero-arrow-path-1"
            />
            <path
              d="M84 44L62 58L84 72"
              stroke="hsl(25, 95%, 53%)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-arrow-tip-1"
            />
          </svg>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mb-6">
            <span className="text-gradient animate-pulse-glow">40% rabatt</span>
            <br />
            på alle brilleglass
          </h1>
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
