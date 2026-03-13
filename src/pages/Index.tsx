import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShortcutCards from "@/components/ShortcutCards";
import ServicesSection from "@/components/ServicesSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import GraphicsSection from "@/components/GraphicsSection";
import LocationSection from "@/components/LocationSection";
import SocialSection from "@/components/SocialSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ShortcutCards />
      <ServicesSection />
      <AccessoriesSection />
      <GraphicsSection />
      <LocationSection />
      <SocialSection />
      <FAQSection />
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
