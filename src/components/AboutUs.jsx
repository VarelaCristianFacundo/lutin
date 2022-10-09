import React from "react";
import lupinstudios from "../assets/lupinstudios.png";

export default function Release() {
  return (
    <>
      <div id="aboutus"></div>
      <div className="releases">
        <div className="release orange">
          <div className="content">
            <h3 className="title">Sobre nosotros</h3>
            <p className="description">
              Lutin Studios (LS) surge de la motivación por crear y coleccionar
              piezas de arte únicas, propias de la nueva era digital. Nos
              enfocamos exclusivamente en el mundo de la blockchain para
              construir una criptocultura cada vez más emocionante. En 100 años
              más queremos que la cultura de nuestros tiempos sea estudiada por
              las obras digitales creadas por Lutin Studios.
            </p>
            <p className="description">
              Somos un emprendimiento de arte digital. Nos dedicamos a
              publicitar y vender piezas artistíscas coleccionables, así como
              difundir proyectos innovadores de artistas alrededor del mundo.
              Las piezas se comercian en formato NFT (Not Fungible Token),
              unidades únicas de criptomonedas que no se pueden replicar.
            </p>
          </div>
            <img src={lupinstudios} alt="release" />
            {/* <div className="ellipse pink"></div> */}
        </div>
      </div>
    </>
  );
}

