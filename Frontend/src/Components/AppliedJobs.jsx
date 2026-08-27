import React from 'react'

const statusStyles = {
  'Under review':
    'bg-gray-800 text-gray-200 border border-(--color-navbar-hover)',

  Shortlisted:
    'bg-(--var-text-second)/10 text-(--var-text-second) border border-(--var-text-second)/20',

  Rejected:
    'bg-red-500/10 text-red-400 border border-red-500/20',

  'Interview scheduled':
    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
}

const appliedJobs = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Nimbus Labs',
    appliedOn: 'Applied 2 days ago',
    status: 'Under review',
  },
  {
    title: 'Backend Engineer (Node)',
    company: 'Fernway',
    appliedOn: 'Applied 5 days ago',
    status: 'Interview scheduled',
  },
  {
    title: 'QA Engineer',
    company: 'Harbor Digital',
    appliedOn: 'Applied 1 week ago',
    status: 'Shortlisted',
  },
  {
    title: 'DevOps Engineer',
    company: 'Solace Systems',
    appliedOn: 'Applied 2 weeks ago',
    status: 'Rejected',
  },
]

const AppliedJobs = () => {
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
      <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8 relative">

        {/* Header */}
        <div>
          <h1
            className="
              font-bold
              text-2xl sm:text-3xl
              text-(--var-text-second)
            "
          >
            Applied jobs
          </h1>

          <p
            className="
              font-semibold
              text-sm sm:text-base
              text-gray-400
              mt-2
            "
          >
            {appliedJobs.length} applications so far
          </p>
        </div>


        {/* Applied Jobs */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {appliedJobs.map((job, i) => (

            <div
              key={i}
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-6 lg:p-7
                shadow-xl

                flex
                flex-col
                sm:flex-row
                justify-between
                items-start
                sm:items-center
                gap-5 sm:gap-6

                transition-all
                duration-200
                hover:-translate-y-0.5
              "
            >

              {/* Job Information */}
              <div className="flex gap-4 sm:gap-5 min-w-0">

                {/* Company Icon */}
                <div
                  className="
                    w-12 h-12
                    sm:w-14 sm:h-14
                    rounded-lg
                    bg-(--var-text-second)
                    border border-(--color-navbar-hover)
                    flex items-center justify-center
                    font-bold
                    text-lg sm:text-xl
                    text-white
                    shrink-0
                  "
                >
                  {job.company.charAt(0)}
                </div>


                {/* Details */}
                <div className="min-w-0">

                  <h3
                    className="
                      font-bold
                      text-base sm:text-lg
                      text-gray-200
                      break-words
                    "
                  >
                    {job.title}
                  </h3>

                  <p
                    className="
                      font-semibold
                      text-sm sm:text-base
                      text-gray-400
                      mt-1
                    "
                  >
                    {job.company}
                  </p>

                  <p
                    className="
                      text-xs sm:text-sm
                      font-semibold
                      text-gray-400
                      mt-2
                    "
                  >
                    {job.appliedOn}
                  </p>

                </div>

              </div>


              {/* Status */}
              <span
                className={`
                  text-xs sm:text-sm
                  font-semibold
                  px-4
                  py-2
                  rounded-full
                  whitespace-nowrap
                  ${statusStyles[job.status]}
                `}
              >
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