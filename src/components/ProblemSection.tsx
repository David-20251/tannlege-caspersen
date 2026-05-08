interface ProblemSectionProps {
  onBookClick: () => void;
}

const ProblemSection = ({ onBookClick }: ProblemSectionProps) => {
  const problems = [
    {
      title: "Du er nervøs for tannlegen",
      desc: "Mange utsetter tannlegebesøk i årevis av frykt. Hos oss tar vi det på alvor — vi forklarer alt og setter eget tempo.",
    },
    {
      title: "Du har smerter eller tannpine",
      desc: "Tannpine som har vart for lenge? Vi ser på deg samme dag. Ingen skal lide unødvendig.",
    },
    {
      title: "Du er ikke fornøyd med smilet ditt",
      desc: "Misfarging, skjeve tenner, eller hull? Vi finner løsningen som passer ditt budsjett og ønsker.",
    },
    {
      title: "Du har utsatt det lenge nok",
      desc: "Jo lenger du venter, jo mer komplekst blir problemet. Tak kontakt i dag og få en profesjonell vurdering av dine behov.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Vi forstår deg</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-background" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Kjenner du deg igjen?
          </h2>
          <p className="text-xl text-background/60 max-w-2xl mx-auto">
            Du er ikke alene. Vi hjelper hundrevis av pasienter som føler akkurat det samme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((p) => (
            <div key={p.title} className="border border-background/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 bg-background/5 backdrop-blur">
              <h3 className="text-xl font-bold mb-3 text-background">{p.title}</h3>
              <p className="text-background/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-background/60 mb-6 text-lg">
            Uansett hva du sliter med — vi har løsningen.
          </p>
          <button
            onClick={onBookClick}
            className="bg-primary text-white font-bold px-12 py-5 rounded-lg text-lg hover:bg-primary/90 transition-colors hover:scale-105 transform duration-200"
          >
            Book Premium Konsultasjon →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
