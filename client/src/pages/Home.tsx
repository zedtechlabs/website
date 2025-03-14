import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
