import React from 'react'
import Navbar from './Navbar'
import CenterContent from './CenterContent'
import FeaturedJobs from './FeaturedJob'
import Categories from './Categories'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'

const Home = () => {
  return (
    <div className=''>
    <div className='w-full text-white '>
      <Navbar/>
      <CenterContent/>
      <HowItWorks/>
      {/* <Testimonials/>
      <CTA/>
      <Footer/> */}
      {/* <FeaturedJobs/>
      <Categories/> */}

    </div>
    </div>
  )
}

export default Home