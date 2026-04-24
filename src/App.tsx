import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreSection from "./components/SobreSection";
import ServicosSection from "./components/ServicosSection";
import GaleriaSection from "./components/GaleriaSection";
import EquipaSection from "./components/EquipaSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <ServicosSection />
        <GaleriaSection />
        <EquipaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
