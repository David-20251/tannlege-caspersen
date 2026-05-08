import { useRef, useEffect, useState } from "react";

interface HeroVideoSectionProps {
  onBookClick: () => void;
}

const HeroVideoSection = ({ onBookClick }: HeroVideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-[120px]">
      <div className="flex flex-col">
        {/* Video — sizes itself naturally, no fixed height */}
        <div className="relative w-full overflow-hidden">
          <div
            className={`absolute inset-0 bg-neutral-900 transition-opacity duration-700 ${
              videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            className={`w-full h-auto block transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Buttons — side by side, directly below video */}
        <div className="w-full px-3 sm:px-6">
          <div className="flex flex-row gap-3 w-full">
            <button
              onClick={onBookClick}
              className="btn-cta flex-1 py-3 px-2 sm:px-4 text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Book Premium Konsultasjon
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
