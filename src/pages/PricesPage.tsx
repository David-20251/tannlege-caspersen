import { useRef } from "react";
import NavbarProduction from "@/components/NavbarProduction";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  items: PriceItem[];
}

const PricesPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const prices: PriceCategory[] = [
    {
      title: "Konsultasjon & Undersøkelse",
      items: [
        { name: "Konsultasjon inkl. 2 røntgen + enkel rens og Airflow", price: "1 050 kr" },
        { name: "Undersøkelse av akuttpasient", price: "550 kr" },
        { name: "Enkelt røntgenbilde", price: "110 kr" },
        { name: "Bedøvelse", price: "160 kr" },
      ],
    },
    {
      title: "Fyllinger",
      items: [
        { name: "Plastfylling - 1 flate", price: "850 kr" },
        { name: "Plastfylling - 2 flater", price: "1 250 kr" },
        { name: "Plastfylling - 3 flater", price: "1 450 kr" },
      ],
    },
    {
      title: "Estetisk Behandling",
      items: [
        { name: "Skallfasetter i porselen", price: "5 950 kr" },
        { name: "Tannbleking per kjeve", price: "2 400 kr inkl. tekniker" },
      ],
    },
    {
      title: "Kronarbeid & Protese",
      items: [
        { name: "Fullkrone i porselen", price: "5 950 kr" },
        { name: "Tannbro per ledd", price: "5 950 kr" },
        { name: "Helprotese", price: "10 000 kr inkl. tekniker" },
        { name: "Trekking av tann - ukomplisert/komplisert", price: "900 kr / 1 450 kr" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavbarProduction onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Transparente Priser</p>
            <h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Ingen skjulte kostander
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Alle priser er klare fra starten. Vi tror på transparens og ærlig prising.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {prices.map((category) => (
              <div key={category.title}>
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start md:items-center gap-6 pb-4 border-b border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <span className="text-foreground/80 flex-1 leading-relaxed">{item.name}</span>
                      <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-8"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Spesiale for deg
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* New Patient Discount */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-sm">
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Nye pasienter</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">50% rabatt</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Få gratis første konsultasjon inkl. røntgen, rens og Airflow for kun <span className="text-primary font-bold">525 kr</span> i stedet for 1 050 kr.
              </p>
              <p className="text-sm text-foreground/60">Gjelder første time kun</p>
            </div>

            {/* Student Discount */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-sm">
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Studenter</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">15% rabatt</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Gjeldende på alle behandlinger, <span className="text-primary font-bold">alltid</span> — både på første time og videre behandlinger.
              </p>
              <p className="text-sm text-foreground/60">Gyldig med studentbevis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection ref={formRef} />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default PricesPage;
