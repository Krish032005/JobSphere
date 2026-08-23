import React from 'react'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const Navigate = useNavigate();

  function signup(){
    Navigate("/signup");
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-(--color-bg) px-6 py-8'>
      <div className='w-full max-w-md'>

        {/* Logo */}
        <div className='text-center mb-8'>
          <h1 className='font-bold text-3xl text-(--color-text)'>JobSphere</h1>
          <p className='font-semibold text-(--color-text-hover) mt-2'>Welcome back</p>
        </div>

        <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>

          {/* Role toggle */}
          <div className='flex items-center border border-(--color-navbar-hover) rounded-lg p-1 mb-8'>
            <button className='flex-1 font-semibold text-sm py-2 rounded-md bg-(--color-btn) text-white cursor-pointer'>
              Candidate
            </button>
            <button className='flex-1 font-semibold text-sm py-2 rounded-md text-(--color-text) cursor-pointer'>
              Recruiter
            </button>
          </div>

          {/* Form */}
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-sm text-(--color-text)'>Email address</label>
              <input
                type='email'
                placeholder='you@example.com'
                className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <label className='font-semibold text-sm text-(--color-text)'>Password</label>
                <span className='text-sm font-semibold text-(--color-text-hover) cursor-pointer'>Forgot password?</span>
              </div>
              <input
                type='password'
                placeholder='••••••••'
                className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
              />
            </div>

            <div className='flex items-center gap-3'>
              <input type='checkbox' className='cursor-pointer' />
              <p className='text-sm font-semibold text-(--color-text)'>Remember me</p>
            </div>

            <button className='w-full font-semibold text-lg bg-(--color-btn) text-white rounded-lg py-3 mt-2 cursor-pointer active:scale-95 hover:bg-(--color-btn-hover) duration-200'>
              Log in
            </button>
          </div>

         
        </div>

        <p className='text-center font-semibold text-(--color-text) mt-6'>
          Don't have an account?{' '}
          <span onClick={signup}
          className='text-(--color-btn) cursor-pointer'>
          Sign up</span>
        </p>

      </div>
    </div>
  )
}

export default Login