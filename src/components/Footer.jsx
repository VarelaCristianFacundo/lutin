import React, { useState } from "react";
import logo from "../assets/logo.png";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import polygon from "../assets/polygon.png";
import solana from "../assets/solana.png";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Alert, Form, InputGroup } from "react-bootstrap";
import { TWITTER_URL, DISCORD_URL, INSTAGRAM_URL, LUTINSTUDIOSOPENSEA_URL, BITCOIN_URL, ETHEREUM_URL, SOLANA_URL, POLYGON_URL } from "../const"
export default function Footer() {
  const links = [
    {
      title: "Lutin Studios",
      data: [{name: "Home",link: "#"},{ name: "Blog", link:"#blog"}, {name:"Galería", link:"#galeria"}, {name:"Contacto", link:"#contact"}, {name:"Lutin Studios en OpenSea", link:LUTINSTUDIOSOPENSEA_URL}],
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
      data: [{name: bitcoin,link: BITCOIN_URL},{name: ethereum,link: ETHEREUM_URL},{name: polygon,link: POLYGON_URL},{name: solana,link: SOLANA_URL}],
    },
  ];
  const socialLink = [{url: TWITTER_URL, icon: <BsTwitter/>}, {url: DISCORD_URL, icon: <FaDiscord/>}, {url: INSTAGRAM_URL, icon: <BsInstagram/>}];
  const [newsletter, setNewsletter] = useState({
    email: "",
  });

  const { email } = newsletter;
  const [success, setSuccess] = useState();
  const [danger, setDanger] = useState();

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
      setSuccess(true)
    } catch (err) {
      console.log(err);
      setDanger(true)
    }
  };
  return (
    <footer>
      <hr className="container" />
      <div className="upper">
        <div className="brand-container col-xl-6">
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
          {success ? (
            <Alert key="success" variant="success">
              El mensaje ha sido enviado
            </Alert>
          ) : 
          (
            <></>
          )}
          {danger ? (
            <Alert key="danger" variant="danger">
              El mensaje no pudo enviarse, inténtalo nuevamente
            </Alert>
          ) : 
          (
            <></>
          )}
        </div>
        <div className="links col-xl-2">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (                    
                      <li key={index2}><a href={link.link}>{link.name}</a></li>                    
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="links col-xl-1">
          {redesSociales.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul className="redes">
                  {socialLink.map((link, index) => (
                    <li key={index}><a target="blank" className="redesSociales" href={link.url}>{link.icon}</a></li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="links col-xl-2">
          {imgCoins.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul className="coinMarket">
                  {data.map((img, index2) => (
                    <li key={index2}>
                      <a href={img.link}><img src={img.name} alt={img.name} /></a>                      
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
