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

export default function SuperRare({sortGallery}) {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const data = [
    {
      image: super1,
      category: "collection", 
      date: new Date("10/04/2022"),
      popularity: 1,
    },
    {
      image: release1,
      category: "unique",
      date: new Date("10/01/2022"),
      popularity: 2,
    },
    {
      image: super3,
      category: "collection",
      date: new Date("07/10/2022"),
      popularity: 10,  
    },
    {
      image: super4,
      category: "collection",
      date: new Date("03/10/2022"),
      popularity: 11,
    },
    {
      image: super5,
      category: "collection",
      date:new Date("01/10/2022"),
      popularity: 20,
    },
    {
      image: super6,
      category: "collection",
      date: new Date("02/10/2022"),
      popularity: 5,
    },
  ];
  return (
    <div className="super-rare" id="galeria">      
      <div className="title-container">     
        <span className="spanGallery">
        <h2 className="title">Galería</h2>
        <div className="divSepare" style={{padding:"5rem"}}></div>
        {sortGallery === true ? (
              <ul className="filterDate">
              <li>Ordenar por:</li>
              <li className={date==="" ? "active btn-filterDate" : "btn-filterDate"} onClick={() => setDate("")}>Recientes</li>
              <li className={date==="antiguo" ? "active btn-filterDate" : "btn-filterDate"} onClick={() => setDate("antiguo")}>Antiguos</li>
              <li className={date==="popular" ? "active btn-filterDate" : "btn-filterDate"} onClick={() => setDate("popular")}>Populares</li>
            </ul>
            ):(<></>)}             
        </span>   
        <ul className="filterCategory">
          <li className={category==="" ? "active" : ""} onClick={() => setCategory("")}>Todos</li>
          <li className={category==="collection" ? "active" : ""} onClick={() => setCategory("collection")}>Colecciones</li>
          <li className={category==="unique" ? "active" : ""} onClick={() => setCategory("unique")}>Piezas Únicas</li>
        </ul>
        <div className="alignGallery">
          {data
            .filter((el) => category === "" || el.category === category)
            .sort((a,b) => {
              if(date === "antiguo")
                return a.date - b.date;              
              if (date === "popular")
                return a.popularity - b.popularity;              
              return b.date - a.date;              
            })
            .map(({image}) => (
              <Card image={image} />
            ))
            }
        </div>
      </div>
    </div>
  );
}
