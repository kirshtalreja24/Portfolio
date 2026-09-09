import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroCharacter from "@/components/HeroCharacter";
import { TRACK_ID } from "@/lib/gsap";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />

      <div id={TRACK_ID} className="relative">
        <HeroCharacter />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
