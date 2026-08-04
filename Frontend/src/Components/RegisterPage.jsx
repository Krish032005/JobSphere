import React from 'react'
import milestone from '../assets/milestone.png'
import {Link} from 'react-router-dom';
const RegisterPage = () => {

  return (
    <>
    <div className='hidden md:block bg-[#f5f6f7] w-full h-screen'>
        {/* LOGIN Navbar */}
        <div className=' bg-white flex justify-between items-center px-20 py-8 shadow-xl'>
            <h1 className='font-bold text-2xl text-blue-600'>JobSphere</h1>
            <h3 className='font-semibold text-xl'>Already Register? 
                <Link to="/login" className='text-blue-700'> Login </Link>
                here
            </h3>
        </div>
        {/* Login Left content Desktop */}
        <div className='bg-[#f5f6f7] w-full  px-20 py-8 flex justify-between gap-20'>

            <div className='w-1/4 min-h-110   py-6 px-6
            bg-white rounded-xl border-2 border-[#D9E0EB] shadow-md
            flex flex-col items-center gap-2'>
                <img src={milestone} alt="" className='w-50 h-50' />
                <h1 className='font-semibold text-xl'>On registering, you can</h1>
                <ul  className='text-lg list-disc  marker:text-green-500 pl-4 text-[#474D6A]'>
                    <li className=''>
                         Build your profile and let recruiters find you
                    </li>
                    <li>
                        Get job posting delivered right to your email
                    </li>
                    <li>
                        Find a job and grow your career
                    </li>
                </ul>
            </div>

            <div className='flex-1 px-10 py-8 min-h-130
            bg-white rounded-xl border-2 border-[#D9E0EB] shadow-md'>
                <h1 className='font-bold text-2xl'>
                    Create your JobSphere profile
                </h1>
                <h3 className='font-semibold text-lg text-[#6a6b6f]'>
                    JobSphere description
                </h3>

                <form className=' mt-4 flex flex-col gap-4 text-lg font-semibold'>
                    <div className=''>
                        <label>Full Name :</label>
                        <input type="text" placeholder='What is your full name.. ' required 
                        className=' w-full block font-normal border-2 border-[#D9E0EB] rounded-lg px-4 py-2' />
                    </div>
                    <div>
                        <label>Email :</label>
                        <input type="email" placeholder='Enter your email..' 
                        className='w-full block font-normal border-2 border-[#D9E0EB] rounded-lg px-4 py-2' />
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" placeholder='Enter your password..' 
                        className=' w-full block font-normal border-2 border-[#D9E0EB] rounded-lg px-4 py-2' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" className='w-4 h-4'/>
                        <label className='font-normal text-lg'>Send me important updates & promotions via email</label>
                    </div>
                    <div>
                        <button className='cursor-pointer active:scale-95
                        rounded-2xl px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white'>
                            Register Now
                        </button>
                    </div>
                    


                </form>
            </div>

        </div>



    </div>

    {/* Mobile login  */}
    <div className='bg-[#f5f6f7] w-full h-screen md:hidden'>
       
        <div className='flex-1 px-10 py-8 min-h-130
            bg-white rounded-xl border-2 border-[#D9E0EB] shadow-md'>
                <h1 className='font-bold text-2xl'>
                    Create your JobSphere profile
                </h1>
                <h3 className='font-semibold text-lg text-[#6a6b6f]'>
                    JobSphere description
                </h3>

                <form className=' mt-4 flex flex-col gap-4 text-lg font-semibold'>
                    <div className=''>
                        <label required>Full Name :</label>
                        <input type="text" placeholder='What is your full name.. ' required 
                        className=' w-full block font-normal border-2 border-[#D9E0EB] rounded-lg px-4 py-2' />
                    </div>
                    <div>
                        <label>Email :</label>
                        <input type="email" placeholder='Enter your email..' 
                        className='w-full block font-normal border-2 border-[#D9E0EB] rounded-lg px-4 py-2' />
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" placeholder='Enter your password..' 
                        className=' w-full block font-normal border-2 border-[#D9E0EB] rounded-lg px-4 py-2' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" className='w-4 h-4'/>
                        <label className='font-normal text-lg'>Send me important updates & promotions via email</label>
                    </div>
                    <div>
                        <button className='cursor-pointer active:scale-95
                        rounded-2xl px-4 py-2 bg-blue-300 text-white'>
                            Register Now
                        </button>
                    </div>
                    


                </form>
            </div>
    </div>
    </>
  )
}

export default RegisterPage