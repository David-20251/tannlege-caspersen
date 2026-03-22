import { ShieldCheck, Award, Car } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Autoriserte Optikere" },
  { icon: Award, text: "Medlem av Norges Optikerforbund" },
  { icon: Car, text: "Gratis parkering" },
];

const TrustBar = () => (
  <div className="bg-primary/[0.06] border-y border-primary/10">
    <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
          <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
