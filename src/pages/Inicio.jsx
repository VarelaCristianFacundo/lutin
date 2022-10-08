import React from 'react';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import ScrollToTop from '../components/ScrollToTop';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


export default function Inicio() {
  const sortGallery = false;
  return (    
    <div className="app-container">
          <Navbar />
          <ScrollToTop />
          <Home />
          <Gallery sortGallery={sortGallery}/>
          <div className="btn-center">      
            <Link to="/galeria">
              <button className="btn-vermas">Ver Más</button>
            </Link>
          </div>
          <Blog />
          <AboutUs />
          <ContactForm />
    </div>
  )
}





