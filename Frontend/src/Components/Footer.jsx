import React from 'react'

const footerLinks = {
  Candidates: ['Browse jobs', 'Career advice', 'Resume tips'],
  Recruiters: ['Post a job', 'Pricing', 'Browse candidates'],
  Company: ['About', 'Blog', 'Contact'],
}

const Footer = () => {
  return (
    <div className='w-full px-20 py-16 border-t border-(--color-border)'>
      <div className='flex justify-between mb-12'>
        <div className='max-w-sm'>
          <h1 className='font-bold text-2xl mb-3'>JobSphere</h1>
          <p className='font-semibold text-(--color-text-secondary)'>
            Connecting candidates and recruiters in one place.
          </p>
        </div>

        <div className='flex gap-16'>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className='flex flex-col gap-3'>
              <h3 className='font-bold text-lg mb-1 text-(--color-primary-hover)'>{heading}</h3>
              {links.map((link) => (
                <span key={link} className='font-semibold text-(--color-text-secondary) cursor-pointer w-fit hover:text-(--color-primary) duration-300'>
                  {link}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center pt-6 border-t border-(--color-border)'>
        <p className='font-semibold text-(--color-text-secondary)'>© 2026 JobSphere. All rights reserved.</p>
        <div className='flex gap-6'>
          <span className='font-semibold cursor-pointer hover:text-(--color-primary) duration-300'>Twitter</span>
          <span className='font-semibold cursor-pointer hover:text-(--color-primary) duration-300'>LinkedIn</span>
          <span className='font-semibold cursor-pointer hover:text-(--color-primary) duration-300'>GitHub</span>
        </div>
      </div>
    </div>
  )
}

export default Footer