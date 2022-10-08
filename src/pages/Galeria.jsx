import React from 'react';
import Gallery from '../components/Gallery';
import NavbarGaleria from '../components/NavbarGaleria';


export default function Galeria() {
  const sortGallery = true;
  return (
    <div className="app-container">     
      <NavbarGaleria />
      <Gallery sortGallery={sortGallery}/>
    </div>
  )
}

