import { useRef, useEffect, useState } from "react";

const HeroVideoSection = () => {
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
    </section>
  );
};

export default HeroVideoSection;
