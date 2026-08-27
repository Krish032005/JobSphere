import React from 'react'

const jobs = [
  'Senior Frontend Engineer',
  'Backend Engineer (Node)',
  'QA Engineer',
]

const statusStyles = {
  New: 'bg-gray-800 text-gray-200 border border-(--color-navbar-hover)',
  Shortlisted:
    'bg-(--var-text-second)/10 text-(--var-text-second) border border-(--var-text-second)/20',
  Rejected:
    'bg-red-500/10 text-red-400 border border-red-500/20',
  Interviewing:
    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
}

const applicants = [
  {
    name: 'Ananya Rao',
    role: 'Frontend Engineer',
    experience: '4 years',
    appliedOn: 'Applied 2 days ago',
    status: 'New',
  },
  {
    name: 'Rohan Mehta',
    role: 'Frontend Engineer',
    experience: '6 years',
    appliedOn: 'Applied 3 days ago',
    status: 'Shortlisted',
  },
  {
    name: 'Sara Khan',
    role: 'Frontend Developer',
    experience: '2 years',
    appliedOn: 'Applied 4 days ago',
    status: 'Interviewing',
  },
  {
    name: 'Vikram Nair',
    role: 'Frontend Engineer',
    experience: '5 years',
    appliedOn: 'Applied 1 week ago',
    status: 'Rejected',
  },
  {
    name: 'Priya Sen',
    role: 'UI Engineer',
    experience: '3 years',
    appliedOn: 'Applied 1 week ago',
    status: 'New',
  },
]

