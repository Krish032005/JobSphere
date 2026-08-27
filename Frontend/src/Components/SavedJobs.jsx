import React from 'react'

const savedJobs = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Nimbus Labs',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹28L – ₹35L',
    savedOn: 'Saved 2 days ago',
  },
  {
    title: 'Product Designer',
    company: 'Kite & Co',
    location: 'Bengaluru, IN',
    type: 'Full-time',
    salary: '₹20L – ₹26L',
    savedOn: 'Saved 4 days ago',
  },
  {
    title: 'Data Analyst',
    company: 'Loopline',
    location: 'Remote',
    type: 'Part-time',
    salary: '₹12L – ₹15L',
    savedOn: 'Saved 1 week ago',
  },
]

const SavedJobs = () => {
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
            Saved jobs
          </h1>

          <p
            className="
              font-semibold
              text-sm sm:text-base
              text-gray-400
              mt-2
            "
          >
            {savedJobs.length} jobs you've bookmarked
          </p>
        </div>


        {/* Saved Jobs */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {savedJobs.map((job, i) => (

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
                lg:flex-row
                justify-between
                items-start
                lg:items-center
                gap-6

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
                    {job.company} · {job.location}
                  </p>

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2 sm:gap-3
                      mt-3
                    "
                  >

                    {/* Job Type */}
                    <span
                      className="
                        text-xs sm:text-sm
                        font-semibold
                        px-3 py-1
                        rounded-full
                        bg-gray-800
                        border border-(--color-navbar-hover)
                        text-gray-200
                      "
                    >
                      {job.type}
                    </span>

                    {/* Saved Date */}
                    <span
                      className="
                        text-xs sm:text-sm
                        font-semibold
                        text-gray-400
                      "
                    >
                      {job.savedOn}
                    </span>

                  </div>

                </div>

              </div>


              {/* Actions */}
              <div
                className="
                  w-full
                  lg:w-auto
                  flex
                  flex-col
                  sm:flex-row
                  lg:items-center
                  gap-3
                "
              >

                {/* Salary */}
                <p
                  className="
                    font-bold
                    text-base sm:text-lg
                    text-gray-200
                    lg:mr-3
                  "
                >
                  {job.salary}
                </p>


                {/* Apply */}
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
                  Apply
                </button>


                {/* Remove */}
                <button
                  className="
                    w-full sm:w-auto
                    font-semibold
                    text-sm
                    text-gray-200
                    bg-gray-800
                    border border-(--color-navbar-hover)
                    rounded-lg
                    px-5
                    py-2.5
                    cursor-pointer

                    hover:bg-gray-700
                    active:scale-[0.98]

                    transition-all
                    duration-200
                  "
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default SavedJobs