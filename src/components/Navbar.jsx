import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h3 className="text-xl font-semibold text-gray-800">Electric Billing</h3>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-700  text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-500 transition">Features</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
          </li>
          <li>
            <a href="#footer" className="hover:text-blue-500 transition">Footer</a>
          </li>
        </ul>

        {/* Login Button */}
        <a
          href="#login"
          className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Log In
        </a>

        {/* Mobile Menu Placeholder (if needed in future) */}
      </div>
    </nav>
  );
};

export default Navbar;
