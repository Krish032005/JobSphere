import React from 'react'

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'GraphQL',
  'PostgreSQL',
]

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Nimbus Labs',
    duration: '2023 — Present',
    desc: 'Building the core product dashboard and design system.',
  },
  {
    role: 'Junior Developer',
    company: 'Fernway',
    duration: '2021 — 2023',
    desc: 'Worked on internal tooling and API integrations.',
  },
]

const education = [
  {
    degree: 'B.Tech, Computer Science',
    school: 'Mumbai University',
    duration: '2017 — 2021',
  },
]

const CandidateProfile = () => {
  return (
    <div
      className="
        w-full
        min-h-screen
       page-bg
        px-4 sm:px-6 lg:px-10
        py-8 sm:py-10 lg:py-12
        relative
        overflow-hidden
      "
    >


      <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 relative ">

        {/* Header */}
        <div
          className="
            bg-(--var-company)
            border border-(--color-navbar-hover)
            rounded-xl
            p-5 sm:p-8
            
            flex
            flex-col
            sm:flex-row
            justify-between
            items-start
            sm:items-center
            gap-6
          "
        >

          {/* Profile Info */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Avatar */}
            <div
              className="
                w-18 h-18
                sm:w-24 sm:h-24
                rounded-full
                bg-(--var-text-second)
                border border-(--color-navbar-hover)
                flex items-center justify-center
                font-bold
                text-xl sm:text-2xl
                text-white
                shrink-0
              "
            >
              AR
            </div>

            <div>

              <h1
                className="
                  font-bold
                  text-xl sm:text-2xl
                  text-white
                "
              >
                Ananya Rao
              </h1>

              <p
                className="
                  font-semibold
                  text-sm sm:text-base
                  text-gray-200
                  mt-1
                "
              >
                Frontend Engineer · Mumbai, IN
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">

                <span
                  className="
                    text-xs sm:text-sm
                    font-semibold
                    px-3 py-1
                    rounded-full
                    bg-(--var-text-second)
                    text-white
                  "
                >
                  Open to work
                </span>

                <span
                  className="
                    text-xs sm:text-sm
                    font-semibold
                    text-gray-400
                  "
                >
                  4 years experience
                </span>

              </div>

            </div>

          </div>


          {/* Edit Profile */}
          <button
            className="
              w-full sm:w-auto
              font-semibold
              text-sm
              bg-(--var-text-second)
              text-white
              rounded-lg
              px-5
              py-2.5
              cursor-pointer
              hover:bg-(--var-demo)
              active:scale-[0.98]
              transition-all
              duration-200
            "
          >
            Edit profile
          </button>

        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">

            {/* About */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-8
                shadow-xl
              "
            >

              <h2
                className="
                  font-bold
                  text-lg sm:text-xl
                  text-(--var-text-second)
                  mb-4
                "
              >
                About
              </h2>

              <p
                className="
                  font-semibold
                  text-sm sm:text-base
                  text-gray-200
                  leading-relaxed
                "
              >
                Frontend engineer with 4 years of experience building fast,
                accessible web applications. Focused on design systems,
                performance, and clean component architecture. Currently
                exploring roles with more product ownership.
              </p>

            </div>


            {/* Experience */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-8
                shadow-xl
              "
            >

              <h2
                className="
                  font-bold
                  text-lg sm:text-xl
                  text-(--var-text-second)
                  mb-5 sm:mb-6
                "
              >
                Experience
              </h2>

              <div className="flex flex-col gap-6">

                {experience.map((exp, i) => (

                  <div
                    key={i}
                    className="
                      flex
                      gap-4
                      pb-6
                      border-b
                      border-(--color-navbar-hover)
                      last:border-0
                      last:pb-0
                    "
                  >

                    {/* Company Icon */}
                    <div
                      className="
                        w-11 h-11
                        sm:w-12 sm:h-12
                        rounded-lg
                        bg-gray-800
                        border border-(--color-navbar-hover)
                        shrink-0
                      "
                    />

                    <div className="min-w-0">

                      <h3
                        className="
                          font-bold
                          text-base sm:text-lg
                          text-gray-200
                        "
                      >
                        {exp.role}
                      </h3>

                      <p
                        className="
                          font-semibold
                          text-sm
                          text-gray-400
                        "
                      >
                        {exp.company} · {exp.duration}
                      </p>

                      <p
                        className="
                          font-semibold
                          text-sm
                          text-gray-400
                          mt-2
                          leading-relaxed
                        "
                      >
                        {exp.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Education */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-8
                shadow-xl
              "
            >

              <h2
                className="
                  font-bold
                  text-lg sm:text-xl
                  text-(--var-text-second)
                  mb-5 sm:mb-6
                "
              >
                Education
              </h2>

              <div className="flex flex-col gap-4">

                {education.map((edu, i) => (

                  <div
                    key={i}
                    className="flex gap-4"
                  >

                    <div
                      className="
                        w-11 h-11
                        sm:w-12 sm:h-12
                        rounded-lg
                        bg-gray-800
                        border border-(--color-navbar-hover)
                        shrink-0
                      "
                    />

                    <div>

                      <h3
                        className="
                          font-bold
                          text-base sm:text-lg
                          text-gray-200
                        "
                      >
                        {edu.degree}
                      </h3>

                      <p
                        className="
                          font-semibold
                          text-sm
                          text-gray-400
                        "
                      >
                        {edu.school} · {edu.duration}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* Right Column */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Skills */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-6
                shadow-xl
              "
            >

              <h2
                className="
                  font-bold
                  text-lg
                  text-(--var-text-second)
                  mb-4
                "
              >
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">

                {skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      text-xs sm:text-sm
                      font-semibold
                      px-3 py-1.5
                      rounded-full
                      bg-gray-800
                      border border-(--color-navbar-hover)
                      text-gray-200
                      transition-colors
                      duration-200
                      hover:bg-gray-700
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* Resume */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-6
                shadow-xl
              "
            >

              <h2
                className="
                  font-bold
                  text-lg
                  text-(--var-text-second)
                  mb-4
                "
              >
                Resume
              </h2>

              <div
                className="
                  border
                  border-dashed
                  border-(--color-navbar-hover)
                  rounded-lg
                  p-5 sm:p-6
                  flex
                  flex-col
                  items-center
                  gap-3
                  text-center
                "
              >

                <p
                  className="
                    font-semibold
                    text-sm sm:text-base
                    text-gray-200
                    break-all
                  "
                >
                  ananya_rao_resume.pdf
                </p>

                <p
                  className="
                    text-xs sm:text-sm
                    font-semibold
                    text-gray-400
                  "
                >
                  Uploaded 3 weeks ago
                </p>

                <button
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                    cursor-pointer
                    bg-gray-800
                    border border-(--color-navbar-hover)
                    rounded-full
                    px-4
                    py-1.5
                    hover:bg-gray-700
                    transition-all
                    duration-200
                  "
                >
                  Replace file
                </button>

              </div>

            </div>


            {/* Contact */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-6
                shadow-xl
              "
            >

              <h2
                className="
                  font-bold
                  text-lg
                  text-(--var-text-second)
                  mb-4
                "
              >
                Contact
              </h2>

              <div className="flex flex-col gap-3">

                <p
                  className="
                    font-semibold
                    text-sm sm:text-base
                    text-gray-200
                    break-all
                  "
                >
                  ananya.rao@email.com
                </p>

                <p
                  className="
                    font-semibold
                    text-sm sm:text-base
                    text-gray-200
                  "
                >
                  +91 98765 43210
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CandidateProfile