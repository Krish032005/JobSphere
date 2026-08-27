import React from 'react'

const filters = {
  'Job type': ['Full-time', 'Part-time', 'Contract', 'Internship'],
  Experience: ['Entry level', 'Mid level', 'Senior', 'Lead'],
  Location: ['Remote', 'Mumbai', 'Bengaluru', 'Pune'],
}

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Nimbus Labs',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹28L – ₹35L',
    posted: '2 days ago',
  },
  {
    title: 'Backend Engineer (Node)',
    company: 'Fernway',
    location: 'Remote',
    type: 'Contract',
    salary: '₹18L – ₹22L',
    posted: '3 days ago',
  },
  {
    title: 'Product Designer',
    company: 'Kite & Co',
    location: 'Bengaluru, IN',
    type: 'Full-time',
    salary: '₹20L – ₹26L',
    posted: '5 days ago',
  },
  {
    title: 'DevOps Engineer',
    company: 'Solace Systems',
    location: 'Mumbai, IN',
    type: 'Full-time',
    salary: '₹24L – ₹30L',
    posted: '1 week ago',
  },
  {
    title: 'Data Analyst',
    company: 'Loopline',
    location: 'Remote',
    type: 'Part-time',
    salary: '₹12L – ₹15L',
    posted: '1 week ago',
  },
]

const SearchJobs = () => {
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

        {/* Search Bar */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            gap-3 sm:gap-4
          "
        >

          {/* Job Search */}
          <input
            type="text"
            placeholder="Job title, skill, or company"
            className="
              flex-1
              border border-(--color-navbar-hover)
              bg-(--var-company)
              rounded-lg
              px-4
              py-3
              text-gray-200
              placeholder:text-gray-500
              font-semibold
              focus:outline-none
              focus:border-(--var-text-second)
              transition-colors
              duration-200
            "
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            className="
              w-full
              sm:w-56
              lg:w-64
              border border-(--color-navbar-hover)
              bg-(--var-company)
              rounded-lg
              px-4
              py-3
              text-gray-200
              placeholder:text-gray-500
              font-semibold
              focus:outline-none
              focus:border-(--var-text-second)
              transition-colors
              duration-200
            "
          />

          {/* Search Button */}
          <button
            className="
              w-full
              sm:w-auto
              font-semibold
              text-sm sm:text-base
              bg-(--var-text-second)
              text-white
              rounded-lg
              px-6 sm:px-8
              py-3
              cursor-pointer
              hover:bg-(--var-demo)
              active:scale-[0.98]
              transition-all
              duration-200
            "
          >
            Search
          </button>

        </div>


        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Filters */}
          <div className="lg:col-span-1">

            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-6
                shadow-xl
              "
            >

              {Object.entries(filters).map(([group, options], i) => (

                <div
                  key={group}
                  className={
                    i !== 0
                      ? 'mt-6 pt-6 border-t border-(--color-navbar-hover)'
                      : ''
                  }
                >

                  <h3
                    className="
                      font-bold
                      text-base sm:text-lg
                      text-(--var-text-second)
                      mb-4
                    "
                  >
                    {group}
                  </h3>

                  <div className="flex flex-col gap-3">

                    {options.map((opt) => (

                      <label
                        key={opt}
                        className="
                          flex
                          items-center
                          gap-3
                          cursor-pointer
                          group
                        "
                      >

                        <input
                          type="checkbox"
                          className="
                            w-4
                            h-4
                            accent-(--var-text-second)
                            cursor-pointer
                          "
                        />

                        <span
                          className="
                            font-semibold
                            text-sm
                            text-gray-400
                            group-hover:text-gray-200
                            transition-colors
                            duration-200
                          "
                        >
                          {opt}
                        </span>

                      </label>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Results */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">

            {/* Results Header */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                items-start
                sm:items-center
                gap-3
              "
            >

              <p
                className="
                  font-semibold
                  text-sm sm:text-base
                  text-gray-400
                "
              >
                {jobs.length} jobs found
              </p>

              <select
                className="
                  w-full
                  sm:w-auto
                  border border-(--color-navbar-hover)
                  bg-(--var-company)
                  rounded-lg
                  px-4
                  py-2
                  font-semibold
                  text-sm
                  text-gray-200
                  cursor-pointer
                  focus:outline-none
                  focus:border-(--var-text-second)
                "
              >
                <option>Most relevant</option>
                <option>Newest</option>
                <option>Highest salary</option>
              </select>

            </div>


            {/* Job Cards */}
            {jobs.map((job, i) => (

              <div
                key={i}
                className="
                  bg-(--var-company)
                  border border-(--color-navbar-hover)
                  rounded-xl
                  p-5 sm:p-6
                  shadow-xl

                  flex
                  flex-col
                  sm:flex-row
                  justify-between
                  items-start
                  sm:items-center
                  gap-5 sm:gap-6

                  cursor-pointer

                  hover:border-(--var-text-second)
                  hover:-translate-y-0.5

                  transition-all
                  duration-200
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

                      <span
                        className="
                          text-xs sm:text-sm
                          font-semibold
                          text-gray-400
                        "
                      >
                        {job.posted}
                      </span>

                    </div>

                  </div>

                </div>


                {/* Salary + Save */}
                <div
                  className="
                    w-full
                    sm:w-auto
                    flex
                    flex-row
                    sm:flex-col
                    items-center
                    sm:items-end
                    justify-between
                    gap-3
                  "
                >

                  <p
                    className="
                      font-bold
                      text-sm sm:text-base
                      text-gray-200
                      whitespace-nowrap
                    "
                  >
                    {job.salary}
                  </p>

                  <button
                    className="
                      font-semibold
                      text-sm
                      text-gray-200
                      bg-gray-800
                      border border-(--color-navbar-hover)
                      rounded-lg
                      px-5
                      py-2
                      cursor-pointer

                      hover:bg-gray-700
                      hover:border-(--var-text-second)
                      active:scale-[0.98]

                      transition-all
                      duration-200
                    "
                  >
                    Save
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  )
}

export default SearchJobs