import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const B = () => {
  const navigete = useNavigate();
  const [data, setdata] =useState([])
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Link to="">home pge</Link>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default B;
