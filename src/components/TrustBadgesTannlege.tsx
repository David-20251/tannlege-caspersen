const TrustBadgesTannlege = () => {
  const badges = [
    { emoji: "👨‍⚕️", label: "25+ år erfaring", sub: "Judith Caspersen" },
    { emoji: "💡", label: "Moderne teknologi", sub: "Digitale røntgen + The Wand" },
    { emoji: "🚨", label: "Same-day akutttimer", sub: "Ring 22 83 70 88" },
    { emoji: "✓", label: "Smertefri behandling", sub: "Lokalbedøvelse som virkelig virker" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-3 text-center md:text-left">
          <div className="text-3xl flex-shrink-0">{b.emoji}</div>
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
