import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Navigate = useNavigate()
  const [role, setRole] = useState('candidate')

  function signup() {
    Navigate('/signup')
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-(--var-company) px-4 sm:px-6 py-8 sm:py-12 relative">

    <div className='absolute bg-(--var-text-second) w-40 h-60 md:w-100 md:h-80 rounded-full
    blur-[180px]'></div>

      <div className="w-full max-w-md z-1 ">

        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8 ">

          <h1 className="font-bold text-2xl sm:text-3xl text-(--var-bg)">
            JobSphere
          </h1>

          <p className="font-semibold text-sm sm:text-base text-(--var-secondary-btn) mt-2">
            Welcome back
          </p>

        </div>

        

        {/* Login Card */}
        <div className="
          bg-(--var-company)/80
          
          text-(--var-bg)
          rounded-xl
          p-5 sm:p-8
          shadow-2xl
        ">


          {/* Role Toggle */}
          <div className="
            relative
            flex
            items-center
            border border-(--color-navbar-hover)
            rounded-lg
            p-1
            mb-6 sm:mb-8
            overflow-hidden
          ">

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
                ${role === 'recruiter'
                  ? 'translate-x-[calc(100%+0px)]'
                  : 'translate-x-0'}
              `}
            />

            <button
              onClick={() => setRole('candidate')}
              className={`
                relative
                z-10
                flex-1
                font-semibold
                text-sm
                py-2
                cursor-pointer
                transition-colors
                duration-300
               
              `}
            >
              Candidate
            </button>

            <button
              onClick={() => setRole('recruiter')}
              className={`
                relative
                z-10
                flex-1
                font-semibold
                text-sm
                py-2
                cursor-pointer
                transition-colors
                duration-300
              `}
            >
              Recruiter
            </button>

          </div>


          {/* Form */}
          <form className="flex flex-col gap-4 sm:gap-5">

            {/* Email */}
            <div className="flex flex-col gap-2">

              <label className="font-semibold text-sm ">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
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

              <div className="flex justify-between items-center gap-3">

                <label className="font-semibold text-sm ">
                  Password
                </label>

                <span className="
                  text-xs sm:text-sm
                  font-semibold
                  text-(--var-text-second)
                  cursor-pointer
                  hover:text-(--var-demo)
                  transition-colors
                ">
                  Forgot password?
                </span>

              </div>

              <input
                type="password"
                placeholder="******"
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


            {/* Remember Me */}
            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-(--var-text-second)"
              />

              <p className="text-sm font-semibold text-(--var-bg)">
                Remember me
              </p>

            </div>


            {/* Login Button */}
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
              Log in
            </button>

          </form>

        </div>


        {/* Signup */}
        <p className="
          text-center
          font-semibold
          text-sm sm:text-base
          text-(--var-bg)
          mt-5 sm:mt-6
        ">

          Don't have an account?{' '}

          <span
            onClick={signup}
            className="
              text-(--var-text-second)
              cursor-pointer
              hover:text-(--var-demo)
              transition-colors
              duration-200
            "
          >
            Sign up
          </span>

        </p>

      </div>

    </div>
  )
}

export default Login