import React from 'react'
import card1 from "../assets/card1.jpeg"
const CenterContent = () => {

    const Banner = ({title, time})=>{
        return (
            <div className='
        flex items-center gap-4 bg-(--var-bg) border border-gray-400 rounded-full
         px-4 py-1 font-semibold shadow-lg'>
            <div className='animate-pulse bg-cyan-600 rounded-full w-3 h-3'></div>
            <p className='text-(--color-text)'>{title}
                <span className='text-(--var-text-muted)'>  {time}</span>
            </p>
            </div>
        );
    };

    const Card = ({head, tag,span,para,btn})=>{
        return (
            <div>
                <h1 className='text-(--var-demo) uppercase tracking-[2px] text-xl font-semibold '>{head}</h1>

                <h1 className='text-[40px] font-semibold leading-15'>{tag} 
                    <span className='text-(--var-demo) font-normal'><i> {span}</i></span>
                </h1>
                <p className='text-gray-300 text-lg w-[82%]'>{para}</p>
                <button className=' mt-8 bg-(--var-secondary-btn) px-7 py-3 rounded-full  text-xl font-semibold cursor-pointer active:scale-95
                shadow-[0_0_10px_rgba(255,255,255,0.25)]'>{btn}</button>
            </div>
        );
    };


  return (
    <div className='w-full  relative px-10 py-16 overflow-hidden 
    page-bg bg-(--var-bg)  flex flex-col items-center '>

        <div className='text-center text-8xl font-semibold '>
        <h1 className='text-(--color-text)'>Where great companies</h1>
       <p className='text-(--var-text-second) font-normal'><i>meet great people</i></p>
        </div>

        {/* short banner 1 */}
        <div className='absolute left-20 top-50 rotate-2 hidden lg:block'>
            <Banner title="interview booked" time=". just now"/>
        </div>
        {/* Short banner 2 */}
        <div className='absolute right-20 top-50 rotate-2 hidden lg:block'>
            <Banner title="Chime" time=" +38 applicants"/>
        </div>
        {/* short banner 3 */}
        <div className='absolute right-30 top-65 -rotate-2 hidden lg:block'>
            <Banner title="3+ Replies" time=". this morning"/>
        </div>
        {/* Center text */}
        <div className='text-center mt-10 font-normal text-2xl text-(--var-text-muted)'>
            <p>The AI recruiting platform for the startups. Post jobs free,</p>
            <p>deploy AI sourcing agents, or hire with a dedicated recruiter.
            </p>
        </div>

        {/* Two main cards */}
        <div className='grid grid-cols-2 gap-4 w-full px-25 mt-10'>

            <div className='w-150 h-80 p-10 rounded-4xl bg-(--color-bg) 
            relative overflow-hidden '>
                <div className="bg-(--var-text-second) rounded-full w-40 h-10 
                absolute blur-[90px] right-0 z-0 "></div>

                <Card head="For Companies" tag="Find your" span="next hire" 
                para="Post Jobs for free, deploy AI sourcing agents, or hand it to an autopilot recrutier." btn="Start hiring" />

                
            </div>

            <div className='w-150 h-80 p-10 rounded-4xl bg-(--var-bg) relative overflow-hidden border border-(--var-text-second)/20 '>
            
                <div className="bg-(--var-text-second) rounded-full w-full h-10 
                absolute blur-[110px] left-0  z-0"></div>
                
                <h1 className='text-(--var-secondary-btn) font-semibold uppercase tracking-[2px] text-xl'>
                    FOR Candidates
                </h1>
                <h1 className='text-[40px] font-bold leading-15 text-(--color-text)'>Find you 
                    <span className='text-(--var-text-second) font-semibold'><i> next job</i></span>
                </h1>
                <p className='text-gray-700 text-lg w-[82%]'>Apply directly to founders and hiring managers at 27,000+ startups building what's next.</p>
                <button className='mt-8 bg-(--var-secondary-btn) px-7 py-3 rounded-full  text-xl font-semibold
                cursor-pointer border border-(--var-demo) shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-95
                '>Browse jobs</button>
                
            </div>
        </div>

    </div>
  )
}

export default CenterContent