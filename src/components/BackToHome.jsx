import React from "react";
import { Link } from "react-router-dom";
import backtohome from "../assets/icons/backtohome.png";

export default function BackToHome() {
  return (
    <div className="linktohome">
      <Link className="backtohome" to="/">
        <span>
          <div className="col-4">
            <img 
                height={17}                
                className="d-block" 
                src={backtohome} 
                alt="back to home" />
          </div>
          <div className="col-2"></div>
          <div className="col-3"> Volver</div>
        </span>
      </Link>
    </div>
  );
}
