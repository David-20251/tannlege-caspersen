import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Hva koster en tannlegeundersøkelse?",
    a: "En full konsultasjon inkl. 2 røntgenbilder, enkel rens og Airflow koster 1 050 kr. Som ny pasient får du 50% rabatt — altså kun 525 kr. Studenter får 15% fast rabatt.",
  },
  {
    q: "Hva gjør jeg ved akutt tannpine?",
    a: "Ring oss direkte på 22 83 70 88. Vi prioriterer akuttpasienter og gjør vårt beste for å se deg samme dag. Vær ute i god tid — ikke vent til smerten er uutholdelig.",
  },
  {
    q: "Er behandlingene smertefrie?",
    a: "Ja! Vi bruker The Wand — en avansert teknologi for smertefri lokal­bedøvelse. De fleste pasienter merker nesten ingen smerte. Vi tar alltid hensyn til ditt komfortnivå.",
  },
  {
    q: "Jeg er veldig nervøs for tannlegen — kan dere hjelpe?",
    a: "Absolutt. Tannlegeskrekk er vanlig, og vi har lang erfaring med nervøse pasienter. Judith tar seg god tid, forklarer hvert steg, og vi stopper alltid om du trenger en pause.",
  },
  {
    q: "Hvor lang tid tar en vanlig undersøkelse?",
    a: "En standard undersøkelse tar 45–60 minutter. Inkludert røntgen, rens og gjennomgang av funn. Du vil aldri bli stresset ut av stolen.",
  },
  {
    q: "Kan jeg betale med forsikring?",
    a: "Ja, vi jobber med de fleste forsikringsselskaper. Ta kontakt på j.casper@online.no eller ring oss for å avklare din dekning på forhånd.",
  },
  {
    q: "Tar dere imot barnepatienter?",
    a: "Ja, vi tar imot barn og unge. Tidlig oppfølging av barns tannhelse er viktig, og vi gjør alltid besøket til en god opplevelse.",
  },
  {
    q: "Hva er adresse og åpningstider?",
    a: "Vi holder til i Klingenberggata 5, 0161 Oslo — rett ved Nationalteateret T-bane. Åpent mandag–fredag 08:00–16:00.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Spørsmål & svar</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Vanlige spørsmål
          </h2>
          <p className="text-lg text-foreground/60">
            Finner du ikke svaret? Ring oss på <a href="tel:22837088" className="text-primary font-semibold">22 83 70 88</a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-foreground">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-border/30 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
