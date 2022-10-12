import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/Union.png";
import { Link } from "react-router-dom";
export default function NavbarDetalle({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <Link to="/">Galeria</Link>            
          </li>
          <li>
            <Link to="/">Blogs</Link>            
          </li>
          <li>
            <Link to="/">Sobre Nosotros</Link>            
          </li>
          <li>
            <Link to="/">Contacto</Link>            
          </li>          
        </ul>
      </div>
    </nav>
  );
}
