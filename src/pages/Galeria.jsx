import React from 'react';
import Gallery from '../components/Gallery';
import NavbarGaleria from '../components/NavbarGaleria';


export default function Galeria() {
  return (
    <div className="app-container">     
      <NavbarGaleria />
      <Gallery />
    </div>
  )
}

