import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Testomonial from "./components/Testomonial";



const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature/>
      <Testomonial/>
    </div>
  );
};

export default App;
