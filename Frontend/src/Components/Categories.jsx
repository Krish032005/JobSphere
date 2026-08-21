import React from 'react'

const categories = [
  { name: 'Engineering', count: '3,200 jobs' },
  { name: 'Design', count: '1,150 jobs' },
  { name: 'Marketing', count: '980 jobs' },
  { name: 'Sales', count: '1,430 jobs' },
  { name: 'Product', count: '760 jobs' },
  { name: 'Customer Support', count: '540 jobs' },
]

const Categories = () => {
  return (
    <div className='w-full px-20 py-16 bg-(--color-surface-secondary)'>
      <div className='text-center mb-10'>
        <h2 className='font-bold text-3xl mb-2'>Browse by category</h2>
        <p className='text-lg font-semibold text-(--color-primary-hover)'>Explore roles across every department</p>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        {categories.map((cat, i) => (
          <div
            key={i}
            className='bg-(--color-surface) border border-(--color-border) rounded-lg px-8 py-6 flex justify-between items-center cursor-pointer hover:border-(--color-primary) duration-300 hover:-translate-y-1'
          >
            <h3 className='font-bold text-xl'>{cat.name}</h3>
            <span className='font-semibold text-(--color-text-secondary)'>{cat.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories