interface HeroVideoSectionProps {
  onBookClick: () => void;
}

const HeroVideoSection = ({ onBookClick }: HeroVideoSectionProps) => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - Bottom Left */}
      <div className="relative z-10 w-full h-full px-6 sm:px-10 flex items-end justify-start pb-10 sm:pb-14">
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
