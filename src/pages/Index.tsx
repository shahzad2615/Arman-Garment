import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { FounderSection } from "@/components/home/FounderSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseSection />
      <ProductCategoriesSection />
      <FounderSection />
      <ClientsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
