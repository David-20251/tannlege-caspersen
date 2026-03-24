import davidImg from "@/assets/david.jpg";
import butikkImg from "@/assets/butikk.webp";
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
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={davidImg}
                  alt="David Guldager – autorisert optiker hos SmartLook Optikk"
                  className="w-full h-[420px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-5 py-2 rounded-xl font-semibold text-sm shadow-lg">
                Autorisert optiker
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                David Guldager er autorisert optiker med lang erfaring innen synsundersøkelser og øyehelse. 
                Hos SmartLook Optikk på Sørumsand får du en grundig og personlig oppfølging – 
                fra synsprøve til ferdig brille.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Med avansert utstyr som OCT-A netthinneundersøkelse og moderne 
                brilletilpasning, sørger David for at du får den beste synsopplevelsen. 
                Akkurat nå med <span className="text-primary font-semibold">40% rabatt på alle brilleglass</span>.
              </p>

              <div className="overflow-hidden rounded-xl mt-4">
                <img
                  src={butikkImg}
                  alt="SmartLook Optikk butikk på Sørumsand"
                  className="w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Vår butikk i Tverrveien 1, Sørumsand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOptician;
