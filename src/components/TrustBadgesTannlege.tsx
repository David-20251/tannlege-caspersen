const TrustBadgesTannlege = () => {
  const badges = [
    { label: "25+ år erfaring", sub: "Judith Caspersen" },
    { label: "Moderne teknologi", sub: "Digitale røntgen + The Wand" },
    { label: "Same-day akutttimer", sub: "Ring 22 83 70 88" },
    { label: "Smertefri behandling", sub: "Lokalbedøvelse som virkelig virker" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-3 text-center md:text-left">
          <div>
            <p className="text-sm font-semibold text-foreground">{b.label}</p>
            <p className="text-xs text-muted-foreground">{b.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadgesTannlege;
