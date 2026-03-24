import { Eye, Glasses, Scan, Droplets } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import octScan from "@/assets/oct-scan.png";

const services = [
  {
    icon: Eye,
    title: "Synstest",
    desc: "Grundig synsundersøkelse med høy nøyaktighet – tilpasset dine daglige behov og krav til førerkort.",
  },
  {
    icon: Glasses,
    title: "Briller",
    desc: "Stort utvalg kvalitetsinnfatninger og glass fra ledende produsenter. Nå med 40% rabatt på glass.",
  },
  {
    icon: Scan,
    title: "OCT netthinnescan",
    desc: "Avansert Revo FC130 gir detaljerte bilder av netthinnen for tidlig oppdagelse av øyesykdommer.",
  },
  {
    icon: Droplets,
    title: "Tørre øyne",
    desc: "Analyse og anbefaling av lindrende tiltak for tørre, irriterte eller slitne øyne.",
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Alt for din synshelse
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="glass-card rounded-xl p-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-200">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Featured: OCT scan image */}
          <div className="mt-10 glass-card rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="img-hover">
                <img
                  src={octScan}
                  alt="OCT-A netthinneundersøkelse – avansert skanning"
                  className="w-full h-full min-h-[240px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scan className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3 text-xl">OCT-A netthinneundersøkelse</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Verdensledende Revo FC130 gir detaljerte tverrsnitt og blodstrømskart over netthinnen.
                  Tidlig oppdagelse av øyesykdommer som glaukom og makuladegenerasjon.
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
