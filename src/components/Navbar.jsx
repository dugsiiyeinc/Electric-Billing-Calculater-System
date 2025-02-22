import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import {  NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || null;
    const navigate = useNavigate();
  const toggleDrawerBtn = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleClick = () =>{
    if(onlineUser){
      localStorage.removeItem("onlineUser");
      navigate("/login");
    
    }

    navigate("/login");
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md" id="home">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-semibold text-gray-800">
          Electric Billing
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-600 text-lg font-normal cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({isActive}) => isActive ? "text-indigo-500 font-semibold transition" : "hover:text-indigo-500 transition"}
              >
          
              Home
            </NavLink>
          </li>
        
          <li>
            <NavLink
              to="/billingCalculator"

              className={({isActive}) => isActive ? "text-indigo-500 font-semibold transition" : "hover:text-indigo-500 transition"}
            >
              Exchange
            </NavLink>
          </li>
          {
            onlineUser && ( <li>
            <NavLink
              to="/savedData"
              className={({isActive}) => isActive ? "text-indigo-500 font-semibold transition" : "hover:text-indigo-500 transition"}
              >
              Saved data
            </NavLink>
          </li>) 
          }
         
          <li>
            <NavLink
              to="/about"
              className={({isActive}) => isActive ? "text-indigo-500 font-semibold transition" : "hover:text-indigo-500 transition"}
              >
              About
            </NavLink>
          </li>
         
        </ul>

        {/* Login Button (Desktop) */}
        <button
         
          onClick={handleClick}
          className={`hidden lg:block ${onlineUser ? "bg-rose-600 hover:bg-rose-700" : "bg-indigo-600 hover:bg-indigo-700"}  text-white px-4 py-2 rounded-lg shadow cursor-pointer   transition-colors duration-200`}
        >
         {onlineUser ? "Log out" : "Log In"} 
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none"
          onClick={toggleDrawerBtn}
        >
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileDrawerOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 absolute w-full left-0 top-full">
          <ul className="flex flex-col space-y-4 text-center text-gray-600 text-lg">
          <li>
            <NavLink
              to="/"
              className="hover:text-indigo-500 transition"
            >
              Home
            </NavLink>
          </li>
        
          <li>
            <NavLink
              to="/billingCalculator"

              className="hover:text-indigo-500 transition"
            >
              Exchange
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/savedData"
              className="hover:text-indigo-500 transition"
            >
              Saved data
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-indigo-500 transition"
            >
              About
            </NavLink>
          </li>
            <li>
            <button
         
         onClick={handleClick}
         className={`blog lg:hidden ${onlineUser ? "bg-rose-600 hover:bg-rose-700" : "bg-indigo-600 hover:bg-indigo-700"}  text-white px-4 py-2 rounded-lg shadow cursor-pointer   transition-colors duration-200`}
       >
        {onlineUser ? "Log out" : "Log In"} 
       </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
