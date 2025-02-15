import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Testomonial from "./components/Testomonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature />
      <Testomonial />
      <Footer/>
    </div>
  );
};

export default App;
