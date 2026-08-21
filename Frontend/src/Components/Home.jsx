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
    <div className='w-full text-white bg-(--color-bg)'>
      <Navbar/>
      <CenterContent/>
      <FeaturedJobs/>
      <Categories/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home