import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
//import { useEffect, useState } from "react";
import React from 'react'



function App() {
  // const [jokes,setJokes] = useState([]);

  // useEffect(()=>{
  //   axios.get('http://127.0.0.1:8000/')
  //   .then((response)=>{
  //     setJokes(response.data)
      
  //   },[])

  //   .catch((error)=>{
  //     console.log(error)

  //   })

  //   })
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
