import React from 'react'

const CenterContent = () => {
  return (
<div className='w-full h-150'>
    <div className='flex flex-col items-center gap-10 py-6'>
        {/* head text */}
        <div className='text-center'>
        <h1 className='font-bold text-4xl mb-2'>Find your next role, or your next hire</h1>
        <p className='font-semibold text-xl'>Jobsphere connects candidates and recruiter in one place</p>
        </div>

        {/* Input Search */}
        <div className='flex items-center '>
            <input className='border border-gray-100 w-100 py-2 px-4 mr-4 rounded-lg'
            type="text" placeholder='Job title, skill, or company'/>
            <button className='font-semibold text-lg bg-white rounded-lg px-8 py-2 text-black
            cursor-pointer active:scale-95'>
            Search</button>
        </div>

        {/* button roles */}
        <div className='flex items-center gap-8 '>
        <button className='font-semibold text-lg border border-gray-100 rounded-lg px-8 py-2
        cursor-pointer active:scale-97'
        >I'm a Candidate</button>
        <button className='font-semibold text-lg border border-gray-100 rounded-lg px-8 py-2
        cursor-pointer active:scale-97'
        >I'm a Recruiter</button>
        </div>
        {/* Extra info */}
        <div className='flex gap-15'>
            <div className='text-center font-semibold text-lg bg-[#181818] rounded-lg px-10 py-2'>
                <h1 className='text-xl font-bold'>12,400</h1>
                <p>Jobs posted</p>
            </div>
            <div className='text-center font-semibold text-lg bg-[#181818] rounded-lg px-10 py-2'>
                <h1 className='text-xl font-bold'>850</h1>
                <p>Companies</p>
            </div>
            <div className='text-center font-semibold text-lg bg-[#181818] rounded-lg px-10 py-2'>
                <h1 className='text-xl font-bold'>45,000</h1>
                <p>Candidates</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default CenterContent