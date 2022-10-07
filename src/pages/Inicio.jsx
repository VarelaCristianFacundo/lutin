import React from 'react';
import Blog from '../components/Blog';
import Home from '../components/Home';
import Gallery from '../components/Gallery';
import ScrollToTop from '../components/ScrollToTop';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';


export default function Inicio() {
  return (
    <div className="app-container">
          <Navbar />
          <ScrollToTop />
          <Home />
          <Gallery />
          <Blog />
          <AboutUs />
          <ContactForm />
    </div>
  )
}





