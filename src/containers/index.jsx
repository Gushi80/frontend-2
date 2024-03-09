import React from "react";
import "../assets/styles/style.css";
import logo from "../assets/img/logo 1.png"
import contact from "../assets/img/contact.webp"
import subject from "../assets/img/Subject.png"
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      
      <section>
      <div className="contact">
        <h2>THIRD TEMPLE BUILDERS ALLIANCE</h2>
        <h3>CONTACT US</h3>
        <img className="Subject" src={subject} />
      </div>
      
    </section>
    <div>
      <img  className="tafos" src={contact} alt="ask" />
    </div>
    <div className="book">
      <div className="social">
        <Link to=""><i className="fa-solid fa-location-dot"></i></Link>
        <h4>ADDRESS</h4>
        <p>3090 Pine Valley Rd, Columbus OHIO, 43219</p>


    </div>

    <div>
      <Link to=""><i className="fa-solid fa-phone"></i></Link>
      <h4>PHONE</h4>
      <p>+1906506291 OR +15185026174</p>
    </div>
    <div>
      <Link to=""><i className="fa-regular fa-envelope"></i></Link>
      <h4>EMAIL ADDRESS</h4>
      <p>asomdweentontonsomdiaspora@gmail.com</p>
    </div>
    </div>

   </>
  );
}

export default Index;
