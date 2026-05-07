interface AkuttSectionProps {
  onBookClick: () => void;
}

const AkuttSection = ({ onBookClick }: AkuttSectionProps) => (
  <section className="py-16 md:py-20 bg-red-50 border-y border-red-100">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-red-600 text-sm font-bold uppercase tracking-widest">Akutthjelp</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Tannpine nå?
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-6">
            Ring oss direkte. Vi prioriterer akuttpasienter og strekker oss langt for å hjelpe deg samme dag — uten at du trenger å lide unødvendig.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span className="text-foreground/70">Same-day akuttimer etter tilgjengelighet</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span className="text-foreground/70">Smertelindring fra første stund</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-bold">•</span>
              <span className="text-foreground/70">Åpent man–fre 08:00–16:00</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:22837088"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Ring nå: 22 83 70 88
            </a>
            <button
              onClick={onBookClick}
              className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-lg text-lg hover:border-primary hover:text-primary transition-colors"
            >
              Bestill online →
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-red-100 text-center">
          <p className="text-4xl font-bold text-red-600 mb-2">22 83 70 88</p>
          <p className="text-foreground/60 text-sm">Man–Fre · 08:00–16:00</p>
          <p className="text-foreground/60 text-sm mt-1">Klingenberggata 5, Oslo</p>
        </div>
      </div>
    </div>
  </section>
);

export default AkuttSection;
