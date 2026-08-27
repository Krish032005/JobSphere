import React from "react";

const CTA = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[420px]
        overflow-hidden
        bg-[#031417]
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        py-16
      "
    >
      {/* Pink radial glow */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[260px]
          pointer-events-none
          bg-[radial-gradient(ellipse_at_center_bottom,rgba(230,30,115,0.32)_0%,rgba(150,25,90,0.16)_35%,transparent_70%)]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          
          flex
          flex-col
          items-center
          text-center
          w-full
          max-w-5xl
        "
      >
        {/* Heading */}
        <h1
          className="
            text-white
            font-bold
            tracking-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            leading-tight
          "
        >
          What's{" "}
          <span
            className="
              text-(--var-demo)
              font-normal
              italic
            "
          >
            your next move?
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-4
            text-gray-400
            text-base
            sm:text-lg
            font-normal
          "
        >
          The right job, or the right hire. Both start here.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          {/* Primary */}
          <button
            className="
              px-6
              sm:px-7
              py-3
              rounded-full
              bg-[#e51b70]
              text-white
              text-base
              sm:text-lg
              font-semibold
              border
              border-[#f02b7d]
              shadow-[0_8px_25px_rgba(229,27,112,0.35)]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(229,27,112,0.45)]
              active:scale-95
              cursor-pointer
            "
          >
            Sign up to find a job →
          </button>

          {/* Secondary */}
          <button
            className="
              px-7
              sm:px-8
              py-3
              rounded-full
              bg-transparent
              text-white
              text-base
              sm:text-lg
              font-semibold
              border
              border-gray-500
              transition-all
              duration-200
              hover:bg-white/5
              hover:border-gray-300
              active:scale-95
              cursor-pointer
            "
          >
            Start hiring
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;