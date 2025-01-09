import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToRoute from "./Components/ScrollToRoute";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      {" "}
      <Router>
        <ScrollToRoute />
        <div className="h-screen overflow-y-auto scroll-smooth">
          <Hero />
          <Projects />
          <Technologies />
          <About />
          <Contact />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
