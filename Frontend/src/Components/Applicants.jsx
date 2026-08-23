import React from 'react'

const jobs = ['Senior Frontend Engineer', 'Backend Engineer (Node)', 'QA Engineer']

const statusStyles = {
  'New': 'bg-(--color-surface-secondary) text-(--color-text)',
  'Shortlisted': 'bg-(--color-success)/10 text-(--color-success)',
  'Rejected': 'bg-(--color-error)/10 text-(--color-error)',
  'Interviewing': 'bg-(--color-warning)/10 text-(--color-warning)',
}

const applicants = [
  { name: 'Ananya Rao', role: 'Frontend Engineer', experience: '4 years', appliedOn: 'Applied 2 days ago', status: 'New' },
  { name: 'Rohan Mehta', role: 'Frontend Engineer', experience: '6 years', appliedOn: 'Applied 3 days ago', status: 'Shortlisted' },
  { name: 'Sara Khan', role: 'Frontend Developer', experience: '2 years', appliedOn: 'Applied 4 days ago', status: 'Interviewing' },
  { name: 'Vikram Nair', role: 'Frontend Engineer', experience: '5 years', appliedOn: 'Applied 1 week ago', status: 'Rejected' },
  { name: 'Priya Sen', role: 'UI Engineer', experience: '3 years', appliedOn: 'Applied 1 week ago', status: 'New' },
]

const Applicants = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-6xl mx-auto flex flex-col gap-8'>

        <div>
          <h1 className='font-bold text-3xl text-(--color-text)'>Applicants</h1>
          <p className='font-semibold text-(--color-text-secondary) mt-2'>{applicants.length} candidates across your open roles</p>
        </div>

        {/* Filters */}
        <div className='flex items-center gap-4'>
          <select className='border border-(--color-border) bg-(--color-surface) rounded-lg px-4 py-3 font-semibold text-(--color-text) cursor-pointer'>
            <option>All jobs</option>
            {jobs.map((job) => (
              <option key={job}>{job}</option>
            ))}
          </select>

          <select className='border border-(--color-border) bg-(--color-surface) rounded-lg px-4 py-3 font-semibold text-(--color-text) cursor-pointer'>
            <option>All statuses</option>
            <option>New</option>
            <option>Shortlisted</option>
            <option>Interviewing</option>
            <option>Rejected</option>
          </select>

          <input
            type='text'
            placeholder='Search by name or skill'
            className='flex-1 border border-(--color-border) bg-(--color-surface) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
          />
        </div>

        {/* Applicant list */}
        <div className='bg-(--color-surface) border border-(--color-border) rounded-lg overflow-hidden'>

          {/* Table header */}
          <div className='grid grid-cols-12 gap-4 px-6 py-4 bg-(--color-surface-secondary) font-semibold text-sm text-(--color-text-secondary)'>
            <div className='col-span-4'>Candidate</div>
            <div className='col-span-2'>Applied for</div>
            <div className='col-span-2'>Experience</div>
            <div className='col-span-2'>Applied</div>
            <div className='col-span-1'>Status</div>
            <div className='col-span-1 text-right'>Resume</div>
          </div>

          {applicants.map((a, i) => (
            <div
              key={i}
              className='grid grid-cols-12 gap-4 px-6 py-5 items-center border-t border-(--color-border) cursor-pointer hover:bg-(--color-surface-secondary) duration-200'
            >
              <div className='col-span-4 flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-(--color-surface-secondary) border border-(--color-border) flex items-center justify-center font-bold text-sm text-(--color-text) shrink-0'>
                  {a.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className='font-bold text-(--color-text)'>{a.name}</p>
                  <p className='text-sm font-semibold text-(--color-text-secondary)'>{a.role}</p>
                </div>
              </div>

              <div className='col-span-2 font-semibold text-(--color-text-secondary) text-sm'>
                Frontend Engineer
              </div>

              <div className='col-span-2 font-semibold text-(--color-text-secondary) text-sm'>
                {a.experience}
              </div>

              <div className='col-span-2 font-semibold text-(--color-text-secondary) text-sm'>
                {a.appliedOn}
              </div>

              <div className='col-span-1'>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[a.status]}`}>
                  {a.status}
                </span>
              </div>

              <div className='col-span-1 text-right'>
                <button className='font-semibold text-sm text-(--color-primary) cursor-pointer'>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Applicants