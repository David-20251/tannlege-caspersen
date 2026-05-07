import { Phone } from "lucide-react";
import AnimatedArrow from "@/components/AnimatedArrow";

interface HeroSectionProps {
  onBookClick: () => void;
}

const ToothSVG = () => (
  <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="M60 8C38 8 18 24 18 48c0 10 4 20 8 30l6 36c1 6 5 10 10 10s9-4 10-10l4-20c0-2 2-4 4-4s4 2 4 4l4 20c1 6 5 10 10 10s9-4 10-10l6-36c4-10 8-20 8-30C102 24 82 8 60 8z"
      fill="currentColor"
      opacity="0.15"
    />
    <path
      d="M60 8C38 8 18 24 18 48c0 10 4 20 8 30l6 36c1 6 5 10 10 10s9-4 10-10l4-20c0-2 2-4 4-4s4 2 4 4l4 20c1 6 5 10 10 10s9-4 10-10l6-36c4-10 8-20 8-30C102 24 82 8 60 8z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
      fill="none"
      opacity="0.6"
    />
    <circle cx="42" cy="38" r="5" fill="currentColor" opacity="0.3" />
    <circle cx="60" cy="30" r="6" fill="currentColor" opacity="0.25" />
    <circle cx="78" cy="38" r="5" fill="currentColor" opacity="0.3" />
  </svg>
);

const HeroSection = ({ onBookClick }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">

    {/* Animated gradient backdrop */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        background: "radial-gradient(ellipse 100% 80% at 70% 50%, hsla(196,75%,38%,0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 20% 80%, hsla(222,60%,20%,0.08) 0%, transparent 60%)",
      }}
    />

    {/* Floating 3D orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full float-slow opacity-30"
        style={{ background: "radial-gradient(circle, hsla(196,75%,55%,0.25) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -left-20 w-96 h-96 rounded-full float-medium opacity-20"
        style={{ background: "radial-gradient(circle, hsla(42,88%,52%,0.3) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full float-slow opacity-15"
        style={{ background: "radial-gradient(circle, hsla(222,60%,40%,0.2) 0%, transparent 70%)", animationDelay: "2s" }}
      />
    </div>

    {/* Floating 3D tooth icons */}
    <div className="absolute right-8 top-24 w-28 h-32 text-primary float-3d tooth-glow opacity-40 hidden lg:block" style={{ animationDelay: "0s" }}>
      <ToothSVG />
    </div>
    <div className="absolute right-32 bottom-24 w-18 h-20 text-primary float-3d tooth-glow opacity-25 hidden lg:block" style={{ width: 72, height: 80, animationDelay: "2s" }}>
      <ToothSVG />
    </div>
    <div className="absolute left-8 bottom-32 w-16 h-20 text-accent float-3d opacity-20 hidden xl:block" style={{ animationDelay: "3.5s" }}>
      <ToothSVG />
    </div>

    <div className="max-w-6xl mx-auto px-6 w-full relative z-10 pt-24 pb-16">
      <div className="max-w-2xl">

        {/* Patient-first greeting */}
        <div className="animate-scale-in mb-8">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 animate-text-reveal font-bold"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Hei, hvordan kan vi<br />
            <span className="text-gradient">hjelpe deg?</span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed animate-text-reveal delay-150 max-w-2xl font-medium">
          Akutt tannpine? Usikker på behandling? Nervøs for tannlegen? Judith Caspersen og hennes erfarne team løser det — på dine premisser, med full trygghet.
        </p>

        {/* CTA buttons - dual action */}
        <div className="flex flex-col sm:flex-row items-start gap-4 animate-text-reveal delay-300">
          <button onClick={onBookClick} className="btn-cta px-10 py-4 text-lg animate-cta-attention">
            Bestill time
          </button>
          <a
            href="tel:22837088"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-200"
          >
            <span className="text-xl">🚨</span>
            <span>Ring akutt: 22 83 70 88</span>
          </a>
        </div>

        {/* Quick benefits */}
        <div className="animate-text-reveal delay-500 mt-10 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span className="font-medium text-foreground/80">50% rabatt nye pasienter</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏱️</span>
            <span className="font-medium text-foreground/80">Same-day akuttimer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧬</span>
            <span className="font-medium text-foreground/80">25+ år erfaring</span>
          </div>
        </div>
      </div>
    </div>

    {/* Stats bar */}
    <div className="absolute bottom-6 left-0 right-0 z-10 px-6 animate-text-reveal delay-600">
      <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4">
        {[
          { num: "25+", label: "Års erfaring" },
          { num: "50%", label: "Første konsultasjon" },
          { num: "Oslo", label: "Sentrum · Klingenberggata" },
        ].map((s) => (
          <div
            key={s.label}
            className="glass-card rounded-2xl px-4 py-4 text-center shimmer-border depth-card"
          >
            <p className="text-2xl font-extrabold text-gradient leading-none mb-1">{s.num}</p>
            <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
