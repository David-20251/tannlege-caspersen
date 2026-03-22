import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

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

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-fade-in");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Reviews = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Hva kundene sier
            </h2>
            <p className="text-muted-foreground text-lg">
              Over 500 fornøyde kunder på Sørumsand
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className="bg-background rounded-xl p-6 shadow-md shadow-foreground/[0.03] border border-border/60 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {review.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
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
