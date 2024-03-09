import "./App.css";
import Router from "./Router";
import Footer from "./components/common/Footer";
//import { useEffect, useState } from "react";
import React from "react";
import Header from "./components/common/Header";


function App() {
  // const [jokes,setJokes] = useState([]);

  

  return (
    <>
    <Header />
    <Router/>
    <Footer />
      
    </>
  );
}

export default App;
