import React from "react";
import "../assets/styles/meet.css";
import logo from "../assets/img/logo 1.png";
import search from "../assets/img/./search.png"
import step from "../assets/img/fillers.jpg";
import fill from "../assets/img/getto.jpg"
import open from "../assets/img/get.jpg"
import praise from "../assets/img/somafo.jpg"

function Meet() {
  return (
    <>
      

      <div className="container">
        <div className="gradient"></div>
        <img className="step" src={step} alt="man in white" />
      </div>

      <article>
        <div className="common">
          <p>
            Gatherings 🙌.
            <br />
            When : 11am every Sunday
            <br />
            Address : Ekumfi Otuam - Central Region
          </p>
          <img className="mama" src={fill} />
        </div>

        <div className="opinion">
          <img src={open} id="tafos" />
        </div>
        <div className="middle">
          <h1>
            "THE MISSION IS TO BRING HEALING <br />
            TO THE WORLD"
          </h1>
          <img className="praise" src={praise} />
          <h5>Nyame Somafo Yawoh</h5>
         
        </div>
      </article>
      
    </>
  );
}

export default Meet;
