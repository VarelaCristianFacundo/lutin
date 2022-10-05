import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detalle from "./pages/Detalle";
import Galeria from "./pages/Galeria";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import scrollreveal from "scrollreveal";
import fondo from "./assets/Hero_Section.png";
import "./sass/index.scss";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .super-rare,
        .releases,
        .blog,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <>    
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <img src={fondo} style={{width:"100%", position:"absolute"}} alt="" />
        <div data-theme={theme} className="app-container">
          <Routes>
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/blog1' element={<Blog1 />} />
            <Route path='/blog2' element={<Blog2 />} />            
            <Route path='/detalle' element={<Detalle />} />
            <Route path='/*' element={<Inicio />} />
          </Routes>
          {/* <ScrollToTop />
          <Home />
          <Gallery />
          <Blog />
          <AboutUs />
          <ContactForm /> */}
        </div>
        <Footer />
    </>
  );
}

export default App;
