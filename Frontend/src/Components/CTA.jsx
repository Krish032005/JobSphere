import React from 'react'

const CTA = () => {
  return (
    <div className='w-full px-20 py-16'>
      <div className='bg-(--color-surface) border border-(--color-border) rounded-lg px-16 py-16 flex flex-col items-center text-center gap-6'>
        <h2 className='font-bold text-4xl'>Ready to make your next move?</h2>
        <p className='font-semibold text-xl text-(--color-text-secondary)'>Join thousands of candidates and recruiters already on JobSphere</p>
        <div className='flex items-center gap-6 mt-2'>
          <button className='font-semibold text-lg bg-(--color-btn) rounded-lg px-8 py-3 cursor-pointer active:scale-95 hover:bg-(--color-btn-hover)'>
            Get started
          </button>
          <button className='font-semibold text-lg border border-(--color-border) rounded-lg px-8 py-3 cursor-pointer active:scale-95 hover:bg-(--color-navbar)'>
            Post a job
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA