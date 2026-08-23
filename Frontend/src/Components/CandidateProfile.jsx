import React from 'react'

const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL']

const experience = [
  { role: 'Frontend Engineer', company: 'Nimbus Labs', duration: '2023 — Present', desc: 'Building the core product dashboard and design system.' },
  { role: 'Junior Developer', company: 'Fernway', duration: '2021 — 2023', desc: 'Worked on internal tooling and API integrations.' },
]

const education = [
  { degree: 'B.Tech, Computer Science', school: 'Mumbai University', duration: '2017 — 2021' },
]

const CandidateProfile = () => {
  return (
    <div className='w-full min-h-screen bg-(--color-bg) px-20 py-12'>
      <div className='max-w-5xl mx-auto flex flex-col gap-8'>

        {/* Header */}
        <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8 flex justify-between items-start'>
          <div className='flex items-center gap-6'>
            <div className='w-24 h-24 rounded-full bg-(--color-surface-secondary) border border-(--color-border) flex items-center justify-center font-bold text-2xl text-(--color-text)'>
              AR
            </div>
            <div>
              <h1 className='font-bold text-2xl text-(--color-text)'>Ananya Rao</h1>
              <p className='font-semibold text-(--color-text-secondary) mt-1'>Frontend Engineer · Mumbai, IN</p>
              <div className='flex items-center gap-3 mt-3'>
                <span className='text-sm font-semibold px-3 py-1 rounded-full bg-(--color-surface-secondary) text-(--color-text)'>
                  Open to work
                </span>
                <span className='text-sm font-semibold text-(--color-text-secondary)'>4 years experience</span>
              </div>
            </div>
          </div>

          <button className='font-semibold text-sm border border-(--color-border) rounded-lg px-5 py-2 cursor-pointer active:scale-95'>
            Edit profile
          </button>
        </div>

        <div className='grid grid-cols-3 gap-8'>

          {/* Left column */}
          <div className='col-span-2 flex flex-col gap-8'>

            {/* About */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>
              <h2 className='font-bold text-xl text-(--color-text) mb-4'>About</h2>
              <p className='font-semibold text-(--color-text-secondary) leading-relaxed'>
                Frontend engineer with 4 years of experience building fast, accessible web
                applications. Focused on design systems, performance, and clean component
                architecture. Currently exploring roles with more product ownership.
              </p>
            </div>

            {/* Experience */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>
              <h2 className='font-bold text-xl text-(--color-text) mb-6'>Experience</h2>
              <div className='flex flex-col gap-6'>
                {experience.map((exp, i) => (
                  <div key={i} className='flex gap-4 pb-6 border-b border-(--color-border) last:border-0 last:pb-0'>
                    <div className='w-12 h-12 rounded-lg bg-(--color-surface-secondary) shrink-0' />
                    <div>
                      <h3 className='font-bold text-lg text-(--color-text)'>{exp.role}</h3>
                      <p className='font-semibold text-(--color-text-secondary)'>{exp.company} · {exp.duration}</p>
                      <p className='font-semibold text-(--color-text-secondary) mt-2'>{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-8'>
              <h2 className='font-bold text-xl text-(--color-text) mb-6'>Education</h2>
              <div className='flex flex-col gap-4'>
                {education.map((edu, i) => (
                  <div key={i} className='flex gap-4'>
                    <div className='w-12 h-12 rounded-lg bg-(--color-surface-secondary) shrink-0' />
                    <div>
                      <h3 className='font-bold text-lg text-(--color-text)'>{edu.degree}</h3>
                      <p className='font-semibold text-(--color-text-secondary)'>{edu.school} · {edu.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className='flex flex-col gap-8'>

            {/* Skills */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              <h2 className='font-bold text-lg text-(--color-text) mb-4'>Skills</h2>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill) => (
                  <span key={skill} className='text-sm font-semibold px-3 py-1 rounded-full bg-(--color-surface-secondary) text-(--color-text)'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              <h2 className='font-bold text-lg text-(--color-text) mb-4'>Resume</h2>
              <div className='border border-dashed border-(--color-border) rounded-lg p-6 flex flex-col items-center gap-3 text-center'>
                <p className='font-semibold text-(--color-text)'>ananya_rao_resume.pdf</p>
                <p className='text-sm font-semibold text-(--color-text-secondary)'>Uploaded 3 weeks ago</p>
                <button className='font-semibold text-sm text-(--color-primary) cursor-pointer'>Replace file</button>
              </div>
            </div>

            {/* Contact */}
            <div className='bg-(--color-surface) border border-(--color-border) rounded-lg p-6'>
              <h2 className='font-bold text-lg text-(--color-text) mb-4'>Contact</h2>
              <div className='flex flex-col gap-3'>
                <p className='font-semibold text-(--color-text-secondary)'>ananya.rao@email.com</p>
                <p className='font-semibold text-(--color-text-secondary)'>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateProfile