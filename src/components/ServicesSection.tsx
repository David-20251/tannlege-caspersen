import { AlertCircle, Search, Sparkles, Layers, RotateCcw, Scissors, Smile, Archive } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: AlertCircle,
    title: "Akutthjelp",
    desc: "Tannpine, brukket tann eller tapt fylling? Vi hjelper deg raskt. Kontakt oss for å få en akuttime.",
    price: null,
    highlight: true,
  },
  {
    icon: Search,
    title: "Undersøkelse & røntgen",
    desc: "Grundig undersøkelse med digitale røntgenbilder og Airflow-rens. Grunnlaget for god tannhelse.",
    price: "Fra 1 050 kr",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Tannbleking",
    desc: "Profesjonell bleking for en lysere, hvitere smil. Trygt og effektivt resultat.",
    price: "2 400 kr / kjeve",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Porselensarbeider",
    desc: "Facetter, kroner og broer i porselen — naturtro resultat med lang holdbarhet.",
    price: "5 950 kr",
    highlight: false,
  },
  {
    icon: RotateCcw,
    title: "Rotfylling",
    desc: "Smertefri behandling ved infeksjon i tannnerven. Vi redder tenner som ellers ville bli trukket.",
    price: null,
    highlight: false,
  },
  {
    icon: Smile,
    title: "Fyllinger",
    desc: "Komposittfyllinger i tannfarge — sterke, estetiske og holdbare erstatninger for amalgam.",
    price: "850–1 450 kr",
    highlight: false,
  },
  {
    icon: Scissors,
    title: "Tannekstraksjoner",
    desc: "Smertefri fjerning av tenner når det er nødvendig, utført med omsorg og presisjon.",
    price: null,
    highlight: false,
  },
  {
    icon: Archive,
    title: "Proteser",
    desc: "Helproteser og delproteser tilpasset deg — vi lager presise, komfortable løsninger.",
    price: "Fra 10 000 kr",
    highlight: false,
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Tjenester</p>
            <h2
              className="text-3xl md:text-5xl text-foreground mb-4"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
            >
              Alt for din tannhelse
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fra akutthjelp til estetisk behandling — vi tar oss av deg i trygge hender.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card-3d group cursor-default ${s.highlight ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`card-3d-inner glass-card rounded-2xl p-6 h-full depth-card ${
                    s.highlight ? "shimmer-border" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 ${
                      s.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 group-hover:bg-primary/18"
                    }`}
                  >
                    <s.icon className="w-6 h-6" style={s.highlight ? {} : { color: "hsl(196,75%,38%)" }} />
                  </div>
                  <h3
                    className="font-bold text-foreground mb-2 text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.title}
                    {s.highlight && (
                      <span className="ml-2 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Akutt
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  {s.price && (
                    <p className="text-sm font-semibold text-gradient-gold mt-auto">{s.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Amalgam removal highlight */}
          <div className="mt-8 glass-card shimmer-border rounded-2xl p-8 depth-card">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Amalgamfjerning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vi bytter ut gamle amalgamfyllinger med moderne, tannfargede komposittfyllinger.
                  Trygt utført etter gjeldende protokoll — for en mer estetisk og helsevennlig tannflate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
