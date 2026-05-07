import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

interface StickyHeaderProps {
  onBookClick: () => void;
}

const StickyHeader = ({ onBookClick }: StickyHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-background/92 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Tannlege <span className="text-gradient">Caspersen</span>
        </span>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:22837088"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            22 83 70 88
          </a>
          <a
            href="mailto:j.casper@online.no"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            j.casper@online.no
          </a>
          <a href="tel:22837088" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors duration-200">
            🚨 Akutt-time
          </a>
          <button onClick={onBookClick} className="btn-cta px-6 py-2.5 text-sm">
            Bestill time
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Meny"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/96 backdrop-blur-xl border-b border-border p-6 space-y-4 animate-text-reveal">
          <a href="tel:22837088" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" /> 22 83 70 88
          </a>
          <a href="mailto:j.casper@online.no" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" /> j.casper@online.no
          </a>
          <a href="tel:22837088" className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-center transition-colors duration-200">
            🚨 Akutt-time
          </a>
          <button
            onClick={() => { onBookClick(); setMenuOpen(false); }}
            className="w-full btn-cta py-3"
          >
            Bestill time
          </button>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
