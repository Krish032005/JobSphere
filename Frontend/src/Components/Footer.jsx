import React from "react";

const footerLinks = {
  Candidates: ["Browse jobs", "Career advice", "Resume tips"],
  Recruiters: ["Post a job", "Pricing", "Browse candidates"],
  Company: ["About", "Blog", "Contact"],
};

const Footer = () => {
  return (
    <footer
      className="
        w-full
        px-5 sm:px-8 md:px-12 lg:px-20
        py-12 sm:py-14 lg:py-16
        bg-[#031417]
        border-t border-white/10
        text-white
      "
    >
      {/* Main Footer */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:justify-between
          gap-10 lg:gap-16
          mb-10 sm:mb-12
        "
      >
        {/* Brand */}
        <div className="max-w-sm">
          <h1
            className="
              font-bold
              text-2xl sm:text-3xl
              mb-3
              text-white
            "
          >
            JobSphere
          </h1>

          <p
            className="
              font-medium
              text-gray-400
              text-sm sm:text-base
              leading-relaxed
            "
          >
            Connecting candidates and recruiters in one place.
          </p>
        </div>

        {/* Links */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-x-8
            gap-y-8
            sm:gap-x-12
            lg:gap-x-16
          "
        >
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div
              key={heading}
              className="flex flex-col gap-3"
            >
              <h3
                className="
                  font-bold
                  text-base sm:text-lg
                  mb-1
                  text-[#e51b70]
                "
              >
                {heading}
              </h3>

              {links.map((link) => (
                <span
                  key={link}
                  className="
                    font-medium
                    text-sm sm:text-base
                    text-gray-400
                    cursor-pointer
                    w-fit
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {link}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-between
          items-start
          sm:items-center
          gap-5
          pt-6
          border-t border-white/10
        "
      >
        <p
          className="
            font-medium
            text-sm
            text-gray-500
          "
        >
          © 2026 JobSphere. All rights reserved.
        </p>

        <div
          className="
            flex
            flex-wrap
            gap-5 sm:gap-6
          "
        >
          {["Twitter", "LinkedIn", "GitHub"].map((social) => (
            <span
              key={social}
              className="
                font-medium
                text-sm sm:text-base
                text-gray-400
                cursor-pointer
                transition-colors
                duration-300
                hover:text-[#e51b70]
              "
            >
              {social}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;