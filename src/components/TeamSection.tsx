const team = [
  {
    name: "Judith Caspersen",
    role: "Tannlege",
    image: "/images/Ansatt2-caspersen-2-compressor.jpg",
    bio: "Judith har drevet klinikken i Klingenberggata 5 i over 25 år. Med autorisasjon som allmennpraktiserende tannlege og et genuint ønske om å hjelpe, er hun kjent for sin ro, grundighet og evne til å gjøre selv nervøse pasienter trygge. Hun benytter The Wand — en teknologi som gir smertefri bedøvelse.",
    highlights: ["25+ år erfaring", "Smertefri bedøvelse", "The Wand-teknologi"],
  },
  {
    name: "Wenche E. Sæther",
    role: "Tannpleier",
    image: "/images/Ansatt1-caspersen2-compressor.jpg",
    bio: "Wenche er høyskoleutdannet tannpleier med spesialisering innen kariesdiagnostikk og behandling av tannkjøttbetennelse (periodontitt). Hun gjennomfører grundige tannrenser med Airflow og gir deg skreddersydd råd om munnhygiene og kosthold.",
    highlights: ["Kariesdiagnostikk", "Periodontitt-behandling", "Airflow-rens"],
  },
  {
    name: "Heidi Hande",
    role: "Tannlegeassistent",
    image: "/images/Ansatt3-caspersen-2-compressor.jpg",
    bio: "Heidi sørger for at klinikken går smidig og at du som pasient føler deg ivaretatt fra du ankommer til du går. Med sin varme og profesjonelle fremtoning er hun et trygt ansikt du alltid blir møtt av.",
    highlights: ["Pasientmottak", "Klinikk-koordinator", "Varm og profesjonell"],
  },
];

const TeamSection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Teamet</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Møt dine tannleger
        </h2>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Et erfarent, dedikert team som jobber for at du alltid skal føle deg trygg.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-2xl p-8 shadow-sm border border-border/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="text-center mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
              />
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mt-1">{member.role}</p>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">{member.bio}</p>
            <div className="space-y-2">
              {member.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-bold">•</span>
                  <span className="text-sm text-foreground/70">{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          "I Klingenberggaten 5 kan vi love deg at vi vil gjøre alt for at du skal føle deg trygg og at du vil få den behandling du ønsker. Vi benytter oss av moderne digitalt utstyr og The Wand som gir smertefri bedøvelse."
        </p>
        <p className="text-primary font-bold mt-4">— Judith Caspersen</p>
      </div>
    </div>
  </section>
);

export default TeamSection;
