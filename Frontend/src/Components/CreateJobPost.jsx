import React from 'react'

const skillSuggestions = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']

const CreateJobPost = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-4xl mx-auto flex flex-col gap-8'>

        <div>
          <h1 className='font-bold text-3xl text-(--color-text)'>Post a new job</h1>
          <p className='font-semibold text-(--color-text-secondary) mt-2'>Fill in the details candidates will see</p>
        </div>

        <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8 flex flex-col gap-8'>

          {/* Basic details */}
          <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-lg text-(--color-text)'>Basic details</h2>

            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-sm text-(--color-text)'>Job title</label>
              <input
                type='text'
                placeholder='e.g. Senior Frontend Engineer'
                className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
              />
            </div>

            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm text-(--color-text)'>Job type</label>
                <select className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) cursor-pointer focus:outline-none focus:border-(--color-primary)'>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm text-(--color-text)'>Experience level</label>
                <select className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) cursor-pointer focus:outline-none focus:border-(--color-primary)'>
                  <option>Entry level</option>
                  <option>Mid level</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm text-(--color-text)'>Location</label>
                <input
                  type='text'
                  placeholder='e.g. Mumbai, IN or Remote'
                  className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm text-(--color-text)'>Work mode</label>
                <select className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) cursor-pointer focus:outline-none focus:border-(--color-primary)'>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
          </div>

          {/* Compensation */}
          <div className='flex flex-col gap-5 pt-8 border-t border-(--color-border)'>
            <h2 className='font-bold text-lg text-(--color-text)'>Compensation</h2>

            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm text-(--color-text)'>Minimum salary (₹/year)</label>
                <input
                  type='text'
                  placeholder='e.g. 1800000'
                  className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm text-(--color-text)'>Maximum salary (₹/year)</label>
                <input
                  type='text'
                  placeholder='e.g. 2600000'
                  className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className='flex flex-col gap-5 pt-8 border-t border-(--color-border)'>
            <h2 className='font-bold text-lg text-(--color-text)'>Description</h2>

            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-sm text-(--color-text)'>Job description</label>
              <textarea
                rows={5}
                placeholder='Describe the role, responsibilities, and what a typical day looks like...'
                className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary) resize-none'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-sm text-(--color-text)'>Requirements</label>
              <textarea
                rows={4}
                placeholder='List required qualifications, one per line...'
                className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary) resize-none'
              />
            </div>
          </div>

          {/* Skills */}
          <div className='flex flex-col gap-4 pt-8 border-t border-(--color-border)'>
            <h2 className='font-bold text-lg text-(--color-text)'>Required skills</h2>

            <input
              type='text'
              placeholder='Type a skill and press enter'
              className='border border-(--color-border) rounded-lg px-4 py-3 text-(--color-text) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)'
            />

            <div className='flex flex-wrap gap-2'>
              {skillSuggestions.map((skill) => (
                <span
                  key={skill}
                  className='text-sm font-semibold px-3 py-1 rounded-full bg-(--color-surface-secondary) text-(--color-text) flex items-center gap-2 cursor-pointer'
                >
                  {skill}
                  <span className='text-(--color-text-secondary)'>×</span>
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className='flex items-center justify-end gap-4 pt-8 border-t border-(--color-border)'>
            <button className='font-semibold text-lg border border-(--color-border) rounded-lg px-8 py-3 cursor-pointer active:scale-95'>
              Save as draft
            </button>
            <button className='font-semibold text-lg bg-(--color-primary) text-white rounded-lg px-8 py-3 cursor-pointer active:scale-95 hover:bg-(--color-primary-hover) duration-200'>
              Publish job
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateJobPost