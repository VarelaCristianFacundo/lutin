import React from "react";
import logo from "../assets/logo.png";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import polygon from "../assets/polygon.png";
import solana from "../assets/solana.png";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "Lutin Studios",
      data: ["Home", "Blog", "Galería", "Contacto", "Lutin Studios en OpenSea"],
    },
  ];

  const redesSociales = [
    {
      title: "Búscanos en:",
      data: ["Press", "Support"],
    },
  ];
  const imgCoins = [
    {
      title: "Compatible con:",
      data: [bitcoin, ethereum, polygon, solana],
    },
  ];
  const socialLink = [
    <BsTwitter />,
    <FaDiscord />,
    <BsInstagram />,    
  ];
  return (
    <footer>        
      <hr className="container" />
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <h1>Suscribite a nuestro newsletter.</h1>
          <p>
            Suscríbete y recibe notificaciones de nuevos lanzamientos y otras
            noticias de NFT directo en tu e-mail.
          </p>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="links">
          {redesSociales.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul className="redes">
                  {socialLink.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="links">
          {imgCoins.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul className="coinMarket">
                  {data.map((img, index2) => (
                    <li key={index2}>
                      <img src={img} alt={img} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span><input type="email" name="" id="" />Suscribite</span>
        <span>&copy; Copyright 2022 NFT</span>
        <span>Launching August 2022</span>
      </div>
    </footer>
  );
}
