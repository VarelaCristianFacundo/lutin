import React, { useState } from "react";
import logo from "../assets/logo.png";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import polygon from "../assets/polygon.png";
import solana from "../assets/solana.png";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Button, Form, InputGroup } from "react-bootstrap";
import { TWITTER_URL, DISCORD_URL, INSTAGRAM_URL } from "../const"
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
  const socialLink = [{url: TWITTER_URL, icon: <BsTwitter/>}, {url: DISCORD_URL, icon: <FaDiscord/>}, {url: INSTAGRAM_URL, icon: <BsInstagram/>}];
  const [newsletter, setNewsletter] = useState({
    email: "",
  });

  const { email } = newsletter;

  const handleChange = (e) => {
    setNewsletter({ ...newsletter, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/lutinstudios/google_sheets/VQkyWeTwDtbplcMF?tabId=newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [email, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setNewsletter({ ...newsletter, email: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <footer>
      <hr className="container" />
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <h1>Suscribite a nuestro newsletter.</h1>
          <p style={{ color: "#262628" }}>
            Suscríbete y recibe notificaciones de nuevos lanzamientos y otras
            noticias de NFT directo en tu e-mail.
          </p>          
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
            <Form.Group controlId="form.Name" className="formContent">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Escribe tu e-mail"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              </Form.Group>
              <div className="btn-center">
                <button className="btn-suscribe">Suscríbite</button>
              </div>
            </InputGroup>
          </Form>
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
                    <li key={index}><a className="redesSociales" href={link.url}>{link.icon}</a></li>
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
        <span>&copy; Copyright 2022 NFT</span>
        <span>Launching August 2022</span>
      </div>
    </footer>
  );
}
