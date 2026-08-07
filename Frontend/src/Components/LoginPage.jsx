import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import milestone from "../assets/milestone.png";
import axios from "axios";

const LoginPage = () => {
  const [User, setUser] = useState({
    email :"",
    password: "",
  })


  const handler = async(e)=>{
    e.preventDefault();
    try{
       const res = await axios.post("http://localhost:3000/api/auth/login",User);
    
        console.log(res.data);
        alert("Login successfully");
    
        setUser({
          email : "",
          password : "",
        })
    }catch(err){
      console.log(err);
      alert("Login Unsuccessfull");
    }

  }

  const handle = async(e)=>{
    setUser({
      ...User,
      [e.target.name] : e.target.value,
    })
  }


  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">

        {/* Left Section */}
        <div className="lg:w-1/3 bg-white border-r p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <img
              src={milestone}
              alt="Logo"
              className="w-50 h-50 object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h2>

          <div className="space-y-5 ">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 mt-1"></div>
              <p className="text-gray-600">
                Login and continue your job search journey.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 mt-1"></div>
              <p className="text-gray-600">
                Apply to thousands of verified companies.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 mt-1"></div>
              <p className="text-gray-600">
                Track applications and receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 p-10">

          <div className="flex justify-end text-sm mb-8">
            <span className="text-gray-600">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>

          <div className="max-w-md mx-auto">

            <h1 className="text-3xl font-bold text-gray-800">
              Login to your Account
            </h1>

            <p className="text-gray-500 mt-2 mb-8">
              Access your profile and continue your journey.
            </p>
            <form onSubmit={handler}>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={User.email}
                onChange={handle}
                placeholder="Enter your email"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={User.password}
                onChange={handle}
                placeholder="Enter your password"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end mb-6">
              <button className="text-blue-600 hover:underline text-sm">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold active:scale-95 cursor-pointer">
              Login
            </button>
            </form>

            

            
            

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;