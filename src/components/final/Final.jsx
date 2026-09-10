import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import {
  FiCheck,
  FiFileText,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Final = () => {
  const navigate = useNavigate();

  function handleContinue() {
    navigate("/");
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#eefafa] via-white to-[#e5f5f6] px-5 py-10">

      {/* Background Decorations */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#dff3f3] opacity-70"></div>

      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#dff3f3] opacity-60"></div>


      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl">

        {/* CareTech Logo */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-2">

            <span className="text-3xl font-bold tracking-tight text-[#005f73]">
              CareTech
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#005f73] text-2xl font-bold text-white shadow-md">
              +
            </span>

          </div>
        </div>


        {/* Success Card */}
        <div className="rounded-[2rem] border border-[#d8eeee] bg-white px-6 py-10 text-center shadow-[0_25px_70px_rgba(0,95,115,0.12)] md:px-12 md:py-12">

          {/* Success Animation */}
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">

            {/* Outer Ring */}
            <div className="absolute inset-0 animate-ping rounded-full bg-[#bde5e4] opacity-30"></div>

            {/* Second Ring */}
            <div className="absolute inset-2 animate-pulse rounded-full border border-[#8bcaca]"></div>

            {/* Main Circle */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#005f73] text-white shadow-[0_10px_30px_rgba(0,95,115,0.25)]">

              <FiCheck
                size={42}
                strokeWidth={2.5}
                className="animate-[scaleIn_0.5s_ease-out]"
              />

            </div>

          </div>


          {/* Success Message */}
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#073b4c] md:text-4xl">
            Report Uploaded Successfully!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 md:text-base">
            Your medical report has been securely uploaded and added
            to your CareTech health record.
          </p>


          {/* Report Status */}
          <div className="mx-auto mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-[#d8eeee] bg-[#f5fcfc] p-4 text-left">

            {/* File Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dff3f3] text-[#005f73]">
              <FiFileText size={24} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold text-[#073b4c]">
                Medical Report
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0a9396]"></span>

                <span className="text-xs font-medium text-[#0a9396]">
                  Successfully processed
                </span>
              </div>
            </div>

            {/* Check */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9f2f1] text-[#005f73]">
              <FiCheck size={17} />
            </div>

          </div>


          {/* Security Message */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">

            <FiShield
              size={15}
              className="text-[#005f73]"
            />

            Your medical information is securely handled.

          </div>


          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="group mx-auto mt-9 flex items-center justify-center gap-3 rounded-xl bg-[#005f73] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a7288] hover:shadow-xl"
          >
            Continue to CareTech

            <FiArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        </div>


        {/* Bottom Message */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Your health information is now ready to be organized and reviewed.
        </p>

      </div>


      {/* Animation CSS */}
      <style>
        {`
          @keyframes scaleIn {
            0% {
              transform: scale(0);
              opacity: 0;
            }

            70% {
              transform: scale(1.15);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

    </div>
  );
};

export default Final;