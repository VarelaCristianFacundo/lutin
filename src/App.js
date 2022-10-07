import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detalle from "./pages/Detalle";
import Galeria from "./pages/Galeria";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import fondo from "./assets/Hero_Section.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/index.scss";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ScrollUp from "./components/ScrollUp";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  
  return (
    <>    
        {/* <Navbar changeTheme={changeTheme} currentTheme={theme} /> */}
        <img src={fondo} style={{width:"100%", position:"absolute"}} alt="" />
        <div data-theme={theme} className="app-container">
            <ScrollUp>
              <Routes>
                  <Route path='/galeria' element={<Galeria />} />
                  <Route path='/blog1' element={<Blog1 />} />
                  <Route path='/blog2' element={<Blog2 />} />            
                  <Route path='/detalle' element={<Detalle />} />
                  <Route path='/*' element={<Inicio />} />
              </Routes>
            </ScrollUp>
        </div>
        <Footer />
    </>
  );
}

export default App;
