import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Idea from "./components/Idea";
import Works from "./components/Works";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExperienceLayer from "./components/ExperienceLayer";
import CustomCursor from "./components/CustomCursor";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MouseSpotlight from "./components/MouseSpotlight";
import "./index.css";

export default function App() {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen overflow-x-hidden bg-[#02040d] pt-28 text-white"
    >
      {/* Cinematic Background */}
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_70%_45%,rgba(47,140,255,.26),transparent_28%),radial-gradient(circle_at_88%_55%,rgba(176,65,255,.22),transparent_28%),radial-gradient(circle_at_15%_35%,rgba(47,140,255,.12),transparent_24%),linear-gradient(180deg,#02040d_0,#050615_100%)]"></div>

      {/* Animated Grid */}
      <div className="animated-grid"></div>

      {/* Glow Lines */}
      <div className="glow-line glow-line-1"></div>
      <div className="glow-line glow-line-2"></div>

      {/* Floating Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      {/* Noise Overlay + Loader + Progress */}
      <ExperienceLayer />

      {/* Custom Cursor */}
      <CustomCursor />
      <MouseSpotlight />

      {/* Main Layout */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Idea />
        <Works />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}