import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Kari Henriksen",
    text: "Fantastisk service hos SmartLook Optikk! David tok seg god tid og forklarte alt grundig. Fikk nye glass med 40% rabatt – veldig fornøyd!",
    date: "Februar 2026",
  },
  {
    name: "Thomas Bergli",
    text: "Beste synsprøven jeg har vært på. Moderne utstyr og en optiker som virkelig bryr seg. Anbefales på det varmeste til alle på Sørumsand.",
    date: "Januar 2026",
  },
  {
    name: "Lise Paulsen",
    text: "Tok med hele familien til synsprøve. Alle ble tatt godt imot, og barna syntes det var spennende med de avanserte maskinene. Topp!",
    date: "Mars 2026",
  },
];

const Reviews = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Kundeomtaler</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Hva kundene sier
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-semibold text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
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
