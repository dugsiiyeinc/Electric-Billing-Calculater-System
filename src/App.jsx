import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./components/About"; 
import BillingCalculater from "./components/BillingCalculater"; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/billing-calculater" element={<BillingCalculater />} />
      </Routes>
    </div>
  );
};

export default App;
