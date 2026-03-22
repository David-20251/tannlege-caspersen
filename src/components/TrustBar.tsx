import { ShieldCheck, Award, Car } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Autoriserte Optikere" },
  { icon: Award, text: "Norges Optikerforbund" },
  { icon: Car, text: "Gratis parkering" },
];

const TrustBar = () => (
  <div className="relative z-10 -mt-8">
    <div className="max-w-4xl mx-auto px-6">
      <div className="glass-card rounded-2xl px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2.5 text-sm text-foreground/70">
            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
