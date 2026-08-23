import React from 'react'

const testimonials = [
  { quote: 'Found my current role in under two weeks. The matches were actually relevant.', name: 'Ananya R.', role: 'Frontend Engineer' },
  { quote: 'We filled a senior backend seat faster than any job board we\'d tried before.', name: 'Karan M.', role: 'Hiring Manager, Fernway' },
  { quote: 'Clean, fast, no clutter. Applied to three roles in one sitting.', name: 'Priya S.', role: 'Product Designer' },
]

const Testimonials = () => {
  return (
    <div className='w-full px-20 py-16 bg-(--color-surface-secondary)'>
      <div className='text-center mb-12'>
        <h2 className='font-bold text-3xl mb-2'>People are hiring, and getting hired</h2>
      </div>

      <div className='grid grid-cols-3 gap-6'>

        {testimonials.map((t, i) => (
          <div key={i} className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6 flex flex-col gap-6'>

            <p className='font-semibold text-lg'>"{t.quote}"</p>

            <div className='flex items-center gap-3 mt-auto'>
              <div className='w-10 h-10 rounded-full bg-(--color-surface-secondary) border border-(--color-border)' />
              <div>
                <p className='font-bold text-(--color-btn)'>{t.name}</p>
                <p className='text-sm font-semibold'>
                  {t.role}</p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonials