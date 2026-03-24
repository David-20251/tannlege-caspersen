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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "py-2 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-foreground">
          SmartLook <span className="text-primary">Optikk</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:48608939" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Phone className="w-4 h-4" />
            48 60 89 39
          </a>
          <a href="mailto:post@smartlookoptikk.no" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Mail className="w-4 h-4" />
            post@smartlookoptikk.no
          </a>
          <button
            onClick={onBookClick}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Bestill synsprøve
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 space-y-4 animate-fade-up">
          <a href="tel:48608939" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" /> 48 60 89 39
          </a>
          <a href="mailto:post@smartlookoptikk.no" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" /> post@smartlookoptikk.no
          </a>
          <button
            onClick={() => { onBookClick(); setMenuOpen(false); }}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold"
          >
            Bestill synsprøve
          </button>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
