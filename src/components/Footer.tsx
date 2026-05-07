import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = () => {
  const ref = useScrollReveal();

  return (
    <>
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref} className="opacity-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
              <div className="card-3d animate-text-reveal">
                <div className="card-3d-inner glass-card depth-card rounded-2xl p-6 text-center">
                  <Phone className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1">Ring oss</p>
                  <a href="tel:22837088" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    22 83 70 88
                  </a>
                </div>
              </div>

              <div className="card-3d animate-text-reveal delay-100">
                <div className="card-3d-inner glass-card depth-card rounded-2xl p-6 text-center">
                  <Mail className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1">E-post</p>
                  <a href="mailto:j.casper@online.no" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 break-all">
                    j.casper@online.no
                  </a>
                </div>
              </div>

              <div className="card-3d animate-text-reveal delay-200">
                <div className="card-3d-inner glass-card depth-card rounded-2xl p-6 text-center">
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1">Besøk oss</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Klingenberggata+5+Oslo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Klingenberggata 5<br />0161 Oslo
                  </a>
                </div>
              </div>

              <div className="card-3d animate-text-reveal delay-300">
                <div className="card-3d-inner glass-card depth-card rounded-2xl p-6 text-center">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="font-bold text-foreground mb-1">Åpningstider</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Man–Fre<br />08:00–16:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tannlege Caspersen — Klingenberggata 5, 0161 Oslo
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="mailto:j.casper@online.no" className="hover:text-primary transition-colors duration-200">
              j.casper@online.no
            </a>
            {" · "}
            <a href="tel:22837088" className="hover:text-primary transition-colors duration-200">
              22 83 70 88
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
