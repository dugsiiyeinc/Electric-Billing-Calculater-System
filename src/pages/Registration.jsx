import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Registration = () => {

  const [registrationData , setRegistrationData] = useState({
    username:"",
    email:"",
    phone:"",
    defaultCompany:"",
    profilePic:null,
    password:"",
    confirmPassword:""
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;

    setRegistrationData((prev) => ({...prev, [name]:value}));
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center  px-4 py-16">
        <form 

        className="bg-white w-md py-6 px-4 rounded-lg space-y-2">
          <h2 className="text-2xl text-center mb-4 font-bold ">Registration</h2>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="username"
              value={registrationData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              name="email"
              value={registrationData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="phone"
              value={registrationData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <select
              name="company"
              value={registrationData.defaultCompany}
              onChange={handleChange}
              className="w-full border border-gray-300 py-1 px-3 rounded"
            >
              <option value="">Select your company </option>
              <option value="beco">Beco</option>
              <option value="mogadishu power"> Mogadishu Power </option>
              <option value="blue sky"> Blue sky </option>
            </select>
          </div>
          <div className="flex space-y-2">
            <label className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none p-2 text-center">
              Upload Profile
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="password"
              name="password"
              value={registrationData.password}
              onChange={handleChange}
              placeholder="Enter Your password"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="confirmPassword"
              name="confirmPassword"
              value={registrationData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Your Password"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 py-2 px-3 w-full rounded  text-lg font-medium capitalize text-white mt-2 cursor-pointer  hover:bg-indigo-700"
          >
            submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
