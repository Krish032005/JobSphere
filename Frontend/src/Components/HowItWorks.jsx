import React from "react";

const HowItWorks = () => {
  const Company = ({
    span,
    title,
    para,
    border,
    margin,
    text,
    para_text,
    border_color,
  }) => {
    return (
      <div
        className={`${border} ${border_color} pb-6 sm:pb-8 ${margin} flex flex-col gap-2`}
      >
        <span className="text-(--var-demo) font-semibold text-base sm:text-lg">
          {span}
        </span>

        <h1 className={`text-xl sm:text-2xl font-bold ${text}`}>
          {title}
        </h1>

        <p className={`${para_text} text-base sm:text-xl`}>
          {para}
        </p>
      </div>
    );
  };

  const LeftCard = ({
    pink,
    head,
    span,
    para,
    btn,
    text,
    para_text,
  }) => {
    return (
      <div className="w-full">
        <h1
          className="text-(--var-demo) mb-4 sm:mb-5
          tracking-[1px] font-semibold text-xl sm:text-2xl uppercase"
        >
          {pink}
        </h1>

        <h1
          className={`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight ${text}`}
        >
          {head}
          <span className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-(--var-demo)">
            <i>{span}</i>
          </span>
        </h1>

        <p
          className={`${para_text} text-base sm:text-lg lg:text-xl font-normal w-full sm:w-[90%] mt-4 sm:mt-5`}
        >
          {para}
        </p>

        <button
          className="
            mt-6 lg:mt-8
            px-5 sm:px-7
            py-2.5 sm:py-3
            bg-(--var-secondary-btn)
            rounded-full
            text-base sm:text-xl
            font-semibold
            cursor-pointer
            active:scale-95
            shadow-[0_0_20px_rgba(255,255,255,0.25)]
            transition-transform
          "
        >
          {btn}
        </button>
      </div>
    );
  };

  return (
    <>
      {/* ================= COMPANY ================= */}
      <div
        className="
          w-full
          px-5 sm:px-8 md:px-12 lg:px-20
          py-12 sm:py-16
          bg-(--var-company)
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-10
        "
      >
        {/* Left Company Content */}
        <LeftCard
          pink="For Companies"
          head="Build the team that "
          span="defines what's next"
          para="The team you hire is the company you become. Wellfound is where startup people come to be found, and where AI finds the ones who fit your roles."
          btn="Find your next hire"
          para_text="text-gray-300"
        />

        {/* Right Company Content */}
        <div className="w-full px-0 sm:px-3 md:px-6">
          <Company
            span="01 JobSphere Jobs"
            title="Post once. Reach startup talent."
            para="Post free and get in front of 10M candidates who joined Wellfound because they want startup opportunities."
            border="border-b"
            margin="mb-6 sm:mb-8"
            para_text="text-gray-300"
            border_color="border-gray-100/30"
          />

          <Company
            span="02 JobSphere Reach"
            title="Find the candidates other searches miss."
            para="Search 500M+ profiles, uncover adjacent experience, and run personalized outreach from your inbox."
            border="border-b"
            margin="mb-6 sm:mb-8"
            para_text="text-gray-300"
            border_color="border-gray-100/30"
          />

          <Company
            span="03 JobSphere Autopilot"
            title="Hire faster with hands-on support."
            para="Get a dedicated recruiter who sources, pitches, and schedules qualified candidates onto your calendar."
            para_text="text-gray-300"
            border_color="border-gray-100/30"
          />
        </div>
      </div>

      {/* ================= CANDIDATES ================= */}
      <div
        className="
          w-full
          px-5 sm:px-8 md:px-12 lg:px-20
          py-12 sm:py-16
          bg-(--var-bg)
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-10
        "
      >
        {/* Left Candidate Content */}
        <LeftCard
          pink="For candidates"
          head="Find work "
          span="that matters."
          para="Find the next company that's going to change the world, and the role that changes yours."
          btn="Sign up for free"
          text="text-(--var-company)"
          para_text="text-(--var-text-muted)"
        />

        {/* Right Candidate Content */}
        <div className="w-full px-0 sm:px-3 md:px-6">
          <Company
            span="01"
            title="Dream roles at the companies building what's next."
            para="High-growth teams in AI, infra, robotics, fintech, and frontier categories."
            border="border-b"
            margin="mb-6 sm:mb-8"
            text="text-(--var-company)"
            para_text="text-(--var-text-muted)"
            border_color="border-gray-300"
          />

          <Company
            span="02"
            title="Companies come find you."
            para="AI sourcing surfaces you to recruiters, so the right roles reach you even when you're not looking."
            border="border-b"
            margin="mb-6 sm:mb-8"
            text="text-(--var-company)"
            para_text="text-(--var-text-muted)"
            border_color="border-gray-300"
          />

          <Company
            span="03"
            title="Show what you can do, not just where you've been."
            para="Your profile goes past the résumé: projects, work, and what you'd actually contribute."
            text="text-(--var-company)"
            para_text="text-(--var-text-muted)"
          />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;