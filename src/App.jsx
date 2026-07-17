import { useThemeEffect } from "./hooks/useThemeEffect";
import { useReveal } from "./hooks/useReveal";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FigmaShowcase from "./components/FigmaShowcase";
import Certifications from "./components/Certifications";

export default function App() {
  useThemeEffect();
  useReveal();

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <FigmaShowcase />
      <Certifications />
      <Contact />
    </div>
  );
}