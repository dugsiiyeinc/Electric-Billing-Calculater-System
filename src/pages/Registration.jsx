import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const companies = ["Beco", "Mogadishu Power", "Blue Sky"];

  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    phone: "",
    defaultCompany: "",
    profilePic: null,
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const validateField = (name, value) => {
    let error = "";
    if (name === "username") {
      if (!value) {
        error = "Username is required!";
      }
    }

    if (name === "email") {
      if (!value) {
        error = "Email is required!";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Email is not valid!";
      }
    }

    if (name === "phone") {
      if (!value) {
        error = "Phone is required!";
      }
    }

    if (name === "defaultCompany") {
      if (!value) {
        error = "Please choose a company!";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Please enter a strong password!";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters!";
      } else if (!/[A-Z]/.test(value)) {
        error = "Password must contain at least one uppercase letter!";
      } else if (!/[a-z]/.test(value)) {
        error = "Password must contain at least one lowercase letter!";
      } else if (!/[0-9]/.test(value)) {
        error = "Password must contain at least one number!";
      } else if (!/[!@#$%^&*()_+{}:;"'<>,.?\/\\|-]/.test(value)) {
        error = "Password must contain at least one special character!";
      } else if (value.length > 32) {
        error = "Password must not exceed 32 characters!";
      }
    }

    if (name === "confirmPassword") {
      if (value !== registrationData.password) {
        error = "Passwords do not match!";
      }
    }

    return error;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setRegistrationData((prev) => ({ ...prev, profilePic: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    // Password strength feedback
    if (name === "password") {
      if (value.length === 0) {
        setPasswordStrength("");
      } else if (value.length < 8) {
        setPasswordStrength("Weak");
      } else if (
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[!@#$%^&*()_+{}:;"'<>,.?\/\\|-]/.test(value)
      ) {
        setPasswordStrength("Strong");
      } else {
        setPasswordStrength("Medium");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = {};
    Object.keys(registrationData).forEach((key) => {
      const error = validateField(key, registrationData[key]);
      if (error) {
        validateErrors[key] = error;
      }
    });

    if (Object.keys(validateErrors).length === 0) {
      const oldUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existUser = oldUsers.find(
        (user) =>
          user.username === registrationData.username ||
          user.email === registrationData.email
      );

      if (existUser) {
        toast.error(
          "User already exists. Please use a unique email and username."
        );
        return;
      } else {
        const updatedUsers = [...oldUsers, registrationData];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("User registration successful!");
        navigate("/login");
        reset();
      }
    } else {
      setErrors(validateErrors);
    }
  };

  const reset = () => {
    setRegistrationData({
      username: "",
      email: "",
      phone: "",
      defaultCompany: "",
      profilePic: null,
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setPasswordStrength("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full sm:w-80 md:w-96 lg:w-1/3 py-8 px-10 rounded-lg space-y-6 shadow-lg ring-1 ring-gray-200"
        >
          {/* Return Home Link */}
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 text-sm md:text-md lg:text-lg mb-6 block text-center"
          >
            &larr; Return Home
          </Link>

          <h2 className="text-2xl text-center mb-6 font-semibold text-gray-800">
            Registration
          </h2>

          {/* Profile Picture Upload */}
          <div className="flex flex-col space-y-2 items-center">
            <label className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none p-3 text-center">
              Upload Profile Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {registrationData.profilePic && (
              <img
                src={registrationData.profilePic}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full mx-auto mt-4 border-2 border-indigo-600"
              />
            )}
          </div>

          {/* Username Field */}
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="username"
              value={registrationData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg text-lg "
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              name="email"
              value={registrationData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg text-lg "
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="phone"
              value={registrationData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg text-lg "
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Default Company Field */}
          <div className="flex flex-col space-y-2">
            <select
              name="defaultCompany"
              value={registrationData.defaultCompany}
              onChange={handleChange}
              className="w-full border border-gray-300 py-3 px-4 rounded-lg text-lg "
            >
              <option value="">Select Default company</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
            {errors.defaultCompany && (
              <p className="text-sm text-red-500">{errors.defaultCompany}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col space-y-2">
            <input
              type="password"
              name="password"
              value={registrationData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg text-lg "
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
            {passwordStrength && (
              <p className="text-sm text-green-600">{passwordStrength}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col space-y-2">
            <input
              type="password"
              name="confirmPassword"
              value={registrationData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg text-lg "
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-indigo-700  transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
