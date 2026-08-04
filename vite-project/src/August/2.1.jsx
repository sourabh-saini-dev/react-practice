import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import UserDetails from "./UserDetails"
import Nav from "./Nav"


import { useState } from "react";

const B = () => {
    


  return (
    <>
      <BrowserRouter>
       <Nav />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
             <Route path="/user/:id" element={<UserDetails />} />

         
        
        </Routes>
   
      </BrowserRouter>
    </>
  );
};

export default B;
