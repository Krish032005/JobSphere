import React from 'react'

const savedJobs = [
  { title: 'Senior Frontend Engineer', company: 'Nimbus Labs', location: 'Remote', type: 'Full-time', salary: '₹28L – ₹35L', savedOn: 'Saved 2 days ago' },
  { title: 'Product Designer', company: 'Kite & Co', location: 'Bengaluru, IN', type: 'Full-time', salary: '₹20L – ₹26L', savedOn: 'Saved 4 days ago' },
  { title: 'Data Analyst', company: 'Loopline', location: 'Remote', type: 'Part-time', salary: '₹12L – ₹15L', savedOn: 'Saved 1 week ago' },
]

const SavedJobs = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-4xl mx-auto flex flex-col gap-8'>

        <div>
          <h1 className='font-bold text-3xl text-(--color-text)'>Saved jobs</h1>
          <p className='font-semibold text-(--color-text-secondary) mt-2'>{savedJobs.length} jobs you've bookmarked</p>
        </div>

        <div className='flex flex-col gap-4'>
          {savedJobs.map((job, i) => (
            <div
              key={i}
              className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6 flex justify-between items-center'
            >
              <div className='flex gap-4'>
                <div className='w-12 h-12 rounded-lg bg-(--color-surface-secondary) flex items-center justify-center font-bold text-lg text-(--color-text) shrink-0'>
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h3 className='font-bold text-lg text-(--color-text)'>{job.title}</h3>
                  <p className='font-semibold text-(--color-text-secondary)'>{job.company} · {job.location}</p>
                  <div className='flex items-center gap-3 mt-2'>
                    <span className='text-sm font-semibold px-3 py-1 rounded-full bg-(--color-surface-secondary) text-(--color-text)'>
                      {job.type}
                    </span>
                    <span className='text-sm font-semibold text-(--color-text-secondary)'>{job.savedOn}</span>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <p className='font-bold text-(--color-text) mr-4'>{job.salary}</p>
                <button className='font-semibold text-sm bg-(--color-primary) text-white rounded-lg px-5 py-2 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) duration-200'>
                  Apply
                </button>
                <button className='font-semibold text-sm border border-(--color-border) rounded-lg px-5 py-2 cursor-pointer active:scale-95'>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SavedJobs