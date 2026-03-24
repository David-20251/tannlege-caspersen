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
            <div className="relative glass-card rounded-2xl p-8 md:p-10 text-center glow-accent">
              {/* Big animated arrow pointing at "Spar 40%" */}
              <svg
                className="absolute -left-8 md:-left-20 -top-10 md:-top-12 w-[120px] h-[100px] md:w-[160px] md:h-[120px] pointer-events-none hidden sm:block"
                viewBox="0 0 160 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15C50 5 100 10 130 40C145 55 148 75 140 95"
                  stroke="hsl(25, 95%, 53%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="benefit-arrow-path"
                />
                <path
                  d="M130 88L140 98L150 88"
                  stroke="hsl(25, 95%, 53%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="benefit-arrow-tip"
                />
                <text
                  x="5"
                  y="12"
                  fill="hsl(25, 95%, 53%)"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="Inter, sans-serif"
                  className="benefit-arrow-label"
                >
                  Tilbud!
                </text>
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
