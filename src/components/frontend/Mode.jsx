import React from "react";
import { FaLeaf, FaStethoscope, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Mode = () => {
    const navigate = useNavigate()

    function ayushPage(){
        navigate("/ayush")
    }
    function generalPage(){
        navigate("/general")
    }


  return (
    <div className="min-h-screen w-full  from-[#f0fbfb] via-white to-[#e8f6f7] px-6 py-12">
      {/* Main Container */}
      <div className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-800 md:text-5xl">
            Choose Your Mode
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Select the mode that best matches your healthcare needs.
            CareTech will guide you through the process.
          </p>
        </div>

        {/* Mode Cards */}
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {/* Ayush Mode */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#bfe5e6] bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#e4f7f4] transition-transform duration-500 group-hover:scale-150"></div>

            <div className="relative">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a9396] text-3xl text-white shadow-lg">
                <FaLeaf />
              </div>

              {/* Badge */}
              <span className="mt-6 inline-block rounded-full bg-[#e7f7f5] px-3 py-1 text-xs font-semibold text-[#0a9396]">
                TRADITIONAL HEALTHCARE
              </span>

              {/* Title */}
              <h2 className="mt-4 text-3xl font-bold text-gray-800">
                Ayush Mode
              </h2>

              {/* Description */}
              <p className="mt-3 min-h-[7.2vh] leading-6 text-gray-500">
                Record and organize your health information with an
                approach focused on traditional Indian systems of medicine.
              </p>

              {/* Button */}
              <button
                onClick={ayushPage}
                type="button"
                className="mt-7 flex w-full items-center justify-between rounded-xl bg-[#0a9396] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#005f73]"
              >
                <span>Continue with Ayush</span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* General Mode */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0a9396]/30 hover:shadow-2xl">
            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#e9f7f7] transition-transform duration-500 group-hover:scale-150"></div>

            <div className="relative">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005f73] text-3xl text-white shadow-lg">
                <FaStethoscope />
              </div>

              {/* Badge */}
              <span className="mt-6 inline-block rounded-full bg-[#e9f7f7] px-3 py-1 text-xs font-semibold text-[#005f73]">
                GENERAL HEALTHCARE
              </span>

              {/* Title */}
              <h2 className="mt-4 text-3xl font-bold text-gray-800">
                General Mode
              </h2>

              {/* Description */}
              <p className="mt-3 min-h-[7.2vh] leading-6 text-gray-500">
                Create a structured medical history and organize your
                healthcare information for general clinical use.
              </p>

              {/* Button */}
              <button
                onClick={generalPage}
                type="button"
                className="mt-7 flex w-full items-center justify-between rounded-xl bg-[#005f73] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#0a9396]"
              >
                <span>Continue with General</span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-10 flex items-center gap-2 text-sm text-gray-400">
          <span className="h-2 w-2 rounded-full bg-[#0a9396]"></span>
          You can change your mode later
        </div>
      </div>
    </div>
  );
};

export default Mode;
