import React from 'react';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import ScrollToTop from '../components/ScrollToTop';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';


export default function Inicio() {
  return (
    <div className="app-container">
          <ScrollToTop />
          <Home />
          <Gallery />
          <Blog />
          <AboutUs />
          <ContactForm />
    </div>
  )
}





