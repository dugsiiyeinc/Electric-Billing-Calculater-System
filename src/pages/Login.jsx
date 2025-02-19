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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username.trim() || !user.password.trim()) {
      toast.error("Please fill in all fields!");
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
      toast.error("Invalid credentials!");
    }
  };

  const {username, password } = user;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center items-center px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md py-8 px-6 rounded-xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
          
          {/* Username / Email Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Username or Email</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Enter username or email"
              className="w-full border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium transition-transform transform hover:scale-105 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600">
            New to Electric Billing?{" "}
            <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
