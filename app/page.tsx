import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Fleet from "../src/components/Fleet";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import WhatsAppButton from "../src/components/WhatsAppButton";
import RealEstateSection from "../src/components/RealEstateSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <RealEstateSection />
      <Fleet />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}