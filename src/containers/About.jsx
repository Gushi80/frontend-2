
import React from 'react'

import logo from '../assets/img/logo 1.png'
import '../assets/styles/About.css'
import temple from '../assets/img/temple.jpg'
import team from '../assets/img/team.jpeg'
import mixed from '../assets/img/mixed.jpg'
import praise from '../assets/img/somafo.jpg'

function About() {
  return (
    <>
    
    <div className="container">
      
      <img className="step" src={temple} alt="man in white" />
      
      
    </div>

    

      <div className="common">
        
        <p>
       
          The world is full of various religions and beliefs, each with its own set of principles and teachings. Religion has been an integral part of human civilization for thousands of years, providing people with guidance and direction in their lives.<br/>
          It is not surprising of the release of a new religious text, “The Book of Power”, written by Nyame Somafo Yawoh, the founder of Asomdwee Ntonton Som, the third Religion of God.

          “The Book of Power” is said to be the mother of all religious books, surpassing even the Bible of Israel and the Quran of Islam. According to Yawoh, the Bible of Israel and the Quran were made from 7% and 5% of the mother book, respectively. Therefore, it is believed that “The Book of Power”  provides greater understanding and clarification of what the Israelites and Arabians do not fully comprehend in their respective holy texts.<br/>

          Yawoh’s teachings revolve around the concept of God as the ultimate power, and he believes that “The Book of Power”  provides a deeper understanding of this supreme being. The book discuss many of the mysteries of the world that humans see but do not fully understand. For example, it  clarifies how the sea came into existence,<br/> explain how rain occurs, and describe how the sun rises from the East and sets in the West.<br/>

          One of the most significant topics that “The Book of Power”  covers is the Highest God, Rabbi. Yawoh’s followers believe that Rabbi is the supreme being who created the universe and everything in it. They also believe that Rabbi is a merciful and loving God who cares for all of his creation, regardless of their race or religion.<br/>

          “The Book of Power” is a significant religious text, providing answers to some of the most significant questions about life, death, and the universe.

        </p>

        <img className="mama" src={team} />
      </div>

      <div className="opinion">
        <img src={mixed} id="tafos" />
      </div>
      <div className="middle">
        <h1>
          "THE MISSION IS TO INVITE AND THE<br />
          COMMAND IS TO LOVE"
        </h1>
        <img className="praise" src={praise} />
        <h5>Nyame Somafo Yawoh</h5>
       
      </div>
   



    </>
    
  )
}

export default About