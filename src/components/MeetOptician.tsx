import davidImg from "@/assets/david.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const MeetOptician = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Din optiker
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Møt David Guldager
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                David Guldager er autorisert optiker med lang erfaring innen synsundersøkelser og øyehelse. 
                Hos SmartLook Optikk på Sørumsand får du en grundig og personlig oppfølging – 
                fra synsprøve til ferdig brille.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Med avansert utstyr som OCT-A netthinneundersøkelse sikrer David presis 
                diagnostikk og optimal brilletilpasning. Akkurat nå får du <span className="text-primary font-semibold">40% rabatt på alle brilleglass ved kjøp av komplett brille</span>.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img
                src={davidImg}
                alt="Optiker David Guldager hos SmartLook Optikk"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                David Guldager – autorisert optiker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOptician;
