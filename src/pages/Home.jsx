import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import Testomonial from "../components/Testomonial";
import Footer from "../components/Footer";
// import About from "../components/About";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <About/> */}
      <HeroSection />
      <Feature />
      <Testomonial />
      <Footer />
    
    </div>
  );
};

export default HomePage;
