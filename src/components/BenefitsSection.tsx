import { ShieldCheck, Clock, Award, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const benefits = [
  { icon: ShieldCheck, title: "Autorisert optiker", desc: "Faglig trygghet med David Guldager gjennom hele prosessen" },
  { icon: Clock, title: "Rask service", desc: "Kort ventetid og effektiv oppfølging fra bestilling til ferdig brille" },
  { icon: Award, title: "40% på brilleglass", desc: "Spar stort på kvalitetsglass fra ledende produsenter" },
  { icon: Heart, title: "Personlig oppfølging", desc: "Skreddersydd rådgivning tilpasset dine behov og livsstil" },
];

interface BenefitsSectionProps {
  onBookClick: () => void;
}

const BenefitsSection = ({ onBookClick }: BenefitsSectionProps) => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: benefits grid */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Fordeler</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">
                Hvorfor velge SmartLook?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="relative glass-card rounded-2xl p-8 pt-16 sm:pt-8 md:p-10 md:pt-10 text-center glow-accent overflow-visible">
              {/* Animated arrow - above card on mobile, floating top-left on desktop */}
              <svg
                className="absolute left-1/2 -translate-x-1/2 -top-[70px] w-[160px] h-[80px] sm:left-auto sm:translate-x-0 sm:-left-12 sm:-top-16 sm:w-[180px] sm:h-[140px] md:-left-28 md:-top-20 md:w-[240px] md:h-[180px] pointer-events-none block benefit-arrow-container"
                viewBox="0 0 240 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* "Tilbud!" badge */}
                <rect x="0" y="0" rx="12" ry="12" width="110" height="40" fill="hsl(25, 95%, 53%)" className="benefit-arrow-label-bg" />
                <text
                  x="55"
                  y="28"
                  fill="white"
                  fontSize="20"
                  fontWeight="900"
                  fontFamily="Inter, sans-serif"
                  textAnchor="middle"
                  className="benefit-arrow-label"
                >
                  Tilbud!
                </text>
                {/* Thick curvy arrow */}
                <path
                  d="M55 42C70 65 105 85 140 100C170 112 190 130 190 155"
                  stroke="hsl(25, 95%, 53%)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="benefit-arrow-path"
                />
                <path
                  d="M176 145L190 162L204 145"
                  stroke="hsl(25, 95%, 53%)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="benefit-arrow-tip"
                />
              </svg>

              <h3 className="text-2xl font-extrabold text-foreground mb-3">Spar 40% på brilleglass</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Bestill synsprøve i dag og få 40% rabatt på alle brilleglass ved kjøp av en komplett brille. Tilbudet gjelder så lenge det varer.
              </p>
              <button onClick={onBookClick} className="btn-cta px-8 py-4 text-lg w-full sm:w-auto">
                Bestill synstest
              </button>
              <p className="text-xs text-muted-foreground mt-4">Ingen binding · Gratis parkering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
