import { ShieldCheck, Clock, MapPin, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AnimatedArrow from "@/components/AnimatedArrow";

const benefits = [
  {
    icon: ShieldCheck,
    title: "25+ år med erfaring",
    desc: "Judith Caspersen har behandlet tusenvis av pasienter. Du er i trygge, rutinerte hender.",
  },
  {
    icon: Heart,
    title: "Pasienten alltid i fokus",
    desc: "Rolig og trygg atmosfære. Vi tar oss god tid og lytter til dine bekymringer og ønsker.",
  },
  {
    icon: MapPin,
    title: "Midt i Oslo sentrum",
    desc: "Klingenberggata 5 — rett ved Nationalteateret T-banestasjon og Aker Brygge.",
  },
  {
    icon: Clock,
    title: "Rask hjelp ved akutt",
    desc: "Tannpine venter ikke. Kontakt oss for akuttime — vi prioriterer pasienter som trenger rask hjelp.",
  },
];

interface BenefitsSectionProps {
  onBookClick: () => void;
}

const BenefitsSection = ({ onBookClick }: BenefitsSectionProps) => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Benefits grid */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Fordeler</p>
              <h2
                className="text-3xl md:text-4xl text-foreground mb-10"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
              >
                Hvorfor velge<br />Tannlege Caspersen?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 stagger-children">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4 group animate-text-reveal">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/18 transition-colors duration-200 group-hover:scale-110 transition-transform">
                      <b.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 text-sm">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="flex flex-col items-center">
              <AnimatedArrow label="Tilbud!" />

              <div className="glass-card shimmer-border depth-card rounded-3xl p-8 md:p-10 glow-primary text-center w-full card-3d">
                <div className="card-3d-inner">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5 float-medium">
                    <span className="text-3xl">🦷</span>
                  </div>
                  <h3
                    className="text-2xl text-foreground mb-2"
                    style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
                  >
                    50% rabatt på første konsultasjon
                  </h3>
                  <p className="text-muted-foreground mb-2 leading-relaxed text-sm">
                    Nye pasienter får halv pris på første besøk inkl. 2 røntgenbilder og rens.
                  </p>
                  <p className="text-sm font-semibold text-gradient-gold mb-8">
                    Studenter: 15% fast rabatt på alle behandlinger
                  </p>
                  <button onClick={onBookClick} className="btn-cta px-8 py-4 text-base w-full sm:w-auto animate-cta-attention">
                    Bestill time gratis
                  </button>
                  <p className="text-xs text-muted-foreground mt-4">Ingen binding · Sentral beliggenhet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
