import React from "react";
import { useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

const Steps = () => {
    const navigate = useNavigate()

  const steps = [
    "Choose Your Mode",
    "Answer the Given Questions",
    "Upload Your Report",
    "Check or Edit Your Report",
    "Send Your Report",
  ];

  function handleMode(){
    navigate("/mode")
  }

  return (
    <div className="relative w-full bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#0a9396]">
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

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-[2px] bg-[#ccebea] sm:block"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step}
                className="group relative flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Step Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a9396] text-lg font-bold text-white shadow-md">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0a9396]">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-gray-800">
                      {step}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="hidden rounded-full bg-[#e9f7f7] p-3 text-[#005f73] transition-transform duration-300 group-hover:translate-x-1 sm:block">
                    <GrLinkNext size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Button - Bottom Right */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleMode}
            type="button"
            className="rounded-full bg-[#0a9396] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#005f73] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0a9396]/40 focus:ring-offset-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
