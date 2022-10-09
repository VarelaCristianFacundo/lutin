import React from "react";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import release4 from "../assets/release3.png";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="home">      
      <div className="container card-principal">
        <div className="content col">
          <h1 className="title">Conocé nuestro primer lanzamiento</h1>
          <Link to="/detalle">
            <Button className="btn-verNFT">Ver NFT</Button>
          </Link>
        </div>
        <div className="image-container">
          <div className="image">
            <Carousel>
              <Carousel.Item>
                <img                  
                  height={400}
                  width={"auto"}
                  className="d-block w-100"
                  src={release1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={400}
                  width={"auto"}
                  className="d-block w-100"
                  src={release2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={400}
                  width={"auto"}
                  className="d-block w-100"
                  src={release2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <Link to="/detalle">
            <Button className="btn-verNFT">Ver NFT</Button>
          </Link>
      </div>
    </div>
  );
}
