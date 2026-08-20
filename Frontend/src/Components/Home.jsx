import React from 'react'
import Navbar from './Navbar'
import CenterContent from './CenterContent'

const Home = () => {
  return (
   <>
   <div className='bg-black w-full h-screen text-white'>
    <Navbar/>
    <CenterContent/>
   </div>
   </>
  )
}

export default Home
