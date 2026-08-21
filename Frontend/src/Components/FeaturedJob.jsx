import React from 'react'

const jobs = [
  { title: 'Senior Frontend Engineer', company: 'Nimbus Labs', location: 'Remote', type: 'Full-time', tag: 'React' },
  { title: 'Product Designer', company: 'Kite & Co', location: 'Bengaluru, IN', type: 'Full-time', tag: 'Figma' },
  { title: 'Backend Engineer (Node)', company: 'Fernway', location: 'Remote', type: 'Contract', tag: 'Node.js' },
  { title: 'DevOps Engineer', company: 'Solace Systems', location: 'Mumbai, IN', type: 'Full-time', tag: 'AWS' },
  { title: 'Data Analyst', company: 'Loopline', location: 'Remote', type: 'Part-time', tag: 'SQL' },
  { title: 'QA Engineer', company: 'Harbor Digital', location: 'Pune, IN', type: 'Full-time', tag: 'Automation' },
]

const FeaturedJobs = () => {
  return (
    <div className='w-full px-20 py-16'>
      <div className='flex justify-between items-end mb-10'>
        <div>
          <h2 className='font-bold text-3xl mb-2'>Featured jobs</h2>
          <p className='text-lg font-semibold text-(--color-text-secondary)'>Hand-picked openings from companies hiring right now</p>
        </div>
        <button className='overflow-hidden h-5 text-lg cursor-pointer'>
          <span className='flex flex-col hover:-translate-y-1/2 duration-300 ease-out'>
            <span className='h-5 leading-4'>View all jobs</span>
            <span className='h-5 leading-4'>View all jobs</span>
          </span>
        </button>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        {jobs.map((job, i) => (
          <div
            key={i}
            className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6 flex flex-col gap-4 cursor-pointer hover:border-white/30 hover:-translate-y-1 duration-300'
          >
            <div className='flex justify-between items-start'>
              <div className='w-12 h-12 rounded-lg bg-(--color-primary-hover) flex items-center justify-center font-bold text-lg'>
                {job.company.charAt(0)}
              </div>
              <span className='text-sm font-semibold px-3 py-1 rounded-full bg-(--color-primary)'>
                {job.type}
              </span>
            </div>

            <div>
              <h3 className='font-bold text-xl mb-1'>{job.title}</h3>
              <p className='font-semibold text-(--color-text-secondary)'>{job.company}</p>
            </div>

            <div className='flex justify-between items-center mt-auto pt-4 border-t border-(--color-border)'>
              <span className='font-semibold'>{job.location}</span>
              <span className='text-sm font-semibold px-3 py-1 rounded-full border border-(--color-border)'>
                {job.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedJobs