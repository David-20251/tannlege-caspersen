import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useScrollReveal();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div ref={ref} className="opacity-0">
          {/* Contact Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-8 md:pb-12 mb-8 md:mb-12 border-b border-border/50">
            {/* Adresse */}
            <div className="flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Adresse</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Klingenberggata+5+Oslo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                Klingenberggata 5<br />0161 Oslo
              </a>
            </div>

            {/* Telefon */}
            <div className="flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Telefon</p>
              <a href="tel:22837088" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                22 83 70 88
              </a>
            </div>

            {/* E-post */}
            <div className="flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">E-post</p>
              <a href="mailto:j.casper@online.no" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 break-all">
                j.casper@online.no
              </a>
            </div>

            {/* Åpningstider */}
            <div className="flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Åpningstider</p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Man–Fre<br />08:00–16:00
              </p>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pb-8 md:pb-12 mb-8 md:mb-12 border-b border-border/50">
            {/* Behandlinger */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Behandlinger</p>
              <ul className="space-y-2">
                <li>
                  <a href="/behandlinger/tannrens" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Tannrens & Profylakse
                  </a>
                </li>
                <li>
                  <a href="/behandlinger/fyllinger" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Fyllinger
                  </a>
                </li>
                <li>
                  <a href="/behandlinger/akutthjelp" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Akutthjelp
                  </a>
                </li>
                <li>
                  <a href="/behandlinger" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Alle behandlinger
                  </a>
                </li>
              </ul>
            </div>

            {/* Informasjon */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Informasjon</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/om-oss" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Om oss
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Priser
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Personvern
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Vilkår
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Kontakt</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/kontakt" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Kontaktinformasjon
                  </Link>
                </li>
                <li>
                  <a href="tel:22837088" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Ring oss
                  </a>
                </li>
                <li>
                  <a href="mailto:j.casper@online.no" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Send e-post
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
                    Bestill time
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Footer */}
          <div className="pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-foreground/60">
              © {new Date().getFullYear()} Tannlege Caspersen. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
