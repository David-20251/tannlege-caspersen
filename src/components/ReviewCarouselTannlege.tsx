import { useRef, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";

interface Review {
  name: string;
  text: string;
  stars: number;
  age?: number;
}

const reviews: Review[] = [
  {
    name: "Anne K.",
    age: 34,
    text: "Jeg var nervøs før første besøk. Judith tok seg tid, forklarte alt, og jeg følte meg trygg.",
    stars: 5,
  },
  {
    name: "Mikael T.",
    age: 42,
    text: "Akutt tannpine, fikk time samme dag. Smertefri og effektiv behandling. Anbefales!",
    stars: 5,
  },
  {
    name: "Ingrid S.",
    age: 51,
    text: "Hadde dårlig erfaring før. Judith er helt annerledes — ingen stress, bare omsorg.",
    stars: 5,
  },
  {
    name: "Lars M.",
    age: 67,
    text: "Fast pasient i mange år. Judith er dyktig, klinikken er moderne. Topp!",
    stars: 5,
  },
  {
    name: "Silje B.",
    age: 23,
    text: "Som student er 15% rabatt kjærkomment! Wenche som tannpleier er grundig og hyggelig.",
    stars: 5,
  },
  {
    name: "Erik N.",
    age: 55,
    text: "Nye porselenskroner og jeg er kjempefonøyd. Resultatet er naturtro og flott.",
    stars: 5,
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-80 flex-shrink-0 rounded-2xl border border-border bg-white/80 backdrop-blur p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-0.5">
        {[...Array(review.stars)].map((_, s) => (
          <Star key={s} className="h-4 w-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed flex-1">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border/30">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {review.name}
            {review.age && <span className="text-muted-foreground"> ({review.age})</span>}
          </p>
          <p className="text-xs text-muted-foreground">Google Anmeldelse</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewCarouselTannlege() {
  const trackRef = useRef<HTMLDivElement>(null);
  const set1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!set1Ref.current || !trackRef.current) return;
    const setWidth = set1Ref.current.offsetWidth;
    trackRef.current.style.setProperty("--marquee-set-width", `${setWidth}px`);
  }, []);

  const duration = `${reviews.length * 5}s`;

  return (
    <div className="w-full">
      {/* Google rating badge */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <p className="text-3xl font-bold text-foreground">5,0</p>
        <p className="text-sm text-muted-foreground mt-1">
          Basert på 6 Google-anmeldelser
        </p>
        <a
          href="https://www.google.com/maps/place/Tannlege+Caspersen/@59.9136066,10.7295989,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-2 text-sm text-primary hover:underline font-medium"
        >
          Se alle anmeldelser på Google
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Scrolling carousel */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex marquee-track gap-4"
          style={{
            animationDuration: duration,
            willChange: "transform",
          }}
        >
          {/* Set 1 */}
          <div ref={set1Ref} className="flex gap-4 flex-shrink-0">
            {reviews.map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} />
            ))}
          </div>
          {/* Set 2 - duplicate */}
          <div className="flex gap-4 flex-shrink-0" aria-hidden>
            {reviews.map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} />
            ))}
          </div>
          {/* Set 3 - extra for fullscreen */}
          <div className="flex gap-4 flex-shrink-0" aria-hidden>
            {reviews.map((review, i) => (
              <ReviewCard key={`c-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      {/* Write review CTA */}
      <div className="text-center mt-8">
        <a
          href="https://www.google.com/maps/place/Tannlege+Caspersen/@59.9136066,10.7295989,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Fornøyd? Skriv en anmeldelse på Google →
        </a>
      </div>
    </div>
  );
}
