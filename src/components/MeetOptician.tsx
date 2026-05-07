import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, Heart, Users } from "lucide-react";

const credentials = [
  { icon: Award, text: "Autorisert tannlege — 25+ års klinisk erfaring" },
  { icon: Heart, text: "Pasienten alltid i fokus — omsorgsfull og grundig" },
  { icon: Users, text: "Erfaren med alle aldersgrupper, fra barn til eldre" },
];

const MeetOptician = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-secondary/5 mesh-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Møt tannlegen
            </p>
            <h2
              className="text-3xl md:text-5xl text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
            >
              Judith Caspersen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                Judith Caspersen er en erfaren og omsorgsfull tannlege med over 25 år i klinikk.
                Hennes filosofi er enkel: <span className="italic text-foreground">"For oss er pasienten alltid i fokus."</span>
              </p>
              <p className="text-foreground/65 leading-relaxed">
                Klinikken er sentralt beliggende i Klingenberggata 5 i Oslo, rett ved Nationalteateret og Aker Brygge.
                Judith spesialiserer seg på alt fra akutthjelp og rutinebehandling til estetisk tannbehandling
                som tannbleking og porselensarbeider.
              </p>

              <ul className="space-y-4 mt-4">
                {credentials.map((c) => (
                  <li key={c.text} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <c.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed pt-1">{c.text}</p>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="glass-card rounded-xl p-4 text-center depth-card card-3d">
                  <div className="card-3d-inner">
                    <p className="text-3xl font-extrabold text-gradient mb-1">25+</p>
                    <p className="text-xs text-muted-foreground">Års erfaring</p>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center depth-card card-3d">
                  <div className="card-3d-inner">
                    <p className="text-3xl font-extrabold text-gradient-gold mb-1">50%</p>
                    <p className="text-xs text-muted-foreground">Første konsultasjon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual placeholder — swap with real photo when available */}
            <div className="relative">
              <div
                className="glass-card shimmer-border depth-card rounded-3xl overflow-hidden aspect-[3/4] flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsla(196,75%,38%,0.08) 0%, hsla(222,60%,20%,0.06) 50%, hsla(42,88%,52%,0.06) 100%)",
                }}
              >
                <div className="text-center px-8">
                  <div className="w-28 h-28 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-4 float-slow">
                    <span className="text-5xl">🦷</span>
                  </div>
                  <p
                    className="text-xl text-foreground/70 mb-1"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    Judith Caspersen
                  </p>
                  <p className="text-sm text-muted-foreground">Autorisert tannlege</p>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-6 right-6 glass-card rounded-xl px-4 py-3 depth-card float-medium">
                  <p className="text-xs font-bold text-foreground">⭐ Pasientenes favoritt</p>
                  <p className="text-xs text-muted-foreground">Oslo sentrum</p>
                </div>
              </div>

              {/* Decorative 3D orb */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full float-3d opacity-40"
                style={{ background: "radial-gradient(circle, hsla(196,75%,55%,0.5) 0%, transparent 70%)" }}
              />
            </div>
          </div>

          {/* Team */}
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {[
              { name: "Wenche E. Sæther", role: "Tannpleier", desc: "Spesialist på forebyggende tannhelse og profesjonell tannstenrens." },
              { name: "Heidi Hande", role: "Tannlegeassistent", desc: "Sikrer at alle behandlinger gjennomføres effektivt og komfortabelt." },
            ].map((t) => (
              <div key={t.name} className="card-3d">
                <div className="card-3d-inner glass-card rounded-2xl p-6 flex gap-4 items-start depth-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                    👤
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">{t.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOptician;
