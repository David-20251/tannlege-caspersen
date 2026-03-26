import { useRef } from "react";
import StickyHeader from "@/components/StickyHeader";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroSection from "@/components/HeroSection";
import OfferBotWidget from "@/components/OfferBotWidget";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import MeetOptician from "@/components/MeetOptician";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <StickyHeader onBookClick={scrollToForm} />
      <StickyMobileCTA onBookClick={scrollToForm} />

      <HeroSection onBookClick={scrollToForm} />
      <OfferBotWidget onBookClick={scrollToForm} />
      <TrustBar />
      <ServicesSection />
      <MeetOptician />
      <BenefitsSection onBookClick={scrollToForm} />
      <HowItWorks />
      <VideoSection />
      <Reviews />
      <CTASection ref={formRef} />
      <Footer />
    </main>
  );
};

export default Index;
