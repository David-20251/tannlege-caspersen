import { useEffect, useRef } from "react";

const ServicesV2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Undersøkelse",
      desc: "Moderne utstyr, digitale røntgen, grundig diagnose.",
      price: "Fra 1 050 kr",
      image: "/images/tc-undersokelse.jpg",
    },
    {
      title: "Tannrens",
      desc: "Profesjonell rens med Airflow. Grunnlag for god helse.",
      price: "Inkl. undersøkelse",
      image: "/images/tc-tannrens.jpg",
    },
    {
      title: "Akutthjelp",
      desc: "Tannpine, brukket tann? Vi hjelper samme dag.",
      price: "Ring 22 83 70 88",
      image: "/images/tc-akutthjelp.jpg",
    },
    {
      title: "Tannbleking",
      desc: "Lysere smil på kort tid. Trygt og effektivt.",
      price: "2 400 kr",
      image: "/images/tc-tannbleking.jpg",
    },
    {
      title: "Kroner & broer",
      desc: "Porselen i høy kvalitet. Naturtro resultat.",
      price: "Fra 5 950 kr",
      image: "/images/tc-kroner-broer.jpg",
    },
    {
      title: "Fyllinger",
      desc: "Moderne kompositt som varer og ser naturlig ut.",
      price: "Fra 850 kr",
      image: "/images/tc-fyllinger.jpg",
    },
  ];

  // Scroll-in animation with Intersection Observer
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <>
      <style>{`
        .service-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }
        .service-card:nth-child(1) { transition-delay: 0.05s; }
        .service-card:nth-child(2) { transition-delay: 0.15s; }
        .service-card:nth-child(3) { transition-delay: 0.25s; }
        .service-card:nth-child(4) { transition-delay: 0.35s; }
        .service-card:nth-child(5) { transition-delay: 0.45s; }
        .service-card:nth-child(6) { transition-delay: 0.55s; }
        .card-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .service-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,150,180,0.10);
        }
        .service-card .card-image img {
          transition: transform 0.5s ease;
        }
        .service-card:hover .card-image img {
          transform: scale(1.06);
        }
      `}</style>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Vi tilbyr alt du trenger
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Fra akutt hjelp til estetisk behandling — alle tjenester under ett tak.
            </p>
          </div>

          {/* Services grid */}
          <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card border border-border/40 rounded-2xl overflow-hidden bg-white cursor-default"
                style={{ willChange: "transform", transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Image — fixed height, centered */}
                <div className="card-image w-full h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 text-foreground"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary">{s.price}</p>
                    <span className="text-xs text-foreground/30 font-medium uppercase tracking-wide">Les mer →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-foreground/60 mb-6">Usikker på hva du trenger? Ring oss!</p>
            <a href="tel:22837088" className="btn-cta px-10 py-4 text-lg font-bold inline-block">
              Ring 22 83 70 88
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesV2;
