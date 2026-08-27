import React from 'react'

const testimonials = [
  {
    quote: 'Found my current role in under two weeks. The matches were actually relevant.',
    name: 'Ananya R.',
    role: 'Frontend Engineer'
  },
  {
    quote: 'We filled a senior backend seat faster than any job board we\'d tried before.',
    name: 'Karan M.',
    role: 'Hiring Manager, Fernway'
  },
  {
    quote: 'Clean, fast, no clutter. Applied to three roles in one sitting.',
    name: 'Priya S.',
    role: 'Product Designer'
  },
]

const Testimonials = () => {
  return (
    <div
      className="
        w-full
        px-5 sm:px-8 md:px-12 lg:px-20
        py-12 sm:py-14 lg:py-16
        border-t border-gray-300
      "
    >

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2
          className="
            font-bold
            text-2xl sm:text-3xl
            mb-2
            text-(--var-company)
          "
        >
          People are hiring, and getting hired
        </h2>
      </div>

      {/* Testimonials */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 sm:gap-6
          w-full
        "
      >

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              bg-(--var-company)
              
              border border-(--color-border)
              rounded-lg
              p-4 md:p-6
              flex flex-col
              gap- sm:gap-
              text-white
              min-h-[200px]
            "
          >

            {/* Quote */}
            <p
              className="
                font-semibold
                text-base sm:text-lg
                leading-relaxed
              "
            >
              "{t.quote}"
            </p>

            {/* User */}
            <div className="flex items-center gap-3 mt-auto">

              <div
                className="
                  w-10 h-10
                  shrink-0
                  rounded-full
                  bg-(--color-surface-secondary)
                  border border-(--color-border)
                "
              />

              <div className="min-w-0">
                <p className="font-bold text-(--var-demo)">
                  {t.name}
                </p>

                <p className="text-sm font-semibold text-gray-300">
                  {t.role}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonials