interface HeroVideoSectionProps {
  onBookClick: () => void;
}

const HeroVideoSection = ({ onBookClick }: HeroVideoSectionProps) => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden -ml-[calc((100vw-100%)/2)]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-screen h-screen object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - Bottom Left */}
      <div className="relative z-10 w-full h-full px-6 flex items-end justify-start pb-12">
        <div className="flex flex-col gap-3">
          <button
            onClick={onBookClick}
            className="btn-cta px-12 py-4 text-lg font-bold shadow-lg hover:scale-105 transition-transform whitespace-nowrap"
          >
            Gratis konsultasjon
          </button>
          <a
            href="tel:22837088"
            className="border-2 border-white text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-colors text-center whitespace-nowrap"
          >
            Ring: 22 83 70 88
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
