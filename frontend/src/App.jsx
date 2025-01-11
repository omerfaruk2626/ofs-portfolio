import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToRoute from "./Components/ScrollToRoute";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToRoute />
        <div className="h-screen overflow-y-auto scroll-smooth">
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
      </Router>
    </HelmetProvider>
  );
}

export default App;
