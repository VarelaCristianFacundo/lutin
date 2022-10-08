import React from 'react';
import BackToHome from '../components/BackToHome';
import Gallery from '../components/Gallery';
import NavbarGaleria from '../components/NavbarGaleria';


export default function Galeria() {
  const sortGallery = true;
  return (
    <div className="app-container">     
      <NavbarGaleria />
      <BackToHome />
      <Gallery sortGallery={sortGallery}/>
    </div>
  )
}

