import { HashRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToRoute from "./Components/ScrollToRoute";
import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { LanguageProvider } from "./context/LanguageProvider";
import "./i18n";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <Navbar />
          <ScrollToRoute />
          <div className="h-screen scroll-smooth">
            <section id="hero">
              <Hero />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="technologies">
              <Technologies />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
