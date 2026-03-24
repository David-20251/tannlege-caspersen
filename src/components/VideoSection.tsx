import { useState } from "react";
import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const VideoSection = () => {
  const ref = useScrollReveal();
  const [playing, setPlaying] = useState(false);
  const videoId = "oKJIf1RXCa8";

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
              {playing ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
                  title="SmartLook Optikk – 40% på brilleglass"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 w-full h-full group cursor-pointer"
                  aria-label="Spill av video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="SmartLook Optikk video thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform duration-200">
                      <Play className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
