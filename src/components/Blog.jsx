import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Blog() {
  return (
    <>
      <h2 className="title">Blog</h2>
    <div className="blog">
      <div className="content">
      </div>
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">¿Qué son los NFTs?</h2>
          <h2 className="title">Lutin Studios - 19 septiembre 2022</h2>
          <p className="description">          
          Los NFT o Token No Fungible son un tipo de activo digital que puede ser adquirido o traspasado a cambio de criptomonedas...
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">¿Cómo comprar un NFT?</h2>
          <h2 className="title">Lutin Studios - 19 septiembre 2022</h2>
          <p className="description">
          Si bien adquirir un NFT es tan simple como conseguir criptomonedas, buscar un NFT y comprarlo, en un comienzo puede ser complejo...
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
