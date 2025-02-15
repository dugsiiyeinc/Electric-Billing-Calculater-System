import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleDrawerBtn = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h3 className="text-xl font-semibold text-gray-800">
          Electric Billing
        </h3>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-600 text-lg font-normal">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-500 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-500 transition">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-blue-500 transition">
              Footer
            </a>
          </li>
        </ul>

        {/* Login Button (Desktop) */}
        <a
          href="#login"
          className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Log In
        </a>

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
              <a
                href="#home"
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="block py-2 hover:text-blue-500 transition"
                onClick={toggleDrawerBtn}
              >
                Footer
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="block bg-blue-500 text-white mx-6 px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                onClick={toggleDrawerBtn}
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
