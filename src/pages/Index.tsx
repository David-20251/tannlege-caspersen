import { useRef } from "react";
import StickyHeader from "@/components/StickyHeader";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroSection from "@/components/HeroSection";
import CampaignBanner from "@/components/CampaignBanner";
import TrustBar from "@/components/TrustBar";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import MeetOptician from "@/components/MeetOptician";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import MapSection from "@/components/MapSection";
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
      <CampaignBanner />
      <TrustBar />
      <FeaturesSection />
      <ServicesSection />
      <MeetOptician />
      <BenefitsSection onBookClick={scrollToForm} />
      <HowItWorks />
      <Reviews />
      <MapSection />
      <CTASection ref={formRef} />
      <Footer />
    </main>
  );
};

export default Index;
