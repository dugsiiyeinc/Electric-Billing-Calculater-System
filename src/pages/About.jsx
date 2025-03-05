import React from "react";
import Navbar from "../components/Navbar";
import { RiLightbulbFlashLine } from "react-icons/ri";
import KeyFeatures from "../components/KeyFeatures";
import Benefits from "../components/Benefits";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-indigo-50 to-green-50"
      id="about"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <RiLightbulbFlashLine className="mx-auto h-20 w-20 text-indigo-700" />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Electric Billing
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            A smart and efficient solution designed to help users calculate and
            track their monthly electricity costs.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to empower individuals and businesses with accurate
              and transparent electricity cost tracking. By providing a
              user-friendly platform for monitoring energy consumption, we aim
              to promote smarter energy usage, reduce unnecessary expenses, and
              contribute to a more energy-efficient future.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to become a leading digital solution for electricity
              billing and energy management, making it easier for users to
              understand their consumption patterns. We aspire to create a world
              where technology helps people make informed decisions about energy
              usage, leading to cost savings and a more sustainable environment.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <KeyFeatures />

        {/* Benefits */}
        <Benefits />

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Start Saving Today
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who are already benefiting from our Electric
            Billing system. Take the first step toward smarter energy use and
            lower costs.
          </p>
          <NavLink
            to="/register"
            className="mt-8 inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-300"
          >
            Get Started
          </NavLink>
        </div>

        {/* Team Members Section */}
        <TeamMembers />
      </div>
      <Footer />
    </div>
  );
};

export default About;
