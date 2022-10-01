import React from "react";
import { useState } from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import release1 from "../assets/release1.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import super5 from "../assets/super5.png";
import super6 from "../assets/super6.png";

// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

export default function SuperRare() {
  const [category, setCategory] = useState("");
  const data = [
    {
      image: super1,
      category: "collection",
    },
    {
      image: release1,
      category: "unique",
    },
    {
      image: super3,
      category: "collection",
    },
    {
      image: super4,
      category: "collection",
    },
    {
      image: super5,
      category: "collection",
    },
    {
      image: super6,
      category: "collection",
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Galería</h2>
        <ul className="filterCategory">
          <li className={category==="" ? "active" : ""} onClick={() => setCategory("")}>Todos</li>
          <li className={category==="collection" ? "active" : ""} onClick={() => setCategory("collection")}>Colecciones</li>
          <li className={category==="unique" ? "active" : ""} onClick={() => setCategory("unique")}>Piezas Únicas</li>
        </ul>
        <div className="alignGallery">
          {data
            .filter((el) => category === "" || el.category === category)
            .map(({image}) => (
              <Card image={image} />
            ))}
        </div>
      </div>

      <div className="btn-center">
        <button className="btn-vermas">Ver Más</button>
      </div>
    </div>
  );
}
