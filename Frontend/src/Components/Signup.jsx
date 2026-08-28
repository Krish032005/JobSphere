import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from "../Api";

const Signup = () => {
  const Navigate = useNavigate()
  // Name 
  const [Name, setName] = useState("");
  // Email
  const [Email, setEmail] = useState("");
  // Password 
  const [Password, setPassword] = useState("");
  // Confirm 
  const [Confirm, setConfirm] = useState("");
  // role
  const [role, setRole] = useState('candidate');
  

  

  function login() {
    Navigate('/login')
  }

  const Register = async(e)=>{
    e.preventDefault();

    if(!Name || !Email || !Password || !Confirm || !role){
      return alert("Please fill all fields");
    }

    if (Password !== Confirm) {
      return alert("Passwords do not match");
    }
    
    try{
      const res = await API.post("/auth/register", {
        name : Name,
        email : Email,
        password : Password,
        role,
      });

      alert(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
      setRole("candidate");
    }
    catch(err){
      alert(err.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-(--var-company) px-4 sm:px-6 py-8 sm:py-12 relative">

      {/* Background Glow */}
      <div
        className="
          absolute
          bg-(--var-text-second)
          w-40 h-60
          md:w-100 md:h-80
          rounded-full
          blur-[180px]
        "
      />

      <div className="w-full max-w-md z-1">

        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">

          <h1 className="font-bold text-2xl sm:text-3xl text-(--var-bg)">
            JobSphere
          </h1>

          <p className="font-semibold text-sm sm:text-base text-(--var-secondary-btn) mt-2">
            Create your account
          </p>

        </div>


        {/* Signup Card */}
        <div
          className="
            bg-(--var-company)/80
            text-(--var-bg)
            rounded-xl
            p-5 sm:p-8
            shadow-2xl
          "
        >

          {/* Role Toggle */}
          <div
            className="
              relative
              flex
              items-center
              border border-(--color-navbar-hover)
              rounded-lg
              p-1
              mb-6 sm:mb-8
              overflow-hidden
            "
          >

            {/* Sliding Background */}
            <div
              className={`
                absolute
                top-1
                bottom-1
                w-[calc(50%-4px)]
                rounded-md
                bg-(--var-text-second)
                transition-transform
                duration-300
                ease-in-out
                ${
                  role === 'recruiter'
                    ? 'translate-x-[calc(100%+0px)]'
                    : 'translate-x-0'
                }
              `}
            />

            {/* Candidate */}
            <button
              type="button"
              onClick={() => setRole('candidate')}
              className="
                relative
                z-10
                flex-1
                font-semibold
                text-sm
                py-2
                cursor-pointer
                transition-colors
                duration-300
              "
            >
              I'm a Candidate
            </button>

            {/* Recruiter */}
            <button
              type="button"
              onClick={() => setRole('recruiter')}
              className="
                relative
                z-10
                flex-1
                font-semibold
                text-sm
                py-2
                cursor-pointer
                transition-colors
                duration-300
              "
            >
              I'm a Recruiter
            </button>

          </div>


          {/* Form */}
          <form className="flex flex-col gap-4 sm:gap-5" onSubmit={Register}>

            {/* Full Name */}
            <div className="flex flex-col gap-2">

              <label className="font-semibold text-sm">
                Full name
              </label>

              <input
                type="text"
                placeholder="Ananya Rao"
                value={Name}
                onChange={(e)=>{ setName(e.target.value)}}
                className="
                  w-full
                  border border-(--color-border)
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  placeholder:text-gray-200
                  bg-transparent
                  focus:outline-none
                  focus:border-(--color-primary)
                  transition-colors
                  duration-200
                "
              />

            </div>


            {/* Email */}
            <div className="flex flex-col gap-2">

              <label className="font-semibold text-sm">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={Email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className="
                  w-full
                  border border-(--color-border)
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  placeholder:text-gray-200
                  bg-transparent
                  focus:outline-none
                  focus:border-(--color-primary)
                  transition-colors
                  duration-200
                "
              />

            </div>


            {/* Password */}
            <div className="flex flex-col gap-2">

              <label className="font-semibold text-sm">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={Password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="
                  w-full
                  border border-(--color-border)
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  placeholder:text-gray-200
                  bg-transparent
                  focus:outline-none
                  focus:border-(--color-primary)
                  transition-colors
                  duration-200
                "
              />

            </div>


            {/* Confirm Password */}
            <div className="flex flex-col gap-2">

              <label className="font-semibold text-sm">
                Confirm password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={Confirm}
                onChange={(e)=>{setConfirm(e.target.value)}}
                className="
                  w-full
                  border border-(--color-border)
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  placeholder:text-gray-200
                  bg-transparent
                  focus:outline-none
                  focus:border-(--color-primary)
                  transition-colors
                  duration-200
                "
              />

            </div>


            {/* Terms */}
            <div className="flex items-start gap-3 mt-1">

              <input
                type="checkbox"
                className="
                  w-4 h-4
                  mt-1
                  cursor-pointer
                  accent-(--var-text-second)
                "
              />

              <p className="text-sm font-semibold text-(--var-bg)">
                I agree to the Terms of Service and Privacy Policy
              </p>

            </div>


            {/* Create Account */}
            <button
              type="submit"
              className="
                w-full
                font-semibold
                text-base sm:text-lg
                bg-(--var-text-second)
                text-white
                rounded-lg
                py-3
                mt-1 sm:mt-2
                cursor-pointer
                hover:bg-(--var-demo)
                active:scale-[0.98]
                transition-all
                duration-200
              "
            >
              Create account
            </button>

          </form>

        </div>


        {/* Login */}
        <p
          className="
            text-center
            font-semibold
            text-sm sm:text-base
            text-(--var-bg)
            mt-5 sm:mt-6
          "
        >
          Already have an account?{' '}

          <span
            onClick={login}
            className="
              text-(--var-text-second)
              cursor-pointer
              hover:text-(--var-demo)
              transition-colors
              duration-200
            "
          >
            Log in
          </span>

        </p>

      </div>

    </div>
  )
}

export default Signup