import axios from 'axios';
import milestone from '../assets/milestone.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RegisterPage = () => {

    const [User, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e)=>{
        setUser({
            ...User,
            [e.target.name] : e.target.value,
        });
    };
    const handler = async (e) => {
        e.preventDefault();

        try {
        
            const res = await axios.post(
                "http://localhost:3000/api/auth/register",
                User
            );

            console.log(res.data);
            alert("User Registered Successfully");

            setUser({
                name: "",
                email: "",
                password: "",
            });

        } catch (err) {
            console.log(err.response?.data);
        }
    };

    return (
        <>
            <div className='hidden md:block bg-[#f5f6f7] w-full h-screen'>

                {/* LOGIN Navbar */}

                <div className='bg-white flex justify-between items-center px-20 py-8 shadow-xl'>
                    <h1 className='font-bold text-3xl text-blue-600'>
                        JobSphere
                    </h1>

                    <h3 className='font-semibold text-xl'>
                        Already Register?
                        <Link to="/login" className='text-blue-700'> Login </Link>
                        here
                    </h3>
                </div>

                {/* Desktop */}

                <div className='bg-[#f5f6f7] w-full px-20 py-8 flex justify-between gap-20'>

                    <div className='w-1/4 min-h-110 py-6 px-6 bg-white rounded-xl border-2 border-[#D9E0EB] shadow-md flex flex-col items-center gap-2'>

                        <img src={milestone} alt="" className='w-50 h-50' />

                        <h1 className='font-semibold text-xl'>
                            On registering, you can
                        </h1>

                        <ul className='text-lg list-disc marker:text-green-500 pl-4 text-[#474D6A]'>
                            <li>Build your profile and let recruiters find you</li>
                            <li>Get job posting delivered right to your email</li>
                            <li>Find a job and grow your career</li>
                        </ul>

                    </div>

                    <div className='flex-1 px-10 py-8 min-h-130 bg-white rounded-xl border-2 border-[#D9E0EB] shadow-md'>

                        <h1 className='font-bold text-2xl'>
                            Create your JobSphere profile
                        </h1>

                        <h3 className=' text-[#6a6b6f]'>
                            Build your professional profile, showcase your skills, and discover job opportunities that match your career goals.
                        </h3>

                        <form
                            onSubmit={handler}
                            className='mt-4 flex flex-col gap-4 text-lg font-semibold'
                        >

                            {/* Name */}

                            <div>

                                <label htmlFor="name">Full Name :</label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={User.name}
                                    placeholder='What is your full name..'
                                    required
                                    onChange={handleChange}
                                    className='w-full block font-normal border-2 border-[#b9bbbd] rounded-lg px-4 py-2'
                                />

                            </div>

                            {/* Email */}

                            <div>

                                <label htmlFor="email">Email :</label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={User.email}
                                    placeholder='Enter your email..'
                                    required
                                    onChange={handleChange}
                                    className='w-full block font-normal border-2 border-[#b9bbbd] rounded-lg px-4 py-2'
                                />

                            </div>

                            {/* Password */}

                            <div>

                                <label htmlFor="password">Password :</label>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={User.password}
                                    placeholder='Enter your password..'
                                    required
                                    onChange={handleChange}
                                    className='w-full block font-normal border-2 border-[#b9bbbd] rounded-lg px-4 py-2'
                                />

                            </div>

                            <div className='flex items-center gap-2'>

                                <input
                                    id="check"
                                    type="checkbox"
                                    className='w-4 h-4'
                                />

                                <label htmlFor="check" className='font-normal text-lg'>
                                    Send me important updates & promotions via email
                                </label>

                            </div>

                            <div>

                                <button
                                    type="submit"
                                    className='cursor-pointer active:scale-95 rounded-2xl px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white'
                                >
                                    Register Now
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

            {/* Mobile */}

            <div className='bg-[#f5f6f7] w-full h-screen md:hidden'>

                <div className='flex-1 px-10 py-8 min-h-130 bg-white rounded-xl border-2 border-[#D9E0EB] shadow-md'>

                    <h1 className='font-bold text-2xl'>
                        Create your JobSphere profile
                    </h1>

                    <h3 className='font-semibold text-lg text-[#6a6b6f]'>
                        JobSphere description
                    </h3>

                    <form
                        onSubmit={handler}
                        className='mt-4 flex flex-col gap-4 text-lg font-semibold'
                    >

                        <div>

                            <label htmlFor="name">Full Name :</label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={User.name}
                                placeholder='What is your full name..'
                                required
                                onChange={handleChange}
                                className='w-full block font-normal border-2 border-[#b9bbbd] rounded-lg px-4 py-2'
                            />

                        </div>

                        <div>

                            <label htmlFor="email">Email :</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={User.email}
                                placeholder='Enter your email..'
                                required
                                onChange={handleChange}
                                className='w-full block font-normal border-2 border-[#b9bbbd] rounded-lg px-4 py-2'
                            />

                        </div>

                        <div>

                            <label htmlFor="password">Password :</label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={User.password}
                                placeholder='Enter your password..'
                                required
                                onChange={handleChange}
                                className='w-full block font-normal border-2 border-[#b9bbbd] rounded-lg px-4 py-2'
                            />

                        </div>

                        <div className='flex items-center gap-2'>

                            <input
                                id="check"
                                type="checkbox"
                                className='w-4 h-4'
                            />

                            <label htmlFor="check" className='font-normal text-lg'>
                                Send me important updates & promotions via email
                            </label>

                        </div>

                        <div>

                            <button
                                type='submit'
                                className='cursor-pointer active:scale-95 rounded-2xl px-4 py-2 bg-blue-300 text-white'
                            >
                                Register Now
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};

export default RegisterPage;