import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import BookingForm from "@/components/BookingForm";
import { forwardRef } from "react";

const CTASection = forwardRef<HTMLDivElement>((_, ref) => {
  const revealRef = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 mesh-bg">
      <div className="max-w-2xl mx-auto px-6">
        <div ref={revealRef} className="opacity-0">
          <div className="glass-card shimmer-border depth-card rounded-3xl p-8 md:p-12 glow-primary">
            <div className="text-center mb-8">
              <span className="gold-badge mb-4">Gratis første konsultasjon for nye pasienter</span>
              <h2
                className="text-3xl md:text-4xl text-foreground mt-5 mb-3"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
              >
                Kom i gang i dag
              </h2>
              <p className="text-muted-foreground">
                Fyll inn skjemaet, så ringer vi deg for å avtale tid. Ingen forpliktelse.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
