import HeroSection from "@/hero-section/HeroSection";
import Navbar from "@/navbar/Navbar";
import Footer from "layout/footer/Footer";

export default function Home() {
  return (
    <>
      <main className="transition-all duration-300">
        <HeroSection />
        <Navbar />
      </main>
      <Footer />
    </>
  );
}
