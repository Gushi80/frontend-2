import React, { useState } from "react";
import "../assets/styles/church.css";
import logo from "../assets/img/logo 1.png";
import mama from "../assets/img/mama.jpg";
import search from "../assets/img/./search.png";
import max from "../assets/img/maxresdefault.jpg";
import tafo from "../assets/img/tafos.jpg";
import somafo from "../assets/img/somafo.jpg";
import { Link } from "react-router-dom";

function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(
    localStorage.getItem("CHURCH_WEBSITE_LOGIN_USER_KEY")
  )?.token);

  return (
    <>

      <div className="container">
        <img className="step" src={max} alt="man in white" />
        <h2>ASOMDWEE NTONTOM SOM DIASPORA</h2>
        {isLoggedIn ? (
          <button onClick={() => {localStorage.clear();
            setIsLoggedIn(false)
          }
          }>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>

      <article>
        <div className="common">
          <p>
            In a world troubled by conflicts and divisions, whispers and
            prophecies spoke of a Messanger who would arrive at the end of days,
            uniting the hearts of humanity and ushering in an era of
            unprecedented peace and spiritual enlightenment. Nyame Somafo Yawoh,
            a humble and powerful faith healer, emerged as the embodiment of
            these age-old prophecies. Nyame Somafo Yawoh, a name uttered with
            reverence and honor, is believed to be the descendant of Akan and
            the prophecied Elijah, heralded in the Israelite’s Bible and the
            Quran as the harbinger of the end times and the peacemaker of
            humanity. Followers saw in him the fulfillment of these ancient
            prophecies.
          </p>
          <img className="mama" src={mama} />
        </div>

        <div className="opinion">
          <img src={tafo} id="tafos" />
        </div>
        <div className="middle">
          <h1>
            "THE MISSION IS TO INVITE AND THE
            <br />
            COMMAND IS TO LOVE"
          </h1>
          <img className="praise" src={somafo} />
          <h5>Nyame Somafo Yawoh</h5>
        </div>
      </article>
 
    </>
  );
}

export default Home;
