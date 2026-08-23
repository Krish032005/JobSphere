import React from 'react'

const openJobs = [
  { title: 'Senior Frontend Engineer', applicants: 24, status: 'Active' },
  { title: 'Backend Engineer (Node)', applicants: 12, status: 'Active' },
  { title: 'QA Engineer', applicants: 8, status: 'Closed' },
]

const RecruiterProfile = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-5xl mx-auto flex flex-col gap-8'>

        {/* Header */}
        <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8 flex justify-between items-start'>
          <div className='flex items-center gap-6'>
            <div className='w-24 h-24 rounded-lg bg-(--color-surface-secondary) border border-(--color-border) flex items-center justify-center font-bold text-2xl text-(--color-text)'>
              FW
            </div>
            <div>
              <h1 className='font-bold text-2xl text-(--color-text)'>Fernway</h1>
              <p className='font-semibold text-(--color-text-secondary) mt-1'>Software · 200–500 employees · Mumbai, IN</p>
              <div className='flex items-center gap-3 mt-3'>
                <span className='text-sm font-semibold px-3 py-1 rounded-full bg-(--color-surface-secondary) text-(--color-text)'>
                  Hiring
                </span>
                <span className='text-sm font-semibold text-(--color-text-secondary)'>fernway.com</span>
              </div>
            </div>
          </div>

          <button className='font-semibold text-sm border border-(--color-border) rounded-lg px-5 py-2 cursor-pointer active:scale-95'>
            Edit company profile
          </button>
        </div>

        <div className='grid grid-cols-3 gap-8'>

          {/* Left column */}
          <div className='col-span-2 flex flex-col gap-8'>

            {/* About */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>
              <h2 className='font-bold text-xl text-(--color-text) mb-4'>About the company</h2>
              <p className='font-semibold text-(--color-text-secondary) leading-relaxed'>
                Fernway builds infrastructure tooling for backend teams. We're a remote-first
                company with hubs in Mumbai and Bengaluru, focused on developer experience and
                reliability at scale.
              </p>
            </div>

            {/* Open roles */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='font-bold text-xl text-(--color-text)'>Job postings</h2>
                <button className='font-semibold text-sm text-(--color-primary) cursor-pointer'>Post a new job</button>
              </div>
              <div className='flex flex-col gap-4'>
                {openJobs.map((job, i) => (
                  <div key={i} className='flex justify-between items-center py-4 border-b border-(--color-border) last:border-0 last:pb-0'>
                    <div>
                      <h3 className='font-bold text-lg text-(--color-text)'>{job.title}</h3>
                      <p className='font-semibold text-(--color-text-secondary)'>{job.applicants} applicants</p>
                    </div>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        job.status === 'Active'
                          ? 'bg-(--color-surface-secondary) text-(--color-text)'
                          : 'border border-(--color-border) text-(--color-text-secondary)'
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className='flex flex-col gap-8'>

            {/* Company stats */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              <h2 className='font-bold text-lg text-(--color-text) mb-4'>Overview</h2>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <span className='font-semibold text-(--color-text-secondary)'>Founded</span>
                  <span className='font-semibold text-(--color-text)'>2018</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-semibold text-(--color-text-secondary)'>Industry</span>
                  <span className='font-semibold text-(--color-text)'>Software</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-semibold text-(--color-text-secondary)'>Company size</span>
                  <span className='font-semibold text-(--color-text)'>200–500</span>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              <h2 className='font-bold text-lg text-(--color-text) mb-4'>Company logo</h2>
              <div className='border border-dashed border-(--color-border) rounded-lg p-6 flex flex-col items-center gap-3 text-center'>
                <div className='w-16 h-16 rounded-lg bg-(--color-surface-secondary)' />
                <button className='font-semibold text-sm text-(--color-primary) cursor-pointer'>Replace logo</button>
              </div>
            </div>

            {/* Contact */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              <h2 className='font-bold text-lg text-(--color-text) mb-4'>Contact</h2>
              <div className='flex flex-col gap-3'>
                <p className='font-semibold text-(--color-text-secondary)'>hiring@fernway.com</p>
                <p className='font-semibold text-(--color-text-secondary)'>+91 22 4567 8900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterProfile