import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [user,setUser] = useState({
        username:"",
        password:""
    });
    const handleChange = (e) =>{
        const {name,value} = e.target;

        setUser((prev) => ({...prev, [name]:value}));
    }

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!user.username.trim() || !user.password.trim()){
          toast.error("please fill all inputs");
          return;
        }
        const oldUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existUser = oldUsers.find(u => (u.username === user.username || 
        u.email === user.username) && u.password === user.password);

        if(existUser){
            localStorage.setItem("onlineUser",JSON.stringify(existUser));
            toast.success("user login successfully");
            navigate("/billingCalculator")
        }else{
        
            toast.error("invalid credentials!")
        }

    }
  return (
    <div className="bg-gray-100 min-h-screen">
    <Navbar />
    <div className="flex justify-center items-center  px-4 py-16">
      <form 
        onSubmit={handleSubmit}
      className="bg-white w-md py-6 px-4 rounded-lg space-y-2">
        <h2 className="text-2xl text-center mb-4 font-bold ">Login</h2>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter username or Email"
            className="w-full border border-gray-300 py-1 px-3 rounded"
          />
     
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Your password"
            className="w-full border border-gray-300 py-1 px-3 rounded"
          />
          
        </div>
        <button type="submit"
          className="bg-indigo-600 py-2 px-3 w-full rounded  text-lg font-medium capitalize text-white mt-2 cursor-pointer transition-colors duration-200  hover:bg-indigo-700"
        >
         Login
        </button>
        <p className="text-center text-gray-700">New to Electric Billing? <Link  to="/register" className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Sign up </Link></p>
      </form>
     
    </div>
    <Footer />
  </div>
  )
}

export default Login