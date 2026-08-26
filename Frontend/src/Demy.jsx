import React from 'react'
import Navbar from './Components/Navbar'
import CenterContent from './Components/CenterContent'
import FeaturedJobs from './Components/FeaturedJob'
import Categories from './Components/Categories'
import HowItWorks from './Components/HowItWorks'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import Footer from './Components/Footer'

const Demy = () => {
  return (
  <div className='w-full h-screen p-6 '>
    <div className='w-full h-full rounded-3xl text-white bg-(--color-bg) flex flex-col items-center'>
    <div className='w-[78%] h-15 bg-black rounded-b-[2.5rem] flex justify-between '>
        <div className='bg-white w-20 h-15  rounded-b-2xl skew-x-20'></div>
        <div className='bg-white w-20 h-15 rounded-b-2xl -skew-x-20 '></div>
    </div>
      {/* <Navbar/>
      <CenterContent/>
      <FeaturedJobs/>
      <Categories/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
      <Footer/> */}
    </div>
    </div>
  )
}

export default Demy