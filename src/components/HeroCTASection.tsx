interface HeroCTASectionProps {
  onBookClick: () => void;
}

const HeroCTASection = ({ onBookClick }: HeroCTASectionProps) => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 px-6 sm:px-10 bg-gradient-to-b from-black/50 to-background">
      <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-sm">
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
    </section>
  );
};

export default HeroCTASection;
