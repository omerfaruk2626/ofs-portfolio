import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-slate-500 h-screen overflow-y-scroll">
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Contact />
    </div>
  );
}

export default App;
