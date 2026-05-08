import { useState } from "react";
import NavbarProduction from "@/components/NavbarProduction";
import Footer from "@/components/Footer";
import { useRef } from "react";

const BehandlingerPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const [selectedCategory, setSelectedCategory] = useState("general");

  const treatments: Record<string, any[]> = {
    general: [
      {
        id: "undersokelse",
        name: "Undersøkelse & røntgen",
        desc: "Grundig undersøkelse med digitale røntgenbilder for å finne årsaken til dine problemer.",
        price: "Fra 1 050 kr",
      },
      {
        id: "rens",
        name: "Tannrens",
        desc: "Profesjonell rens med Airflow-teknologi. Grunnlaget for god tannhelse.",
        price: "Inkl. undersøkelse",
      },
      {
        id: "akutt",
        name: "Akutthjelp",
        desc: "Tannpine, brukket tann, eller tapt fylling? Vi hjelper samme dag.",
        price: "Ring oss",
      },
      {
        id: "fyllinger",
        name: "Fyllinger",
        desc: "Moderne komposittfyllinger i tannfarge som varer og ser naturlig ut.",
        price: "Fra 850 kr",
      },
    ],
    aesthetic: [
      {
        id: "bleking",
        name: "Tannbleking",
        desc: "Lysere smil på kort tid med profesjonell bleking. Trygt og effektivt resultat.",
        price: "2 400 kr",
      },
      {
        id: "porselen",
        name: "Porselensarbeider",
        desc: "Fasetter, kroner og broer i porselen — naturtro resultat med lang holdbarhet.",
        price: "Fra 5 950 kr",
      },
    ],
    complex: [
      {
        id: "rotfylling",
        name: "Rotfylling",
        desc: "Smertefri behandling når nerven i tannen er skadet. Vi redder tenner som ellers ville bli trukket.",
        price: "Etter vurdering",
      },
      {
        id: "ekstraksjoner",
        name: "Tannekstraksjoner",
        desc: "Smertefri fjerning av tenner når det er nødvendig, utført med omsorg.",
        price: "Etter vurdering",
      },
      {
        id: "proteser",
        name: "Proteser",
        desc: "Helproteser og delproteser tilpasset deg — presise og komfortable løsninger.",
        price: "Fra 10 000 kr",
      },
    ],
  };

  const categories = [
    { id: "general", label: "Generell behandling", emoji: "🦷" },
    { id: "aesthetic", label: "Estetisk behandling", emoji: "✨" },
    { id: "complex", label: "Kompleks behandling", emoji: "💪" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <NavbarProduction onBookClick={scrollToForm} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Alle behandlinger
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Fra akutt hjelp til estetisk behandling — vi tilbyr alt du trenger for optimal tannhelse.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === cat.id
                    ? "btn-cta"
                    : "border border-border/50 text-foreground/70 hover:text-foreground"
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          {/* Treatments grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {treatments[selectedCategory]?.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className="border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur"
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">{t.name}</h3>
                <p className="text-foreground/60 mb-4 leading-relaxed">{t.desc}</p>
                <p className="text-lg font-semibold text-primary">{t.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section
        id="priser"
        className="py-20 md:py-28 px-6 bg-primary/5 border-y border-border/50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Priseksempel
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/80 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Nye pasienter</p>
              <p className="text-3xl font-bold text-primary">50%</p>
              <p className="text-sm text-foreground/60 mt-2">rabatt på første konsultasjon</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Studenter</p>
              <p className="text-3xl font-bold text-primary">15%</p>
              <p className="text-sm text-foreground/60 mt-2">rabatt hele året</p>
            </div>
            <div className="bg-white/80 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Fast pasient</p>
              <p className="text-3xl font-bold text-primary">Fri</p>
              <p className="text-sm text-foreground/60 mt-2">årlig kontrolltannrens</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Klar for å bestille?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Ring oss eller bestill time online. Vi svarer innen få minutter.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-cta px-8 py-4 text-lg font-bold rounded-lg"
          >
            Bestill time online
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default BehandlingerPage;
