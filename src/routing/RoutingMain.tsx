import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import HomePage from "../pages/Homepage";
import Footer from "../components/shared/Footer";
import React from "react";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/Kontakt" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default RoutingMain;
