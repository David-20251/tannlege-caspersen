import { useState } from "react";

interface SedertBehandlingSectionProps {
  onBookClick: () => void;
}

const SedertBehandlingSection = ({ onBookClick }: SedertBehandlingSectionProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Sedert behandling</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Nervøs for
                <br />
                <span className="text-accent">tannlegen?</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Vi tilbyr sikker sedert behandling slik at du kan slappe helt av. Ingen stress, ingen frykt — bare profesjonell behandling under trygge forhold.
              </p>
              <ul className="space-y-3 mb-8 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Trygg og kontrollert sedasjon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Erfaren anestesiolog tilstede</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Du sover gjennom hele behandlingen</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-cta px-8 py-4 text-lg font-bold rounded-lg"
                >
                  Lær mer om sedert →
                </button>
              </div>
            </div>

            {/* Right: Highlight Box */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-accent/20 shadow-lg">
              <p className="text-foreground/60 mb-4">
                <span className="text-2xl font-bold text-accent">For deg som</span>
                <br />
                <span className="text-foreground text-lg leading-relaxed mt-2 block">
                  • Har tannlegeskrekk
                  <br />
                  • Har dårlige erfaringer
                  <br />
                  • Trenger lang behandling
                </span>
              </p>
              <p className="text-sm text-foreground/50 border-t border-border/30 pt-4 mt-4">
                Ring 22 83 70 88 for konsultasjon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-accent/5 border-b border-border/30 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Sedert behandling for nervøse
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl text-foreground/60 hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Hva er sedert behandling?</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Sedert (eller sedasjon) er en trygg metode for å redusere angst og stress under tannbehandling. Du får mikstur som gjør deg rolig og avslappet, mens vi utfører behandlingen.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Hvordan fungerer det?</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="font-bold">1.</span>
                    <span>Du ankommer ca. 30 min før behandlingen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">2.</span>
                    <span>Vi gir deg sedativ oralt (som drikke)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">3.</span>
                    <span>Du blir rolig og slapper av naturlig</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">4.</span>
                    <span>Vi utfører behandlingen mens du er avslappet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">5.</span>
                    <span>Du våkner opp etterpå uten å ha merket noe</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Sikkerhet</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Din sikkerhet er vår prioritet. En erfaren anestesiolog er tilstede under hele behandlingen. Vi overvåker ditt blodtrykk, puls og oksygenmetning kontinuerlig.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">Hvem er det for?</h4>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  Sedert behandling er ideelt for pasienter som:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Har alvorlig tannlegeskrekk eller angst</li>
                  <li>• Trenger omfattende dental arbeid</li>
                  <li>• Har sensitiv munncavitet</li>
                  <li>• Har dårlige tidligere erfaringer</li>
                </ul>
              </div>

              <div className="bg-accent/5 rounded-lg p-4">
                <p className="text-sm text-foreground/70 mb-4">
                  Vil du lære mer eller booke en konsultasjon?
                </p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    onBookClick();
                  }}
                  className="btn-cta w-full py-3 text-center font-bold rounded-lg"
                >
                  Bestill konsultasjon
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SedertBehandlingSection;
