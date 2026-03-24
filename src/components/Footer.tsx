import { Phone, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = () => {
  const ref = useScrollReveal();

  return (
    <>
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref} className="opacity-0">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="glass-card rounded-xl p-6">
                <Phone className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">Ring oss</p>
                <a href="tel:63824000" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  63 82 40 00
                </a>
              </div>
              <div className="glass-card rounded-xl p-6">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">Besøk oss</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=59.987272,11.246747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Tverrveien 1, 1920 Sørumsand
                </a>
              </div>
              <div className="glass-card rounded-xl p-6">
                <Clock className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">Åpningstider</p>
                <p className="text-sm text-muted-foreground">Man–Fre 10–17 · Lør 11–15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartLook Optikk — Tverrveien 1, 1920 Sørumsand —{" "}
            <a
              href="https://www.smartlookoptikk.no"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              smartlookoptikk.no
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
