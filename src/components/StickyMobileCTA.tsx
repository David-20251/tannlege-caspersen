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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/95 backdrop-blur-lg border-t border-border/50">
      <button onClick={onBookClick} className="w-full btn-cta py-3.5 text-base animate-cta-attention">
        Bestill time nå — 50% rabatt
      </button>
    </div>
  );
};

export default StickyMobileCTA;
