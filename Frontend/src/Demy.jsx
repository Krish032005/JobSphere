import React, { useState } from 'react'
import LoginSvg from "../assets/Login-rafiki.svg"
import { useNavigate } from 'react-router-dom'
import LoginBg from "../assets/LoginBg.png"

const Login = () => {
  const Navigate = useNavigate()
  const [role, setRole] = useState('candidate');
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const Handler = async(e)=>{
    e.preventDefault();

    if(!Email || !Password){
      return alert("Please fill all fields");
    }

    try{
      
      const result = await API.post("/auth/login", {
        email : Email,
        password : Password
      })
      alert(result.data.message);
      setEmail("");
      setPassword("");

    }
    catch(err){
      alert(err.response?.data?.message || "Login failed");
    }
  }

  function signup() {
    Navigate('/signup')
  }

  return (
    <div className="w-full min-h-screen sm:flex justify-around items-center px- sm:px- py-8 sm:py-12 relative" 
    style={{
    backgroundImage: `url(${LoginBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
    }}
  >

    
        {/* Logo */} 
        <div className=" mb-6 sm:mb-8 flex flex-col  items-center bg-amber-00  ">

          <div className='flex items-center'>
            <div className='w-15 h-15 bg-amber-300 rounded-full sm:mr-6 '></div>
           <h1 className=" text-2xl sm:text-8xl text-(--var-left-card) flex items-center">
            JobSphere
          </h1>
          </div>

          <p className="font-semibold text-sm sm:text-5xl text-(--var-secondary-btn) mt-2">
           Welcome <span><i>back</i></span> 
          </p>       
          <img src={LoginSvg} className="w-50 h-50 " alt="" />  
        </div>
     
   
      {/* Login Card Element */}
      <div className="w-full max-w-md z-1 ">
        
       
      
        

        {/* Login Card */}
        <div className="
          bg-(--var-bg) (--var-company)
          text-(--var-left-card)
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
                bg-(--var-left-card)
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
                 ${role == "candidate"? "text-white":"text-black"}
                relative
                z-10
                flex-1
                font-bold
                text-md
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
                ${role == 'recruiter'? "text-white":"text-black"}
                relative
                z-10
                flex-1
                font-bold
                text-md
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

              <label className="font-semibold text-md ">
                Email address
              </label>

              <input
                type="email"
                value={Email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@example.com"
                className="
                  w-full
                  border border-(--color-border)
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  placeholder:text-gray-300
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

                <label className="font-semibold text-md ">
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
                value={Password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="******"
                className="
                  w-full
                  border border-(--color-border)
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  placeholder:text-gray-300
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

              <p className="text-sm font-semibold text-(--var-left-card)">
                Remember me
              </p>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              onClick={Handler}
              className="
                w-full
                font-semibold
                text-base sm:text-lg
                bg-(--var-left-card)
                text-white
                rounded-lg
                py-3
                mt-1 sm:mt-2
                cursor-pointer
                hover:bg-(--var-left-card)/80
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
          text-(--var-left-card)
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

















// Demy CSS VARIABLE CLASSES 
@import "tailwindcss";

:root {
 
  --var-text-second : #e9357b;
  --var-text-muted : #535353;
  --var-left-card : #101617;
  
  --var-company : #051316 ;
  --var-demo : #f47caa;
  --var-background : #fafafa;
  --var-bg : #fffdfe;
  --var-navbar : #ffff;

  --var-secondary-btn : #d11f68;

  --color-bg: #0F1B1C;
  --color-navbar: #274245;
  --color-navbar-hover : #1b313392;
  --color-btn: #f18a15;
  --color-btn-hover: #d9770a;

  --color-card : linear-gradient( top, #0F1B1C, #274245, rgba(241,138,21,0.1));
  --color-card-logo : #25585c;

  --color-border: #537a7e;
  --color-text: #051316;
  --color-text-hover: #f18a15;

  --background : #fef4f9;
  --text : rgb(58 134 255 / 0.5);
   --page-bg: 
   radial-gradient(640px 360px at 10% 12%, rgba(233, 53, 123, 0.07), transparent 65%), 
   radial-gradient(640px 360px at 90% 16%, rgba(91, 51, 83, 0.08), transparent 65%);
}

.page-bg{
 background: 
  radial-gradient(640px 360px at 10% 12%, rgba(233, 53, 123, 0.07), transparent 100%), 
   radial-gradient(640px 360px at 90% 16%, rgba(91, 51, 83, 0.08), transparent 65%);
}
.radial-bg{
   background:
   radial-gradient(circle at 15% 12%, #fdebf3 0, transparent 30rem),
   radial-gradient(circle at 85% 18%, #fff0f5 0, transparent 28rem),
   var(--background);
}

.page-background{
   background: gainsboro;
}


/* Style or Ready Components style */
h1{
   font-family: Anton;
   font-weight: 400;
}


