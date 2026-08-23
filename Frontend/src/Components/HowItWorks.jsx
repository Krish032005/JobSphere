import React from 'react'

const steps = [
  { title: 'Create your profile', desc: 'Add your experience, skills, and what you\'re looking for.' },
  { title: 'Discover matches', desc: 'Get roles or candidates that fit, ranked by relevance.' },
  { title: 'Connect directly', desc: 'Message and apply, no middleman, no noise.' },
]

const HowItWorks = () => {
  return (
    <div className='w-full px-20 py-16'>
      <div className='text-center mb-12'>
        <h2 className='font-bold text-3xl mb-2'>How JobSphere works</h2>
        <p className='text-lg font-semibold text-(--color-text-hover)'>Three steps, whichever side of the table you're on</p>
      </div>

      <div className='grid grid-cols-3 gap-8'>
        {steps.map((step, i) => (
          <div key={i} className='flex flex-col gap-4 border border-(--color-navbar) px-6 py-4 rounded-lg'>
            <div className='w-12 h-12 rounded-lg bg-(--color-card-logo) border border-(--color-navbar-hover) flex items-center justify-center font-bold text-xl'>
              {i + 1}
            </div>
            <h3 className='font-bold text-xl text-(--color'>{step.title}</h3>
            <p className='font-semibold text-(--color-text)'>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks