import { ShieldCheck, Award, MapPin, Star, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Autorisert tannlege" },
  { icon: Star,        text: "25+ års erfaring" },
  { icon: Award,       text: "50% nye pasienter" },
  { icon: MapPin,      text: "Oslo sentrum" },
  { icon: Users,       text: "15% studentrabatt" },
];

const TrustBar = () => (
  <div className="relative z-10 -mt-10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="glass-card shimmer-border rounded-2xl px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 depth-card stagger-children">
        {items.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2.5 text-sm text-foreground/75 animate-text-reveal"
          >
            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
