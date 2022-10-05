import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Blog() {
  return (
    <>
    <div id="blogs"></div>
    <h2 className="title">Blog</h2>  
    <div className="blog">
      <div className="container">        
        <Link to="/blog1">
          <Card style={{ width: '30rem', background: 'transparent', border: '1px solid #535959', cursor:'pointer'}}>
            <Card.Img variant="top" src={eth1} />
            <Card.Body style={{ padding: '20px' }}>
              <Card.Title className="title">¿Qué son los NFTs?</Card.Title>
              <Card.Subtitle className="title">Lutin Studios - 19 septiembre 2022</Card.Subtitle>
              <Card.Text className="blog">
              Los NFT o Token No Fungible son un tipo de activo digital que puede ser adquirido o traspasado a cambio de criptomonedas...
              </Card.Text>        
            </Card.Body>
          </Card>
        </Link>
        <Link to="/blog2">
          <Card style={{ width: '30rem', background: 'transparent', border: '1px solid #535959', cursor:'pointer'}}>
            <Card.Img variant="top" src={eth2} />
            <Card.Body style={{ padding: '20px' }}>
              <Card.Title className="title">¿Cómo comprar un NFT?</Card.Title>
              <Card.Subtitle className="title">Lutin Studios - 19 septiembre 2022</Card.Subtitle>
              <Card.Text className="blog">
              Si bien adquirir un NFT es tan simple como conseguir criptomonedas, buscar un NFT y comprarlo, en un comienzo puede ser complejo...
              </Card.Text>        
            </Card.Body>
          </Card>                
        </Link>
      </div>
    </div>
    </>
  );
}
