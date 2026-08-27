import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo1.jpeg"
const Navbar = () => {

  const [menuOpen, setmenuOpen] = useState(false);
  const Navigate = useNavigate();

  const links = ["Find job", "Companies", "Post a job", "Contact"]

  function signup(){
    Navigate("/signup");
  }
  function login(){
    Navigate("/login");
  }

  const NavItem = ({ children }) => {
  return (
    <li className="overflow-hidden h-10 cursor-pointer active:scale-95 
    hover:bg-(--var-text-second) px-4 py-2 rounded-lg mb-2">
      <span className="flex flex-col hover:-translate-y-1/2 duration-300 ease-out">
        <span className="h-5 mb-3 ">{children}</span>
        <span className="h-5 mb-4 text-(--var-bg)">{children}</span>
      </span>
    </li>
  );
};

  return (
<div className='text-(--var-left-card) sticky top-0 bg-white/80 backdrop-blur-xl z-10'>

 
   
   

    {/* Desktop */}

    <div className='hidden md:block'>
      <div className='px-20 py-4 flex items-center justify-between'>

          <div className=''>
            <h1 className='font-bold md:text-2xl text-xl text-gray-800 '>JobSphere</h1>
          </div>

        {/* Links  */}
        <div className=''>
        <ul className="flex items-center gap-10 text-lg font-semibold cursor-pointer">

            <NavItem>Find job</NavItem>

            <NavItem>Companies</NavItem>

            <NavItem>Post a job</NavItem>

            <NavItem>About</NavItem>

          </ul>
        </div>
      

        {/* buttons register/login */}
        <div className='text-lg font-semibold flex items-center gap-10'>

          <button onClick={login}
          className='overflow-hidden h-5 text-lg cursor-pointer active:scale-95'>
                <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
                  <span className=' h-5 leading-4'>Log in</span>
                  <span className='h-5 leading-4'>Log in</span>
                </span>
          </button>
          {/* experiments */}
          <button onClick={signup}
          className='overflow-hidden h-10 cursor-pointer active:scale-95 
          hover:bg-(--var-text-second) px-4 py-2 rounded-lg mb-2'>
                <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
                  <span className=' h-5 mb-3'>Sign up</span>
                  <span className='text-(--var-bg) h-5 mb-4 '>Sign up</span>
                </span>
          </button>

        </div>
      </div>
    </div>
  


    {/* mobile */}
    <div className='md:hidden w-full z-99  relative'>
      <div className='flex items-center justify-between px-4 py-2'>
        
        <h1 className='font-bold md:text-2xl text-lg text-gray-800 '>JobSphere</h1>

        {/* Menu Button transition */}
        <button onClick={()=>{ setmenuOpen(!menuOpen)}}
        className='bg-(--var-bg) rounded-lg w-10 h-10 relative flex flex-col items-center justify-center'>

          <span className={`border border-black w-6 absolute transition-all duration-300
            ${menuOpen? "rotate-45" : "-translate-y-2"}`}></span>
          
          <span className={`border border-black w-6 absolute transition-all duration-300
            ${menuOpen? "-rotate-45" : "translate-y-2"}`}></span>

        </button>
      </div>

        <div className={`absolute bg-white w-full px-2  py-2 rounded-b-xl
         flex flex-col gap-4 transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className='flex flex-col gap-2 font-semibold'>
            {links.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setmenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-800
                           hover:bg-(--var-bg)
                           active:scale-[0.98]
                           transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
          </ul>
            <div className='w-full text-center'>
              <button className='bg-(--var-text-second) text-white px-10 py-2 rounded-lg font-semibold
              cursor-pointer active:scale-95'>Sign in</button>
            </div>
        </div>

    </div>

  </div>

  )
}

export default Navbar