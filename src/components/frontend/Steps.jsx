import React from "react";
import { useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const Steps = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Choose Your Mode",
      image: "/public/images/mode.png",
    },
    {
      title: "Answer the Given Questions",
      image: "/public/images/questions.png",
    },
    {
      title: "Upload Your Report",
      image: "/public/images/uploadRepo.png",
    },
    {
      title: "Check or Edit Your Report",
      image: "/public/images/edit.png",
    },
    {
      title: "Read Privacy And Policy",
      image: "/public/images/concerns.png",
    },
    {
      title: "Send Your Report",
      image: "/public/images/send.png",
    },
  ];

  function handleMode() {
    navigate("/selectDomain");
  }

  return (
    <div className="relative w-full bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#005f73]">
            Simple & Easy
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-800 md:text-4xl">
            How CareTech Works
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Follow these simple steps to create and share your medical report
            with ease.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#eaf7f7]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Step Number */}
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#005f73] text-lg font-bold text-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#005f73]">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="rounded-full bg-[#e9f7f7] p-3 text-[#005f73] transition-transform duration-300 group-hover:translate-x-1">
                    <GrLinkNext size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleMode}
            type="button"
            className="rounded-full bg-[#005f73] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a7288] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#005f73]/40 focus:ring-offset-2"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Steps;