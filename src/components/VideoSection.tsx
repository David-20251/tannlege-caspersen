import { useEffect, useRef } from "react";

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

const VideoSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Se vår video
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Trenger du nye briller?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Se hvordan vi hjelper deg med å finne de perfekte brillene – med 40% rabatt på alle brilleglass.
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden glow-accent">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/oKJIf1RXCa8?rel=0&modestbranding=1"
                title="SmartLook Optikk – 40% på brilleglass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
