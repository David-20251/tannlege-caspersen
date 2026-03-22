import { useEffect, useState } from "react";
import { Phone, Mail } from "lucide-react";

interface StickyHeaderProps {
  onBookClick: () => void;
}

const StickyHeader = ({ onBookClick }: StickyHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 px-6 bg-card/95 backdrop-blur-md shadow-md shadow-foreground/[0.04] border-b border-border"
          : "py-4 px-6 bg-card border-b border-border"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-foreground">
          SmartLook <span className="text-primary">Optikk</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="tel:48608939"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">48 60 89 39</span>
          </a>
          <a
            href="mailto:post@smartlookoptikk.no"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>post@smartlookoptikk.no</span>
          </a>
          <button
            onClick={onBookClick}
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 shadow-sm"
          >
            Bestill time
          </button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
