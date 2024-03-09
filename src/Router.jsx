import { BrowserRouter ,Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./containers/Home";
import Meet from "./containers/meet";
import Index from "./containers/index";
import Event from "./containers/event";
import Join from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import About from "./containers/About";
import Donate from "./containers/Donate";

function Router() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meet" element={<Meet />} />
      <Route path="/index" element={<Index />} />
      <Route path="/event" element={<Event />} />
      <Route path="/login" element={<Join />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/About" element={<About />} />
      <Route path ="/Donate" element={<Donate />} />
    </Routes>
 
  );
}

export default Router;
