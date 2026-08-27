import React from "react";

const CenterContent = () => {

  const Banner = ({ title, time }) => {
    return (
      <div
        className="
          flex items-center gap-4
          bg-(--var-bg)
          border border-gray-400
          rounded-full
          px-4 py-1
          font-semibold
          shadow-lg
        "
      >
        <div className="animate-pulse bg-cyan-600 rounded-full w-3 h-3"></div>

        <p className="text-(--color-text)">
          {title}
          <span className="text-(--var-text-muted)">
            {" "}{time}
          </span>
        </p>
      </div>
    );
  };


  const Card = ({ head, tag, span, para, btn }) => {
    return (
      <div className="relative ">

        <h1
          className="
            text-(--var-demo)
            uppercase
            tracking-[2px]
            text-sm sm:text-base lg:text-xl
            font-semibold
          "
        >
          {head}
        </h1>

        <h1
          className="
            text-3xl sm:text-4xl lg:text-[40px]
            font-semibold
            leading-tight lg:leading-15
            mt-2
          "
        >
          {tag}

          <span className="text-(--var-demo) font-normal">
            <i> {span}</i>
          </span>
        </h1>

        <p
          className="
            text-gray-300
            text-base sm:text-lg
            w-full lg:w-[82%]
            mt-3
          "
        >
          {para}
        </p>

        <button
          className="
            mt-6 lg:mt-8
            bg-(--var-secondary-btn)
            px-6 sm:px-7
            py-2.5 sm:py-3
            rounded-full
            text-base sm:text-xl
            font-semibold
            cursor-pointer
            active:scale-95
            transition-transform
            shadow-[0_0_10px_rgba(255,255,255,0.25)]
          "
        >
          {btn}
        </button>

      </div>
    );
  };


  return (
    <div
      className="
        w-full
        relative
        px-5 sm:px-8 lg:px-10
        py-12 sm:py-16
        overflow-hidden
        page-bg
        bg-(--var-bg)
        flex flex-col
        items-center
      "
    >

      {/* HERO HEADING */}

      <div
        className="
          text-center
          font-semibold
          text-4xl
          sm:text-6xl
          lg:text-8xl
          leading-tight
        "
      >
        <h1 className="text-(--color-text)">
          Where great companies
        </h1>

        <p className="text-(--var-text-second) font-normal">
          <i>meet great people</i>
        </p>
      </div>


      {/* BANNERS */}

      <div className="absolute left-20 top-50 rotate-2 hidden lg:block">
        <Banner
          title="interview booked"
          time=". just now"
        />
      </div>

      <div className="absolute right-20 top-50 rotate-2 hidden lg:block">
        <Banner
          title="Chime"
          time=" +38 applicants"
        />
      </div>

      <div className="absolute right-30 top-65 -rotate-2 hidden lg:block">
        <Banner
          title="3+ Replies"
          time=". this morning"
        />
      </div>


      {/* DESCRIPTION */}

      <div
        className="
          text-center
          mt-8 sm:mt-10
          font-normal
          text-base
          sm:text-xl
          lg:text-2xl
          text-(--var-text-muted)
          max-w-3xl
        "
      >
        <p>
          The AI recruiting platform for the startups.
        </p>

        <p>
          Post jobs free, deploy AI sourcing agents,
          <span className="hidden sm:inline"> or hire with a dedicated recruiter.</span>
        </p>

        <p className="sm:hidden">
          or hire with a dedicated recruiter.
        </p>
      </div>


      {/* TWO CARDS */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-5
          w-full
          max-w-7xl
          mt-10 sm:mt-12
          px-0
          lg:px-10
        "
      >

        {/* COMPANY CARD */}

        <div
          className="
            w-full
            min-h-[330px]
            sm:min-h-[350px]
            lg:h-80
            p-6
            sm:p-8
            lg:p-10
            rounded-3xl
            lg:rounded-4xl
            bg-(--color-bg)
            relative
            overflow-hidden
          "
        >

          <div
            className="
              bg-(--var-text-second)
              rounded-full
              w-40
              h-10
              absolute
              blur-[90px]
              right-0
              top-0
            "
          />

          <Card
            head="For Companies"
            tag="Find your"
            span="next hire"
            para="Post Jobs for free, deploy AI sourcing agents, or hand it to an autopilot recruiter."
            btn="Start hiring"
          />

        </div>


        {/* CANDIDATE CARD */}

        <div
          className="
            w-full
            min-h-[330px]
            sm:min-h-[350px]
            lg:h-80
            p-6
            sm:p-8
            lg:p-10
            rounded-3xl
            lg:rounded-4xl
            bg-(--var-bg)
            relative
            overflow-hidden
            border
            border-(--var-text-second)/20
          "
        >

          <div
            className="
              bg-(--var-text-second)
              rounded-full
              w-full
              h-10
              absolute
              blur-[110px]
              left-0
              top-0
            "
          />

          <div className="relative ">

            <h1
              className="
                text-(--var-secondary-btn)
                font-semibold
                uppercase
                tracking-[2px]
                text-sm
                sm:text-base
                lg:text-xl
              "
            >
              For Candidates
            </h1>

            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-[40px]
                font-bold
                leading-tight
                lg:leading-15
                text-(--color-text)
                mt-2
              "
            >
              Find your

              <span className="text-(--var-text-second) font-semibold">
                <i> next job</i>
              </span>
            </h1>

            <p
              className="
                text-gray-700
                text-base
                sm:text-lg
                w-full
                lg:w-[82%]
                mt-3
              "
            >
              Apply directly to founders and hiring managers at
              27,000+ startups building what's next.
            </p>

            <button
              className="
                mt-6
                lg:mt-8
                bg-(--var-secondary-btn)
                px-6
                sm:px-7
                py-2.5
                sm:py-3
                rounded-full
                text-base
                sm:text-xl
                font-semibold
                cursor-pointer
                border
                border-(--var-demo)
                shadow-[0_0_20px_rgba(255,255,255,0.25)]
                active:scale-95
                transition-transform
              "
            >
              Browse jobs
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CenterContent;