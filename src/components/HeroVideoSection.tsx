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
    <section
      className="relative w-full overflow-hidden h-[65vh] sm:h-[70vh] md:h-screen md:min-h-[600px] md:max-h-[1000px]"
    >
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      {/* Innhold — nede til venstre */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-10">
        <div className="flex flex-col gap-3 w-full max-w-xs sm:max-w-sm">
          <button
            onClick={onBookClick}
            className="btn-cta w-full py-4 text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Gratis konsultasjon
          </button>
          <a
            href="tel:22837088"
            className="border-2 border-white text-white w-full py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white/10 transition-colors text-center"
          >
            Ring: 22 83 70 88
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
