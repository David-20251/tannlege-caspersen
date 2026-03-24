import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import BookingForm from "@/components/BookingForm";
import { forwardRef } from "react";

const CTASection = forwardRef<HTMLDivElement>((_, ref) => {
  const revealRef = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/5">
      <div className="max-w-2xl mx-auto px-6">
        <div ref={revealRef} className="opacity-0">
          <div className="glass-card rounded-2xl p-8 md:p-12 glow-accent">
            <div className="text-center mb-8">
              <span className="offer-badge mb-4">Spar 40% på brilleglass</span>
              <h2 className="text-3xl font-extrabold text-foreground mt-4 mb-2">Bestill din synstest</h2>
              <p className="text-muted-foreground">Fyll inn skjemaet, så tar vi kontakt for å avtale time.</p>
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
