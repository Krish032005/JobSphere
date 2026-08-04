import React from "react";
import { FcGoogle } from "react-icons/fc";
import milestone from "../assets/milestone.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">

        {/* Left Section */}
        <div className="lg:w-1/3 bg-white border-r p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <img
              src={milestone}
              alt="Logo"
              className="w-28 h-28 object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h2>

          <div className="space-y-5">
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

            <a
              href="/register"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>

          <div className="max-w-md mx-auto">

            <h1 className="text-3xl font-bold text-gray-800">
              Login to your Account
            </h1>

            <p className="text-gray-500 mt-2 mb-8">
              Access your profile and continue your journey.
            </p>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
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
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-7">
              <div className="flex-1 border"></div>

              <span className="mx-4 text-gray-500 text-sm">
                OR
              </span>

              <div className="flex-1 border"></div>
            </div>

            {/* Google */}
            <button className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
              <FcGoogle size={24} />
              <span className="font-medium">
                Continue with Google
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;