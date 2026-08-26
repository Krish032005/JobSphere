import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo1.jpeg"
const Navbar = () => {
  const Navigate = useNavigate();

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

  <div className='flex justify-between items-center border-b 
  border-black/30  md:px-20 px-5 py-4'>

    {/* Logo */}
    <div className=''>
     <h1 className='font-bold md:text-2xl text-md text-gray-800 '>JobSphere</h1>
    </div>


    {/* Desktop */}
    <div className='hidden md:block'>
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
  


    {/* mobile */}
    <div className='md:hidden '>
   

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

        {/* <div className=''>
       <ul className="flex items-center gap-2 text-md  cursor-pointer">
  
          <NavItem>Find job</NavItem>
  
          <NavItem>Companies</NavItem>
  
          <NavItem>Post a job</NavItem>
  
          <NavItem>About</NavItem>
  
        </ul>
      </div> */}
    </div>

  </div>
</div>
  )
}

export default Navbar