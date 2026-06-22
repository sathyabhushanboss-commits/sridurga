import Navbar from "../src/components/Navbar";

import TravelHero from "../src/components/TravelHero";
import Services from "../src/components/Services";
import RealEstateHero from "../src/components/RealEstateHero";
import RealEstateSection from "../src/components/RealEstateSection";
import Fleet from "../src/components/Fleet";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import WhatsAppButton from "../src/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Company Hero */}
      

      {/* Travel Section */}
      <TravelHero />

      {/* Travel Services */}
      <Services />

      {/* Real Estate Hero */}
      <RealEstateHero />

      {/* Real Estate Services */}
      <RealEstateSection />

      {/* Vehicle Fleet */}
      <Fleet />

      {/* Company Info */}
      <About />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />
    </>
  );
}