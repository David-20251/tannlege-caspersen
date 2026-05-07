import { useRef } from "react";
import StickyHeader from "@/components/StickyHeader";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroV2 from "@/components/HeroV2";
import ServicesV2 from "@/components/ServicesV2";
import ReviewsV2 from "@/components/ReviewsV2";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const IndexV2 = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StickyHeader onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      {/* Lean, conversion-focused structure */}
      <HeroV2 onBookClick={scrollToForm} />
      <ServicesV2 />
      <ReviewsV2 />
      <MapSection />
      <CTASection ref={formRef} />
      <Footer />
    </main>
  );
};

export default IndexV2;
