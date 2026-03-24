import { useEffect, useState } from "react";

interface StickyMobileCTAProps {
  onBookClick: () => void;
}

const StickyMobileCTA = ({ onBookClick }: StickyMobileCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/95 backdrop-blur-lg border-t border-border/50 transition-all duration-200">
      <button
        onClick={onBookClick}
        className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-base active:scale-[0.97] transition-transform duration-150 shadow-lg shadow-primary/25"
      >
        Bestill synsprøve nå
      </button>
    </div>
  );
};

export default StickyMobileCTA;
