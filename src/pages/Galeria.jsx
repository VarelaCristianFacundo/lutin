import React from 'react';
import BackToHome from '../components/BackToHome';
import Gallery from '../components/Gallery';
import NavbarGaleria from '../components/NavbarGaleria';
import fondo from "../assets/Hero_Section2.png";


export default function Galeria() {
  const sortGallery = true;
  return (
    <div className="app-container">     
      <img className="imgFondo" src={fondo} style={{width:"100%", position:"absolute", top:"0", left:"0"}} alt="" />
      <NavbarGaleria />
      <BackToHome />
      <Gallery sortGallery={sortGallery}/>
    </div>
  )
}

