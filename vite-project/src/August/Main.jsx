import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
//import  SignUp from './August/SignUp'
import Login from "./August/Login";
import Header from "./August/Header";
import SignUp from "./August/SignUp";

function Main() {
  return (
    <BrowserRouter>
     <header />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>

      
   
  );
}

export default Main;

