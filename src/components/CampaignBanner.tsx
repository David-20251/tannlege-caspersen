import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CampaignBanner = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Campaign message */}
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Trygg behandling</p>
              <h2
                className="text-4xl md:text-5xl text-foreground mb-6 leading-tight"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700 }}
              >
                Her blir du<br />
                <span className="text-gradient">helt trygg</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
                Vi skjønner at tannlegen kan være skummelt. Derfor tar Judith seg tid til å høre på dine bekymringer og forklare alt underveis. Ingen stressende behandlinger — bare ren omsorg.
              </p>
              <button className="btn-cta px-8 py-4 text-lg hover:scale-105 transition-transform duration-300">
                Bestill trygghetssamtale
              </button>
            </div>

            {/* Right: Trust stats with 3D effect */}
            <div className="space-y-5">
              {[
                { icon: "🛡️", title: "Fullt trygg", desc: "Bedøvelse som virkelig virker" },
                { icon: "⏱️", title: "God tid", desc: "Vi bruker tid på deg — ikke rush" },
                { icon: "📋", title: "Transparens", desc: "Full forklaring før enhver behandling" },
                { icon: "💪", title: "Erfaring", desc: "25+ år med tusenvis av fornøyde pasienter" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card-3d animate-text-reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="card-3d-inner glass-card rounded-2xl p-6 depth-card hover:border-primary/30 transition-all duration-300">
                    <div className="flex gap-4">
                      <span className="text-3xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-foreground/60">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;