const Applicants = () => {
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
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 relative">

        {/* Header */}
        <div>
          <h1
            className="
              font-bold
              text-2xl sm:text-3xl
              text-(--var-text-second)
            "
          >
            Applicants
          </h1>

          <p
            className="
              font-semibold
              text-sm sm:text-base
              text-gray-400
              mt-2
            "
          >
            {applicants.length} candidates across your open roles
          </p>
        </div>


        {/* Filters */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            gap-3 sm:gap-4
          "
        >

          <select
            className="
              w-full
              sm:w-auto
              border border-(--color-navbar-hover)
              bg-(--var-company)
              rounded-lg
              px-4
              py-3
              font-semibold
              text-sm
              text-gray-200
              cursor-pointer
              focus:outline-none
              focus:border-(--var-text-second)
            "
          >
            <option>All jobs</option>

            {jobs.map((job) => (
              <option key={job}>{job}</option>
            ))}
          </select>


          <select
            className="
              w-full
              sm:w-auto
              border border-(--color-navbar-hover)
              bg-(--var-company)
              rounded-lg
              px-4
              py-3
              font-semibold
              text-sm
              text-gray-200
              cursor-pointer
              focus:outline-none
              focus:border-(--var-text-second)
            "
          >
            <option>All statuses</option>
            <option>New</option>
            <option>Shortlisted</option>
            <option>Interviewing</option>
            <option>Rejected</option>
          </select>


          <input
            type="text"
            placeholder="Search by name or skill"
            className="
              flex-1
              border border-(--color-navbar-hover)
              bg-(--var-company)
              rounded-lg
              px-4
              py-3
              text-sm sm:text-base
              font-semibold
              text-gray-200
              placeholder:text-gray-500
              focus:outline-none
              focus:border-(--var-text-second)
              transition-colors
              duration-200
            "
          />

        </div>


        {/* Applicant List */}
        <div
          className="
            bg-(--var-company)
            border border-(--color-navbar-hover)
            rounded-xl
            shadow-xl
            overflow-hidden
          "
        >

          {/* Desktop Table Header */}
          <div
            className="
              hidden
              lg:grid
              grid-cols-12
              gap-4
              px-6
              py-4
              bg-gray-900/50
              font-semibold
              text-sm
              text-gray-400
            "
          >
            <div className="col-span-4">
              Candidate
            </div>

            <div className="col-span-2">
              Applied for
            </div>

            <div className="col-span-2">
              Experience
            </div>

            <div className="col-span-2">
              Applied
            </div>

            <div className="col-span-1">
              Status
            </div>

            <div className="col-span-1 text-right">
              Resume
            </div>
          </div>


          {/* Applicants */}
          {applicants.map((a, i) => (

            <div
              key={i}
              className="
                border-t
                border-(--color-navbar-hover)

                px-5 sm:px-6
                py-5

                flex
                flex-col
                gap-4

                lg:grid
                lg:grid-cols-12
                lg:gap-4
                lg:items-center

                cursor-pointer

                hover:bg-gray-900/30

                transition-colors
                duration-200
              "
            >

              {/* Candidate */}
              <div
                className="
                  lg:col-span-4
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    w-11 h-11
                    rounded-full
                    bg-(--var-text-second)
                    border border-(--color-navbar-hover)
                    flex items-center justify-center
                    font-bold
                    text-sm
                    text-white
                    shrink-0
                  "
                >
                  {a.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>


                <div className="min-w-0">

                  <p
                    className="
                      font-bold
                      text-sm sm:text-base
                      text-gray-200
                    "
                  >
                    {a.name}
                  </p>

                  <p
                    className="
                      text-xs sm:text-sm
                      font-semibold
                      text-gray-400
                      mt-0.5
                    "
                  >
                    {a.role}
                  </p>

                </div>

              </div>


              {/* Mobile Details */}
              <div
                className="
                  grid
                  grid-cols-2
                  gap-4

                  lg:contents
                "
              >

                {/* Applied For */}
                <div
                  className="
                    lg:col-span-2
                    flex
                    flex-col
                    gap-1
                  "
                >
                  <span
                    className="
                      lg:hidden
                      text-xs
                      font-semibold
                      text-gray-500
                    "
                  >
                    Applied for
                  </span>

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-400
                    "
                  >
                    Frontend Engineer
                  </span>
                </div>


                {/* Experience */}
                <div
                  className="
                    lg:col-span-2
                    flex
                    flex-col
                    gap-1
                  "
                >
                  <span
                    className="
                      lg:hidden
                      text-xs
                      font-semibold
                      text-gray-500
                    "
                  >
                    Experience
                  </span>

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-400
                    "
                  >
                    {a.experience}
                  </span>
                </div>


                {/* Applied */}
                <div
                  className="
                    lg:col-span-2
                    flex
                    flex-col
                    gap-1
                  "
                >
                  <span
                    className="
                      lg:hidden
                      text-xs
                      font-semibold
                      text-gray-500
                    "
                  >
                    Applied
                  </span>

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-400
                    "
                  >
                    {a.appliedOn}
                  </span>
                </div>


                {/* Status */}
                <div
                  className="
                    lg:col-span-1
                    flex
                    flex-col
                    gap-1
                  "
                >
                  <span
                    className="
                      lg:hidden
                      text-xs
                      font-semibold
                      text-gray-500
                    "
                  >
                    Status
                  </span>

                  <span
                    className={`
                      w-fit
                      text-xs
                      font-semibold
                      px-3
                      py-1
                      rounded-full
                      whitespace-nowrap
                      ${statusStyles[a.status]}
                    `}
                  >
                    {a.status}
                  </span>
                </div>


                {/* Resume */}
                <div
                  className="
                    lg:col-span-1
                    flex
                    flex-col
                    gap-1
                    lg:text-right
                  "
                >
                  <span
                    className="
                      lg:hidden
                      text-xs
                      font-semibold
                      text-gray-500
                    "
                  >
                    Resume
                  </span>

                  <button
                    className="
                      w-fit
                      lg:ml-auto
                      font-semibold
                      text-sm
                      text-(--var-text-second)
                      cursor-pointer

                      hover:opacity-80

                      transition-opacity
                      duration-200
                    "
                  >
                    View
                  </button>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default Applicants