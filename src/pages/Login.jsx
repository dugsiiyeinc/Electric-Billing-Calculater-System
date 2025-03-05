import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username.trim() || !user.password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const oldUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existUser = oldUsers.find(
      (u) =>
        (u.username === user.username || u.email === user.username) &&
        u.password === user.password
    );

    if (existUser) {
      localStorage.setItem("onlineUser", JSON.stringify(existUser));
      toast.success("Login successful!");
      navigate("/billingCalculator");
    } else {
      toast.error(
        "Invalid credentials. Please check your username/email and password."
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md py-6 px-8 rounded-lg space-y-6 shadow-lg"
        >
          <h2 className="text-3xl text-center font-bold text-indigo-600 mb-4">
            Login to Your Account
          </h2>

          <div className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Enter username or email"
                className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                aria-label="Username or Email"
                required
              />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                aria-label="Password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 py-3 px-4 w-full rounded-lg text-xl font-medium text-white hover:bg-indigo-700 transition-all duration-200"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <p className="text-md md:text-lg lg:text-xl text-gray-600">
              New to Electric Billing?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
