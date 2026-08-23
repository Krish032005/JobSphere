import React from 'react'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-(--color-bg) px-6 py-16'>
      <div className='w-full max-w-md'>

        {/* Logo */}
        <div className='text-center mb-8'>
          <h1 className='font-bold text-3xl text-(--color-text)'>JobSphere</h1>
          <p className='font-semibold text-(--color-text-secondary) mt-2'>Welcome back</p>
        </div>

        <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>

          {/* Role toggle */}
          <div className='flex items-center bg-(--color-surface-secondary) rounded-lg p-1 mb-8'>
            <button className='flex-1 font-semibold text-sm py-2 rounded-md bg-(--color-primary) text-white cursor-pointer'>
              Candidate
            </button>
            <button className='flex-1 font-semibold text-sm py-2 rounded-md text-(--color-text-secondary) cursor-pointer'>
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
                <span className='text-sm font-semibold text-(--color-primary) cursor-pointer'>Forgot password?</span>
              </div>
              <input
                type='password'
                placeholder='••••••••'
                className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
              />
            </div>

            <div className='flex items-center gap-3'>
              <input type='checkbox' className='cursor-pointer' />
              <p className='text-sm font-semibold text-(--color-text-secondary)'>Remember me</p>
            </div>

            <button className='w-full font-semibold text-lg bg-(--color-primary) text-white rounded-lg py-3 mt-2 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) duration-200'>
              Log in
            </button>
          </div>

          {/* Divider */}
          <div className='flex items-center gap-4 my-6'>
            <div className='flex-1 h-px bg-(--color-border)' />
            <span className='text-sm font-semibold text-(--color-text-secondary)'>or</span>
            <div className='flex-1 h-px bg-(--color-border)' />
          </div>

          <button className='w-full font-semibold text-lg border border-(--color-border) rounded-lg py-3 cursor-pointer active:scale-95 flex items-center justify-center gap-3'>
            Continue with Google
          </button>
        </div>

        <p className='text-center font-semibold text-(--color-text-secondary) mt-6'>
          Don't have an account?{' '}
          <span className='text-(--color-primary) cursor-pointer'>Sign up</span>
        </p>

      </div>
    </div>
  )
}

export default Login