import React from "react";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import release3 from "../assets/release3.png";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return (
    <div className="home">
      <div className="container card-principal">
        <div className="content col">
          <h1 className="title">Conocé nuestro primer lanzamiento</h1>
          <button>Ver NFT</button>
        </div>
        <div className="image-container">
          <div className="image">
            {/* <img src={home} alt="home image" /> */}
            <Carousel>
              <Carousel.Item>
                <img                  
                  height={500}
                  className="d-block w-100"
                  src={release1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={500}
                  className="d-block w-100"
                  src={release2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  height={500}
                  className="d-block w-100"
                  src={release3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
