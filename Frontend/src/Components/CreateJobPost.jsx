import React from 'react'

const skillSuggestions = [
  'React',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'AWS',
]

const CreateJobPost = () => {
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
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8 relative">

        {/* Header */}
        <div>
          <h1
            className="
              font-bold
              text-2xl sm:text-3xl
              text-(--var-text-second)
            "
          >
            Post a new job
          </h1>

          <p
            className="
              font-semibold
              text-sm sm:text-base
              text-gray-400
              mt-2
            "
          >
            Fill in the details candidates will see
          </p>
        </div>


        {/* Form Container */}
        <div
          className="
            bg-(--var-company)
            border border-(--color-navbar-hover)
            rounded-xl
            p-5 sm:p-8
            shadow-xl
            flex flex-col gap-8
          "
        >

          {/* Basic Details */}
          <div className="flex flex-col gap-5">

            <h2
              className="
                font-bold
                text-lg
                text-(--var-text-second)
              "
            >
              Basic details
            </h2>


            {/* Job Title */}
            <div className="flex flex-col gap-2">

              <label
                className="
                  font-semibold
                  text-sm
                  text-gray-200
                "
              >
                Job title
              </label>

              <input
                type="text"
                placeholder="e.g. Senior Frontend Engineer"
                className="
                  border border-(--color-navbar-hover)
                  bg-gray-900/40
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


            {/* Job Type + Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex flex-col gap-2">

                <label
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                  "
                >
                  Job type
                </label>

                <select
                  className="
                    border border-(--color-navbar-hover)
                    bg-gray-900/40
                    rounded-lg
                    px-4
                    py-3
                    text-sm sm:text-base
                    font-semibold
                    text-gray-200
                    cursor-pointer
                    focus:outline-none
                    focus:border-(--var-text-second)
                  "
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>

              </div>


              <div className="flex flex-col gap-2">

                <label
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                  "
                >
                  Experience level
                </label>

                <select
                  className="
                    border border-(--color-navbar-hover)
                    bg-gray-900/40
                    rounded-lg
                    px-4
                    py-3
                    text-sm sm:text-base
                    font-semibold
                    text-gray-200
                    cursor-pointer
                    focus:outline-none
                    focus:border-(--var-text-second)
                  "
                >
                  <option>Entry level</option>
                  <option>Mid level</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>

              </div>

            </div>


            {/* Location + Work Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex flex-col gap-2">

                <label
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                  "
                >
                  Location
                </label>

                <input
                  type="text"
                  placeholder="e.g. Mumbai, IN or Remote"
                  className="
                    border border-(--color-navbar-hover)
                    bg-gray-900/40
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


              <div className="flex flex-col gap-2">

                <label
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                  "
                >
                  Work mode
                </label>

                <select
                  className="
                    border border-(--color-navbar-hover)
                    bg-gray-900/40
                    rounded-lg
                    px-4
                    py-3
                    text-sm sm:text-base
                    font-semibold
                    text-gray-200
                    cursor-pointer
                    focus:outline-none
                    focus:border-(--var-text-second)
                  "
                >
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>

              </div>

            </div>

          </div>


          {/* Compensation */}
          <div
            className="
              flex flex-col gap-5
              pt-8
              border-t
              border-(--color-navbar-hover)
            "
          >

            <h2
              className="
                font-bold
                text-lg
                text-(--var-text-second)
              "
            >
              Compensation
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex flex-col gap-2">

                <label
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                  "
                >
                  Minimum salary (₹/year)
                </label>

                <input
                  type="text"
                  placeholder="e.g. 1800000"
                  className="
                    border border-(--color-navbar-hover)
                    bg-gray-900/40
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


              <div className="flex flex-col gap-2">

                <label
                  className="
                    font-semibold
                    text-sm
                    text-gray-200
                  "
                >
                  Maximum salary (₹/year)
                </label>

                <input
                  type="text"
                  placeholder="e.g. 2600000"
                  className="
                    border border-(--color-navbar-hover)
                    bg-gray-900/40
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

            </div>

          </div>


          {/* Description */}
          <div
            className="
              flex flex-col gap-5
              pt-8
              border-t
              border-(--color-navbar-hover)
            "
          >

            <h2
              className="
                font-bold
                text-lg
                text-(--var-text-second)
              "
            >
              Description
            </h2>


            {/* Job Description */}
            <div className="flex flex-col gap-2">

              <label
                className="
                  font-semibold
                  text-sm
                  text-gray-200
                "
              >
                Job description
              </label>

              <textarea
                rows={5}
                placeholder="Describe the role, responsibilities, and what a typical day looks like..."
                className="
                  border border-(--color-navbar-hover)
                  bg-gray-900/40
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  font-semibold
                  text-gray-200
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-(--var-text-second)
                  resize-none
                  transition-colors
                  duration-200
                "
              />

            </div>


            {/* Requirements */}
            <div className="flex flex-col gap-2">

              <label
                className="
                  font-semibold
                  text-sm
                  text-gray-200
                "
              >
                Requirements
              </label>

              <textarea
                rows={4}
                placeholder="List required qualifications, one per line..."
                className="
                  border border-(--color-navbar-hover)
                  bg-gray-900/40
                  rounded-lg
                  px-4
                  py-3
                  text-sm sm:text-base
                  font-semibold
                  text-gray-200
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-(--var-text-second)
                  resize-none
                  transition-colors
                  duration-200
                "
              />

            </div>

          </div>


          {/* Skills */}
          <div
            className="
              flex flex-col gap-4
              pt-8
              border-t
              border-(--color-navbar-hover)
            "
          >

            <h2
              className="
                font-bold
                text-lg
                text-(--var-text-second)
              "
            >
              Required skills
            </h2>


            <input
              type="text"
              placeholder="Type a skill and press enter"
              className="
                border border-(--color-navbar-hover)
                bg-gray-900/40
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


            <div className="flex flex-wrap gap-2">

              {skillSuggestions.map((skill) => (

                <span
                  key={skill}
                  className="
                    text-xs sm:text-sm
                    font-semibold
                    px-3
                    py-1.5
                    rounded-full

                    bg-gray-800
                    border border-(--color-navbar-hover)
                    text-gray-200

                    flex
                    items-center
                    gap-2

                    cursor-pointer

                    hover:border-(--var-text-second)
                    hover:text-(--var-text-second)

                    transition-all
                    duration-200
                  "
                >
                  {skill}

                  <span className="text-gray-500">
                    ×
                  </span>

                </span>

              ))}

            </div>

          </div>


          {/* Actions */}
          <div
            className="
              flex
              flex-col-reverse
              sm:flex-row
              items-stretch
              sm:items-center
              justify-end
              gap-3 sm:gap-4

              pt-8
              border-t
              border-(--color-navbar-hover)
            "
          >

            <button
              className="
                w-full sm:w-auto
                font-semibold
                text-sm sm:text-base
                text-gray-200
                bg-gray-800
                border border-(--color-navbar-hover)
                rounded-lg
                px-6 sm:px-8
                py-3
                cursor-pointer

                hover:bg-gray-700
                hover:border-(--var-text-second)

                active:scale-[0.98]

                transition-all
                duration-200
              "
            >
              Save as draft
            </button>


            <button
              className="
                w-full sm:w-auto
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
              Publish job
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CreateJobPost