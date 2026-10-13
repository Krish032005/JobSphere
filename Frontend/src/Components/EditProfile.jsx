import React, { useState } from "react";
import API from "../API";

const EditProfile = ({
  candidate,
  onClose,
  onProfileUpdated,
}) => {

  const [Name, setName] = useState(candidate?.user?.name || "");
  const [Email, setEmail] = useState(candidate?.user?.email || "");
  const [Phone, setPhone] = useState(candidate?.phone || "");
  const [Location, setLocation] = useState(candidate?.location || "");
  const [About, setAbout] = useState(candidate?.bio || "");

  const [Skills, setSkills] = useState(
    candidate?.skills?.join(", ") || ""
  );

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const updatedData = {
        phone: Phone,
        location: Location,
        bio: About,

        skills: Skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      };

      const response = await API.put(
        "/candidate/profile",
        updatedData
      );

      console.log(response.data);

      if (response.data.success) {

        // Send updated candidate back to parent
        onProfileUpdated(response.data.candidate);

        // Close popup
        onClose();
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/70
        backdrop-blur-sm
        flex items-center justify-center
        px-4
        py-6
      "
    >

      <div
        className="
          w-full
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto

          bg-(--var-company)
          border border-(--color-navbar-hover)
          rounded-xl

          p-5 sm:p-8

          shadow-2xl
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2
              className="
                text-xl sm:text-2xl
                font-bold
                text-white
              "
            >
              Edit Profile
            </h2>

            <p
              className="
                text-sm
                font-semibold
                text-gray-400
                mt-1
              "
            >
              Update your profile information
            </p>
          </div>


          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="
              w-9 h-9
              rounded-full
              bg-gray-800
              border border-(--color-navbar-hover)
              text-gray-300
              hover:bg-gray-700
              hover:text-white
              transition-all
              cursor-pointer
            "
          >
            ✕
          </button>

        </div>


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

         
          


         


          {/* Phone + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-300
                  mb-2
                "
              >
                Phone
              </label>

              <input
                type="text"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                className="
                  w-full
                  bg-gray-800
                  border border-(--color-navbar-hover)
                  rounded-lg
                  px-4 py-3
                  text-white
                  outline-none
                  focus:border-(--var-text-second)
                "
              />
            </div>


            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-300
                  mb-2
                "
              >
                Location
              </label>

              <input
                type="text"
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
                className="
                  w-full
                  bg-gray-800
                  border border-(--color-navbar-hover)
                  rounded-lg
                  px-4 py-3
                  text-white
                  outline-none
                  focus:border-(--var-text-second)
                "
              />
            </div>

          </div>


          {/* About */}
          <div>
            <label
              className="
                block
                text-sm
                font-semibold
                text-gray-300
                mb-2
              "
            >
              About
            </label>

            <textarea
              value={About}
              onChange={(e) => setAbout(e.target.value)}
              rows="5"
              className="
                w-full
                bg-gray-800
                border border-(--color-navbar-hover)
                rounded-lg
                px-4 py-3
                text-white
                outline-none
                resize-none
                focus:border-(--var-text-second)
              "
              placeholder="Tell recruiters about yourself..."
            />
          </div>


          {/* Skills */}
          <div>
            <label
              className="
                block
                text-sm
                font-semibold
                text-gray-300
                mb-2
              "
            >
              Skills
            </label>

            <input
              type="text"
              value={Skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Node.js, MongoDB, Express"
              className="
                w-full
                bg-gray-800
                border border-(--color-navbar-hover)
                rounded-lg
                px-4 py-3
                text-white
                outline-none
                focus:border-(--var-text-second)
              "
            />

            <p className="text-xs text-gray-500 mt-1">
              Separate skills using commas.
            </p>
          </div>


          {/* Buttons */}
          <div
            className="
              flex
              flex-col-reverse
              sm:flex-row
              justify-end
              gap-3
              pt-4
              border-t
              border-(--color-navbar-hover)
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
                px-5 py-2.5
                rounded-lg
                bg-gray-800
                border border-(--color-navbar-hover)
                text-gray-200
                font-semibold
                hover:bg-gray-700
                transition-all
                cursor-pointer
              "
            >
              Cancel
            </button>


            <button
              type="submit"
              disabled={loading}
              className="
                px-5 py-2.5
                rounded-lg
                bg-(--var-text-second)
                text-white
                font-semibold
                hover:bg-(--var-demo)
                active:scale-[0.98]
                transition-all
                cursor-pointer
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;

