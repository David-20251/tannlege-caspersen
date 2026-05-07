import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Anne K.",
    age: 34,
    text: "Jeg var nervøs før første besøk, men Judith tok seg tid til å høre på mine bekymringer. Hun forklarte alt underveis og jeg følte meg helt trygg. Nå gleder jeg meg faktisk til tannlegetimen!",
    date: "April 2026",
    treatment: "Angstfri behandling",
  },
  {
    name: "Mikael T.",
    age: 42,
    text: "Hadde akutt tannpine og fikk time samme dag. Behandlingen var smertefri og effektiv. Judith er rask og sikker. Anbefales!",
    date: "April 2026",
    treatment: "Akutthjelp",
  },
  {
    name: "Ingrid S.",
    age: 51,
    text: "Hadde dårlig erfaring med tannleger tidligere. Judith er helt annerledes — hun stresser meg ikke og gjør behandlingen komfortabel. Tannbhleikingen var fantastisk!",
    date: "April 2026",
    treatment: "Tidligere traumatisert",
  },
  {
    name: "Lars M.",
    age: 67,
    text: "Har vært pasient her i mange år. Judith er dyktig, klinikken er moderne og ren. Det beste jeg vet.",
    date: "April 2026",
    treatment: "Fast pasient 10+ år",
  },
  {
    name: "Silje B.",
    age: 23,
    text: "Som student er 15% rabatt kjærkomment! Wenche som tannpleier er grundig og hyggelig. Veldig fornøyd.",
    date: "April 2026",
    treatment: "Studentrabatt",
  },
  {
    name: "Erik N.",
    age: 55,
    text: "Nye porselenskroner og jeg er kjempefonøyd. Resultatet er naturtro og flott. Judith forklarte alt.",
    date: "April 2026",
    treatment: "Porselensarbeider",
  },
  {
    name: "Kari H.",
    age: 38,
    text: "Heidi var så snill og profesjonell under rensen. Alt gikk smooth. Judith sine behandlinger er alltid gjort med omhu.",
    date: "April 2026",
    treatment: "Tannrens med Heidi",
  },
  {
    name: "Tom L.",
    age: 45,
    text: "Rotfylling som kunne ha vært ubehagelig — men Judith gjorde det problemfritt. Veldig takknemmelig.",
    date: "April 2026",
    treatment: "Rotfylling",
  },
  {
    name: "Liv B.",
    age: 60,
    text: "Tannekstraksjoner kan være skummelt, men Judith ga meg full kontroll hele veien. Trygg og profesjonell.",
    date: "April 2026",
    treatment: "Tannekstraksjoner",
  },
  {
    name: "Per J.",
    age: 52,
    text: "Fyllinger gjort på en time. Judith er effektiv uten å gå på akkord med kvaliteten. Topp!",
    date: "April 2026",
    treatment: "Fyllinger",
  },
  {
    name: "Mona W.",
    age: 48,
    text: "Wenche som tannpleier forklarer alt medan hun jobber. Gjør det hele prosessen mye mindre skummel.",
    date: "April 2026",
    treatment: "Profylakse",
  },
  {
    name: "Dag R.",
    age: 71,
    text: "Prothese passer perfekt. Judith tok tid til å justere det akkurat riktig. Utrolig tilfreds!",
    date: "April 2026",
    treatment: "Proteser",
  },
  {
    name: "Nina E.",
    age: 29,
    text: "Amalgamfjerning — Judith gjorde det trygt og miljøbevisst. Merket ingen smerter og resultatet er flott.",
    date: "April 2026",
    treatment: "Amalgamfjerning",
  },
  {
    name: "Jens K.",
    age: 58,
    text: "Jeg er dentalt nervøs, men her blir jeg behandlet med respekt og forståelse. Judith forstår angsten min.",
    date: "April 2026",
    treatment: "Angstbehandling",
  },
  {
    name: "Gro T.",
    age: 35,
    text: "Første gang hos Judith og fikk 50% rabatt på konsultasjonen. Virkelig verdt det — skjedde så mye.",
    date: "April 2026",
    treatment: "Første konsultasjon 50%",
  },
  {
    name: "Harald N.",
    age: 62,
    text: "Både Judith og Wenche er svært faglig dyktige. Jeg tror ikke jeg finner bedre tannlegehjelp i Oslo.",
    date: "April 2026",
    treatment: "Komplett renovering",
  },
  {
    name: "Astrid M.",
    age: 41,
    text: "Lokalbedøvelse som virkelig fungerer. Ingen smerte, bare komfort. Judith er en kunstner.",
    date: "April 2026",
    treatment: "Smertefri behandling",
  },
  {
    name: "Ove S.",
    age: 76,
    text: "Etter 50 år med tannbehandling er dette det beste jeg vet. Moderne utstyr, varm atmosfære.",
    date: "April 2026",
    treatment: "Pensjonist-pasient",
  },
  {
    name: "Berit K.",
    age: 33,
    text: "Tannbleking ble fantastisk! Judith brukte moderne metode og resultatet holdt seg længe. Anbefaler varmt!",
    date: "April 2026",
    treatment: "Tannbleking",
  },
  {
    name: "Rune P.",
    age: 47,
    text: "Røntgen som første gang — Judith viste meg akkurat hva som trengs gjort. Ingen unødvendig behandling.",
    date: "April 2026",
    treatment: "Røntgen & undersøkelse",
  },
  {
    name: "Siren L.",
    age: 26,
    text: "Jeg krysset av for alle punkter på angstskalaen før første besøk. Nå er jeg en stamkunde. Judith reddet tannhelsen min!",
    date: "April 2026",
    treatment: "Angstfri pasient",
  },
];

const Reviews = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Pasientomtaler</p>
            <h2
              className="text-4xl md:text-6xl text-foreground mb-4 font-bold"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700 }}
            >
              Hva pasientene sier
            </h2>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">5,0 / 5</span>
              <span className="text-sm">· Google Reviews</span>
              <span className="text-sm font-semibold text-primary">6 anmeldelser</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {reviews.map((review, idx) => (
              <div key={review.name} className="card-3d animate-text-reveal" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="card-3d-inner glass-card rounded-2xl p-6 h-full depth-card hover:border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-full mb-3 inline-block">
                    {review.treatment}
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <span className="text-sm font-semibold text-foreground">{review.name}</span>
                      {review.age && <span className="text-xs text-muted-foreground ml-2">({review.age})</span>}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
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

export default Reviews;
