import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import { scrollToSection } from "./utils/scrollToSection";

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const sectionId = window.location.hash.slice(1);
    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + window.location.search,
    );
    requestAnimationFrame(() => scrollToSection(sectionId));
  }, []);

  return (
    <>
      <ScrollButton className="skip-link" targetId="main" focusTarget>
        Skip to content
      </ScrollButton>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
