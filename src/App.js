import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";
import scrollreveal from "scrollreveal";
import ContactForm from "./components/ContactForm";
import "./sass/index.scss";
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
        <div data-theme={theme} className="app-container">
          <ScrollToTop />
          <Home />
          <Gallery />
          <Blog />
          <AboutUs />
          <ContactForm />
        </div>
        <Footer />
    </>
  );
}

export default App;
