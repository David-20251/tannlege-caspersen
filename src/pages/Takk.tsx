import { CheckCircle2, Phone, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Takk = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ref.current?.classList.add("section-fade-in");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <header className="py-4 px-6 border-b border-border/50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            SmartLook <span className="text-primary">Optikk</span>
          </Link>
          <a href="tel:63824000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span>63 82 40 00</span>
          </a>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-6 py-20 md:py-32">
        <div ref={ref} className="opacity-0 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 glow-accent">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Takk for din bestilling!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            Vi kontakter deg innen 24 timer for å bekrefte din time.
          </p>
          <p className="text-muted-foreground mb-8">
            Du vil motta en SMS-bekreftelse på telefonen din.
          </p>

          <div className="glass-card rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold text-foreground mb-4">Hva skjer videre?</h2>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                Du mottar en SMS-bekreftelse innen noen minutter
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                Vi ringer deg for å avtale endelig tidspunkt
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                Møt opp til din synsprøve og spar 40% på brilleglass
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Tilbake til forsiden
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=59.987272,11.246747"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Se veibeskrivelse
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Takk;
