import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";

interface NavbarProductionProps {
  onBookClick: () => void;
}

const NavbarProduction = ({ onBookClick }: NavbarProductionProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const navigate = useNavigate();

  const treatments = [
    { name: "Undersøkelse & røntgen", path: "/behandlinger/undersokelse-rontgen" },
    { name: "Tannbleking", path: "/behandlinger/tannbleking" },
    { name: "Akutthjelp", path: "/behandlinger/akutthjelp" },
    { name: "Porselensarbeider", path: "/behandlinger/porselen" },
    { name: "Rotfylling", path: "/behandlinger/rotfylling" },
    { name: "Fyllinger", path: "/behandlinger/fyllinger" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-foreground" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px" }}>
              Tannlege <span className="text-primary">Caspersen</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Hjem
            </Link>

            {/* Treatments Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Behandlinger
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-border/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                {treatments.map((t) => (
                  <Link
                    key={t.name}
                    to={t.path}
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {t.name}
                  </Link>
                ))}
                <Link
                  to="/behandlinger"
                  className="block px-4 py-2 text-sm font-semibold text-primary border-t border-border/20 mt-2 pt-2"
                >
                  Se alle behandlinger →
                </Link>
              </div>
            </div>

            <Link to="/priser" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Priser
            </Link>

            <Link to="/om-oss" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Om oss
            </Link>

            <Link to="/kontakt" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Right side: CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:22837088" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4" />
              22 83 70 88
            </a>

            <button
              onClick={onBookClick}
              className="btn-cta px-6 py-2.5 text-sm font-bold rounded-lg"
            >
              Bestill time
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Meny"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border/20 pt-4">
            <Link to="/" className="block text-sm font-medium text-foreground/70 hover:text-foreground py-2" onClick={() => setMenuOpen(false)}>
              Hjem
            </Link>

            <div>
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground w-full py-2"
              >
                Behandlinger
                <ChevronDown className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              {treatmentsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {treatments.map((t) => (
                    <Link
                      key={t.name}
                      to={t.path}
                      className="block text-xs text-foreground/60 hover:text-primary py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {t.name}
                    </Link>
                  ))}
                  <Link
                    to="/behandlinger"
                    className="block text-xs font-semibold text-primary py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    Se alle →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/priser" className="block text-sm font-medium text-foreground/70 hover:text-foreground py-2" onClick={() => setMenuOpen(false)}>
              Priser
            </Link>

            <Link to="/om-oss" className="block text-sm font-medium text-foreground/70 hover:text-foreground py-2" onClick={() => setMenuOpen(false)}>
              Om oss
            </Link>

            <Link to="/kontakt" className="block text-sm font-medium text-foreground/70 hover:text-foreground py-2" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-2 border-t border-border/20">
              <a href="tel:22837088" className="block text-sm font-semibold text-primary py-2">
                22 83 70 88
              </a>
              <button
                onClick={() => {
                  onBookClick();
                  setMenuOpen(false);
                }}
                className="w-full btn-cta px-6 py-3 text-sm font-bold rounded-lg"
              >
                Bestill time
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarProduction;
