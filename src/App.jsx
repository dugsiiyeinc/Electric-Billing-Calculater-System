import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./components/About"; 
import BillingCalculater from "./components/BillingCalculater"; 
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import BillingApp from "./components/billing History/BillingApp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/billing-calculater" element={<BillingCalculater />} />
        <Route path="/login" element={<Login />} />
        <Route path="/savedData" element={<BillingApp />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
