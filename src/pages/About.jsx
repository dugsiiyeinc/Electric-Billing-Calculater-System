import React from "react";
import Navbar from "../components/Navbar";
import { RiLightbulbFlashLine } from "react-icons/ri";
import KeyFeatures from "../components/KeyFeatures";
import Benefits from "../components/Benefits";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 " id="about">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <RiLightbulbFlashLine className="mx-auto h-20 w-20 text-indigo-700" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Electric Billing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A smart and efficient solution designed to help users calculate and
            track their monthly electricity costs.
          </p>
        </div>
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md px-4 py-5 sm:p-6 ">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              Our mission is to empower individuals and businesses with accurate
              and transparent electricity cost tracking. By providing a
              user-friendly platform for monitoring energy consumption, we aim
              to promote smarter energy usage, reduce unnecessary expenses, and
              contribute to a more energy-efficient future.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md px-4 py-5 sm:p-6 mt-4">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-600">
              Our vision is to become a leading digital solution for electricity
              billing and energy management, making it easier for users to
              understand their consumption patterns. We aspire to create a world
              where technology helps people make informed decisions about energy
              usage, leading to cost savings and a more sustainable environment.
            </p>
          </div>

          <KeyFeatures />
          <Benefits />
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Start Saving Today
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Join thousands of users who are already benefiting from our
              Electric Billing system.
            </p>
            <Link
            to="/register"
              href="#"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
          <TeamMembers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
