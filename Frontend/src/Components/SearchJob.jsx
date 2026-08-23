import React from 'react'

const filters = {
  'Job type': ['Full-time', 'Part-time', 'Contract', 'Internship'],
  'Experience': ['Entry level', 'Mid level', 'Senior', 'Lead'],
  'Location': ['Remote', 'Mumbai', 'Bengaluru', 'Pune'],
}

const jobs = [
  { title: 'Senior Frontend Engineer', company: 'Nimbus Labs', location: 'Remote', type: 'Full-time', salary: '₹28L – ₹35L', posted: '2 days ago' },
  { title: 'Backend Engineer (Node)', company: 'Fernway', location: 'Remote', type: 'Contract', salary: '₹18L – ₹22L', posted: '3 days ago' },
  { title: 'Product Designer', company: 'Kite & Co', location: 'Bengaluru, IN', type: 'Full-time', salary: '₹20L – ₹26L', posted: '5 days ago' },
  { title: 'DevOps Engineer', company: 'Solace Systems', location: 'Mumbai, IN', type: 'Full-time', salary: '₹24L – ₹30L', posted: '1 week ago' },
  { title: 'Data Analyst', company: 'Loopline', location: 'Remote', type: 'Part-time', salary: '₹12L – ₹15L', posted: '1 week ago' },
]

const SearchJobs = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-6xl mx-auto flex flex-col gap-8'>

        {/* Search bar */}
        <div className='flex items-center gap-4'>
          <input
            type='text'
            placeholder='Job title, skill, or company'
            className='flex-1 border border-(--color-border) bg-(--color-surface) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
          />
          <input
            type='text'
            placeholder='Location'
            className='w-64 border border-(--color-border) bg-(--color-surface) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
          />
          <button className='font-semibold text-lg bg-(--color-primary) text-white rounded-lg px-8 py-3 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) duration-200'>
            Search
          </button>
        </div>

        <div className='grid grid-cols-4 gap-8'>

          {/* Filters */}
          <div className='flex flex-col gap-6'>
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              {Object.entries(filters).map(([group, options], i) => (
                <div key={group} className={i !== 0 ? 'mt-6 pt-6 border-t border-(--color-border)' : ''}>
                  <h3 className='font-bold text-(--color-text) mb-3'>{group}</h3>
                  <div className='flex flex-col gap-3'>
                    {options.map((opt) => (
                      <label key={opt} className='flex items-center gap-3 cursor-pointer'>
                        <input type='checkbox' className='cursor-pointer' />
                        <span className='font-semibold text-(--color-text-secondary)'>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className='col-span-3 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-(--color-text-secondary)'>{jobs.length} jobs found</p>
              <select className='border border-(--color-border) bg-(--color-surface) rounded-lg px-4 py-2 font-semibold text-(--color-text) cursor-pointer'>
                <option>Most relevant</option>
                <option>Newest</option>
                <option>Highest salary</option>
              </select>
            </div>

            {jobs.map((job, i) => (
              <div
                key={i}
                className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6 flex justify-between items-center cursor-pointer hover:border-(--color-primary) duration-300'
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
                      <span className='text-sm font-semibold text-(--color-text-secondary)'>{job.posted}</span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-end gap-3'>
                  <p className='font-bold text-(--color-text)'>{job.salary}</p>
                  <button className='font-semibold text-sm border border-(--color-border) rounded-lg px-5 py-2 cursor-pointer active:scale-95'>
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchJobs