import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleDrawerBtn = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md" id="home">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <RouterLink to="/" className="text-xl font-semibold text-gray-800">
          Electric Billing
        </RouterLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-600 text-lg font-normal cursor-pointer">
          <li>
            <RouterLink
              to="/"
              className="hover:text-blue-500 transition"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-blue-500 transition"
            >
              About
            </NavLink>
          </li>
          <li>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="footer"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 transition"
            >
              Footer
            </ScrollLink>
          </li>
        </ul>

        {/* Login Button (Desktop) */}
        <RouterLink
          to="/login"
          className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Log In
        </RouterLink>

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
              <RouterLink
                to="/"
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Home
              </RouterLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                About
              </NavLink>
            </li>
            <li>
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={500}
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={500}
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Footer
              </ScrollLink>
            </li>
            <li>
              <RouterLink
                to="/login"
                className="block bg-blue-500 text-white mx-6 px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                onClick={toggleDrawerBtn}
              >
                Log In
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
