import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Registration = () => {


  const companies = [
      "Beco",
      "Mogadishu power",
      "Blue Sky"
  ];

  const [registrationData , setRegistrationData] = useState({
    username:"",
    email:"",
    phone:"",
    defaultCompany:"",
    profilePic:null,
    password:"",
    confirmPassword:""
  });

  const [users,setUsers] = useState(JSON.parse(localStorage.getItem("users")) ||[]);
 

  const [errors,setErrors] = useState({});
   
  const validateField = (name,value) =>{
    let error = ""
    if(name === "username"){
      if(!value){
        error = "username is required!";
      }
   }

   if(name === "email"){
    if(!value){
      error = "email is required!"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
      error = "email is not valid!"
    }
   }

   if(name === "phone"){
    if(!value){
      error = "phone is required!";
    }
   }
   
   if(name === "defaultCompany"){
    if(!value){
      error = "please choose company  is required!";
    }
   }
   if(name === "password"){
    if(!value){
      error = "please enter strong password!";
    }else if(value.length < 8){
      error = "please must be 8 characters!";
    }else if(!/[A-Z]/.test(value)){
      error = "password must at least one uppercase latter"
    }else if(!/[a-z]/.test(value)){
      error = "password must at least one lowercase latter"
    }else if(!/[0-9]/.test(value)){
      error = "password must at least one number"
    }else if(!/[!@#$%&*]/.test(value)){
      error = "password must at least one special character"
    }else if(value.length > 32){
      error = "please doesn`t greater than 32 characters!";
    }

   
   }
   if(name === "confirmPassword"){
    if(value !== registrationData.password){
      error = "password don`t matched!";
    }
   
   }

    return error;
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setRegistrationData((prev) => ({...prev, profilePic:reader.result}));
    reader.readAsDataURL(file);
  };
  const handleChange = (e) =>{
    const {name,value} = e.target;

    setRegistrationData((prev) => ({...prev, [name]:value}));

   
    const error = validateField(name,value);

    setErrors((prev) => ({...prev, [name]:error}));
  }



  const handleSubmit = (e) =>{
    e.preventDefault();

    const validateErrors = {};

      Object.keys(registrationData).forEach(key =>{
        const error = validateField(key,registrationData[key]);

        if(error){
          validateErrors[key] = error;
        }
      })
   
    if(Object.keys(validateErrors).length === 0){
      const oldUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existUser = oldUsers.find(user => user.username === registrationData.username || 
        user.email === registrationData.email);
        if(existUser){
          alert("user Already exists please use unique email and name");
          return;
        }else{
          alert("success");
          console.log(registrationData);
          setUsers([...users,registrationData]);
          console.log(users);
          localStorage.setItem("users",JSON.stringify(users));
          reset();
        }
     
    
    }else{    
      setErrors(validateErrors);
    }
    
  }

  const reset = () =>{
    setRegistrationData({
      username:"",
      email:"",
      phone:"",
      defaultCompany:"",
      profilePic:null,
      password:"",
      confirmPassword:""
    });
    setErrors({});
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center  px-4 py-16">
        <form 
        onSubmit={handleSubmit}
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
             {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
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
               {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
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
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <select
              name="defaultCompany"
              value={registrationData.defaultCompany}
              onChange={handleChange}
              className="w-full border border-gray-300 py-1 px-3 rounded"
            >
              <option value="">Select Deafult company</option>
              {
                companies.map((company,index) =>(
                  <option key={index} value={company}>{company}</option>
                ))
              }
              
            </select>
            {errors.defaultCompany && <p className="text-sm text-red-500">{errors.defaultCompany}</p>}
          </div>
          <div className="flex space-y-2">
            <label className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none p-2 text-center">
              Upload Profile
              <input type="file" 
              accept="image/*"
              onChange={handleImageChange}
               className="hidden" />
            </label>
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="password"
              name="password"
              min={8}
              max={32}
              value={registrationData.password}
              onChange={handleChange}
              placeholder="Enter Your password"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="password"
              name="confirmPassword"
              value={registrationData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Your Password"
              className="w-full border border-gray-300 py-1 px-3 rounded"
            />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 py-2 px-3 w-full rounded  text-lg font-medium capitalize text-white mt-2 cursor-pointer transition-colors duration-200  hover:bg-indigo-700"
          >
            submit
          </button>
          <p className="text-center text-gray-700">Al ready have a user! <a className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Sign in </a></p>
        </form>
       
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
