import { useRef, useEffect, useState } from "react";

interface HeroVideoSectionProps {
  onBookClick: () => void;
}

const HeroVideoSection = ({ onBookClick }: HeroVideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobilePortrait(window.innerWidth < 768 && window.innerHeight > window.innerWidth);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const objectPosition = isMobilePortrait ? "30% center" : "center center";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Flexbox container for video + buttons */}
      <div className="flex flex-col">
        {/* Video section - takes proportional space */}
        <div className="relative w-full h-[65vh] sm:h-[70vh] md:h-screen md:min-h-[600px] md:max-h-[1000px] overflow-hidden">
          {/* Poster — vises umiddelbart mens video laster */}
          <div
            className={`absolute inset-0 bg-neutral-900 transition-opacity duration-700 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition }}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Buttons section - side by side */}
        <div className="w-full py-2 px-3 sm:px-6 flex justify-start">
          <div className="flex flex-row gap-3 w-full">
            <button
              onClick={onBookClick}
              className="btn-cta flex-1 py-3 px-2 sm:px-4 text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Gratis konsultasjon
            </button>
            <a
              href="tel:22837088"
              className="border-2 border-primary text-primary flex-1 py-3 px-2 sm:px-4 rounded-lg text-base sm:text-lg font-bold hover:bg-primary/5 transition-colors text-center"
            >
              Ring: 22 83 70 88
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
