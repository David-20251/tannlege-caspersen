import { Phone } from "lucide-react";
import heroImage from "@/assets/butikk.webp";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Floating background elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 float-slow" />
      <div className="absolute bottom-20 -left-16 w-72 h-72 rounded-full bg-secondary/5 float-medium" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/3 float-medium" />
    </div>

    <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            40% rabatt på brilleglass
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mb-6">
            Din lokale optiker
            <br />
            <span className="text-gradient">på Sørumsand</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Bestill synstest og få ekspertråd fra autorisert optiker David Guldager.
            Spar 40% på alle brilleglass ved kjøp av komplett brille.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={onBookClick}
              className="btn-cta px-8 py-4 text-lg"
            >
              Bestill synstest
            </button>
            <a
              href="tel:48608939"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-4 rounded-xl hover:bg-muted/50"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">48 60 89 39</span>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="animate-fade-up relative" style={{ animationDelay: "0.1s" }}>
          <div className="img-hover rounded-2xl shadow-2xl shadow-foreground/10 overflow-hidden">
            <img
              src={heroImage}
              alt="Moderne brillebutikk hos SmartLook Optikk på Sørumsand"
              className="w-full h-[400px] md:h-[520px] object-cover"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 md:-left-8 glass-card rounded-2xl px-5 py-4 shadow-lg float-medium">
            <p className="text-sm font-bold text-foreground">⭐ 5.0 på Google</p>
            <p className="text-xs text-muted-foreground">Fornøyde kunder</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
