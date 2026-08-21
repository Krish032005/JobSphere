import React from 'react'

const Navbar = () => {

  return (
<div className='w-full h-25 px-20 py-6'>
  <div className='flex justify-between items-center bg-(--color-surface-secondary) border border-(--color-border) rounded-lg px-8 py-4'>

    {/* Logo */}
    <h1 className='font-bold text-3xl'>JobSphere</h1>

    {/* Links  */}
    <div className=''>
      <ul className='flex items-center gap-10 text-lg cursor-pointer'>

        <li className='overflow-hidden h-10 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) px-4 py-2 rounded-lg mb-2'>
            <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
              <span className=' h-5 mb-3'>Find job</span>
              <span className='text-white h-5 mb-4 '>Find job</span>
            </span>
      </li>
      <li className='overflow-hidden h-10 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) px-4 py-2 rounded-lg mb-2'>
            <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
              <span className=' h-5 mb-3'>Companies</span>
              <span className='text-white h-5 mb-4 '>Companies</span>
            </span>
      </li>
      <li className='overflow-hidden h-10 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) px-4 py-2 rounded-lg mb-2'>
            <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
              <span className=' h-5 mb-3'>Post a job</span>
              <span className='text-white h-5 mb-4 '>Post a job</span>
            </span>
      </li>
      <li className='overflow-hidden h-10 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) px-4 py-2 rounded-lg mb-2'>
            <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
              <span className=' h-5 mb-3'>About</span>
              <span className='text-white h-5 mb-4 '>About</span>
            </span>
      </li>

      </ul>
    </div>
   

    {/* buttons register/login */}
    <div className='text-lg flex items-center gap-10'>

      <button className='overflow-hidden h-5 text-lg cursor-pointer active:scale-95'>
            <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
              <span className=' h-5 leading-4'>Log in</span>
              <span className='h-5 leading-4'>Log in</span>
            </span>
      </button>
      {/* experiments */}
      <button className='overflow-hidden h-10 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) px-4 py-2 rounded-lg mb-2'>
            <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
              <span className=' h-5 mb-3'>Sign up</span>
              <span className='text-white h-5 mb-4 '>Sign up</span>
            </span>
      </button>

     
    </div>

  </div>
</div>
  )
}

export default Navbar