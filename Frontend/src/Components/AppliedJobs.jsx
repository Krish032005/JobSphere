import React from 'react'

const statusStyles = {
  'Under review': 'bg-(--color-surface-secondary) text-(--color-text)',
  'Shortlisted': 'bg-(--color-success)/10 text-(--color-success)',
  'Rejected': 'bg-(--color-error)/10 text-(--color-error)',
  'Interview scheduled': 'bg-(--color-warning)/10 text-(--color-warning)',
}

const appliedJobs = [
  { title: 'Senior Frontend Engineer', company: 'Nimbus Labs', appliedOn: 'Applied 2 days ago', status: 'Under review' },
  { title: 'Backend Engineer (Node)', company: 'Fernway', appliedOn: 'Applied 5 days ago', status: 'Interview scheduled' },
  { title: 'QA Engineer', company: 'Harbor Digital', appliedOn: 'Applied 1 week ago', status: 'Shortlisted' },
  { title: 'DevOps Engineer', company: 'Solace Systems', appliedOn: 'Applied 2 weeks ago', status: 'Rejected' },
]

const AppliedJobs = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-4xl mx-auto flex flex-col gap-8'>

        <div>
          <h1 className='font-bold text-3xl text-(--color-text)'>Applied jobs</h1>
          <p className='font-semibold text-(--color-text-secondary) mt-2'>{appliedJobs.length} applications so far</p>
        </div>

        <div className='flex flex-col gap-4'>
          {appliedJobs.map((job, i) => (
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
                  <p className='font-semibold text-(--color-text-secondary)'>{job.company}</p>
                  <p className='text-sm font-semibold text-(--color-text-secondary) mt-2'>{job.appliedOn}</p>
                </div>
              </div>

              <span className={`text-sm font-semibold px-4 py-2 rounded-full ${statusStyles[job.status]}`}>
                {job.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppliedJobs