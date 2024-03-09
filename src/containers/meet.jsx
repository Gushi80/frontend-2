import React from "react";
import "../assets/styles/meet.css";
import logo from "../assets/img/logo 1.png";
import search from "../assets/img/./search.png"
import step from "../assets/img/fillers.jpg";
import fill from "../assets/img/getto.jpg"
import open from "../assets/img/get.jpg"
import praise from "../assets/img/somafo.jpg"
import Header from "../components/common/Header";

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
            Address : 3090 Pine Valley Rd, Columbus OHIO, 43219
          </p>
          <img className="mama" src={fill} />
        </div>

        <div className="opinion">
          <img src={open} id="tafos" />
        </div>
        <div className="middle">
          <h1>
            "THE MISSION IS TO BRING HEALING AND SALVATION <br />
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
