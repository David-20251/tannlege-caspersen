interface HeroVideoSectionProps {
  onBookClick: () => void;
}

const HeroVideoSection = ({ onBookClick }: HeroVideoSectionProps) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookClick}
            className="btn-cta px-12 py-4 text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Gratis konsultasjon
          </button>
          <a
            href="tel:22837088"
            className="border-2 border-white text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-colors"
          >
            Ring: 22 83 70 88
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
