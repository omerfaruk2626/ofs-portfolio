import { HashRouter as Router } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useEffect } from "react";
import ScrollToRoute from "./Components/ScrollToRoute";
import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { LanguageProvider } from "./context/LanguageProvider";
import { initGTM } from "./utils/gtm";
import "./i18n";
import "./App.css";

function App() {
  useEffect(() => {
    initGTM();

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZHNXSM9"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertAdjacentElement("afterbegin", noscript);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZHNXSM9');
          `}
        </script>
      </Helmet>

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
