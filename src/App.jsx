// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNavbar from "./Components/Navbar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Technologies from "./Pages/Technologies/Technologies";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
