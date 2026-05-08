import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const MapSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="opacity-0">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Besøk oss</p>
            <h2
              className="text-4xl md:text-5xl text-foreground mb-4"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700 }}
            >
              Finn oss i Oslo sentrum
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Lett tilgjengelig fra Nationalteateret T-bane. Velkommen!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="card-3d animate-text-reveal">
                <div className="card-3d-inner glass-card rounded-2xl p-0 overflow-hidden depth-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5779654321!2d10.729598!3d59.913607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7e0184e9af%3A0xd0cc7332731589e0!2sTannlege%20Caspersen!5e0!3m2!1sno!2sno!4v1620000000000"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridAutoRows: "minmax(0, 1fr)" }}>
              <div className="card-3d animate-text-reveal delay-100">
                <div className="card-3d-inner glass-card rounded-2xl p-6 depth-card hover:border-primary/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Ring oss</h3>
                  <a href="tel:22837088" className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg">
                    22 83 70 88
                  </a>
                </div>
              </div>

              <div className="card-3d animate-text-reveal delay-150">
                <div className="card-3d-inner glass-card rounded-2xl p-6 depth-card hover:border-primary/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Besøk oss</h3>
                  <a
                    href="https://www.google.com/maps/place/Tannlege+Caspersen/@59.9136066,10.7295989,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    Klingenberggata 5<br />
                    0161 Oslo<br />
                    <span className="text-primary font-semibold">Se veibeskrivelse</span>
                  </a>
                </div>
              </div>

              <div className="card-3d animate-text-reveal delay-200">
                <div className="card-3d-inner glass-card rounded-2xl p-6 depth-card hover:border-primary/20 transition-all duration-300">
                  <Clock className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Åpningstider</h3>
                  <p className="text-foreground/70 text-sm">
                    Man–Fre<br />
                    08:00–16:00
                  </p>
                </div>
              </div>

              <div className="card-3d animate-text-reveal delay-250">
                <div className="card-3d-inner glass-card rounded-2xl p-6 depth-card hover:border-primary/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">E-post</h3>
                  <a href="mailto:j.casper@online.no" className="text-foreground/70 hover:text-primary transition-colors text-sm break-all">
                    j.casper@online.no
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
