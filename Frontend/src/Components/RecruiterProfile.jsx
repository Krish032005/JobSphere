import React from 'react'

const openJobs = [
  {
    title: 'Senior Frontend Engineer',
    applicants: 24,
    status: 'Active',
  },
  {
    title: 'Backend Engineer (Node)',
    applicants: 12,
    status: 'Active',
  },
  {
    title: 'QA Engineer',
    applicants: 8,
    status: 'Closed',
  },
]

const RecruiterProfile = () => {
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

          {/* Company Info */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Company Logo */}
            <div
              className="
                w-18 h-18
                sm:w-24 sm:h-24
                rounded-lg
                bg-(--var-text-second)
                border border-(--color-navbar-hover)
                flex items-center justify-center
                font-bold
                text-xl sm:text-2xl
                text-white
                shrink-0
              "
            >
              FW
            </div>

            <div>

              <h1
                className="
                  font-bold
                  text-xl sm:text-2xl
                  text-gray-200
                "
              >
                Fernway
              </h1>

              <p
                className="
                  font-semibold
                  text-sm sm:text-base
                  text-gray-400
                  mt-1
                "
              >
                Software · 200–500 employees · Mumbai, IN
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
                    bg-(--var-text-second)
                    text-white
                  "
                >
                  Hiring
                </span>

                <span
                  className="
                    text-xs sm:text-sm
                    font-semibold
                    text-gray-400
                  "
                >
                  fernway.com
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
            Edit company profile
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
                About the company
              </h2>

              <p
                className="
                  font-semibold
                  text-sm sm:text-base
                  text-gray-200
                  leading-relaxed
                "
              >
                Fernway builds infrastructure tooling for backend teams.
                We're a remote-first company with hubs in Mumbai and Bengaluru,
                focused on developer experience and reliability at scale.
              </p>

            </div>


            {/* Job Postings */}
            <div
              className="
                bg-(--var-company)
                border border-(--color-navbar-hover)
                rounded-xl
                p-5 sm:p-8
                shadow-xl
              "
            >

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-between
                  items-start
                  sm:items-center
                  gap-3
                  mb-5 sm:mb-6
                "
              >

                <h2
                  className="
                    font-bold
                    text-lg sm:text-xl
                    text-(--var-text-second)
                  "
                >
                  Job postings
                </h2>

                <button
                  className="
                    font-semibold
                    text-sm
                    text-(--var-text-second)
                    cursor-pointer
                    hover:opacity-80
                    transition-opacity
                    duration-200
                  "
                >
                  Post a new job
                </button>

              </div>


              <div className="flex flex-col gap-4">

                {openJobs.map((job, i) => (

                  <div
                    key={i}
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      justify-between
                      items-start
                      sm:items-center
                      gap-4

                      py-4

                      border-b
                      border-(--color-navbar-hover)

                      last:border-0
                      last:pb-0
                    "
                  >

                    <div className="min-w-0">

                      <h3
                        className="
                          font-bold
                          text-base sm:text-lg
                          text-gray-200
                        "
                      >
                        {job.title}
                      </h3>

                      <p
                        className="
                          font-semibold
                          text-sm
                          text-gray-400
                          mt-1
                        "
                      >
                        {job.applicants} applicants
                      </p>

                    </div>


                    <span
                      className={`
                        text-xs sm:text-sm
                        font-semibold
                        px-3
                        py-1
                        rounded-full
                        whitespace-nowrap

                        ${
                          job.status === 'Active'
                            ? 'bg-(--var-text-second)/10 text-(--var-text-second) border border-(--var-text-second)/20'
                            : 'bg-gray-800 text-gray-400 border border-(--color-navbar-hover)'
                        }
                      `}
                    >
                      {job.status}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* Right Column */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Overview */}
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
                Overview
              </h2>

              <div className="flex flex-col gap-4">

                <div className="flex justify-between gap-4">

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-400
                    "
                  >
                    Founded
                  </span>

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-200
                    "
                  >
                    2018
                  </span>

                </div>


                <div className="flex justify-between gap-4">

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-400
                    "
                  >
                    Industry
                  </span>

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-200
                    "
                  >
                    Software
                  </span>

                </div>


                <div className="flex justify-between gap-4">

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-400
                    "
                  >
                    Company size
                  </span>

                  <span
                    className="
                      font-semibold
                      text-sm
                      text-gray-200
                    "
                  >
                    200–500
                  </span>

                </div>

              </div>

            </div>


            {/* Company Logo */}
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
                Company logo
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

                <div
                  className="
                    w-16 h-16
                    rounded-lg
                    bg-(--var-text-second)
                  "
                />

                <button
                  className="
                    font-semibold
                    text-sm
                    text-(--var-text-second)
                    cursor-pointer
                    hover:opacity-80
                    transition-opacity
                    duration-200
                  "
                >
                  Replace logo
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
                    text-gray-400
                    break-all
                  "
                >
                  hiring@fernway.com
                </p>

                <p
                  className="
                    font-semibold
                    text-sm sm:text-base
                    text-gray-400
                  "
                >
                  +91 22 4567 8900
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default RecruiterProfile