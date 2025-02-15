import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to helping you manage your electricity usage
              efficiently and sustainably. Our tools make it easy to track,
              calculate, and optimize your energy consumption.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a
                  href="#home"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#features"
                  className="hover:text-blue-500 transition-colors"
                >
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#pricing"
                  className="hover:text-blue-500 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: support@electricitymanager.com</li>
              <li className="mb-2">Phone: +1 (123) 456-7890</li>
              <li className="mb-2">
                Address: 123 Energy St, Green City, Earth
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaFacebook className="size-6" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaTwitter className="size-6" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaInstagram className="size-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin className="size-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Electricity Manager. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
