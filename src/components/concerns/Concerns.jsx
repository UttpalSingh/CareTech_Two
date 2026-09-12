import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import {
  FiShield,
  FiChevronRight,
  FiInfo,
  FiLock,
  FiCheck,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Concerns = () => {
  const navigate = useNavigate();

  const [agreed, setAgreed] = useState(false);

  const consentItems = [
    {
      title: "Identity Verification",
      description:
        "CareTech may verify your identity using Aadhaar or another permitted identification method. Aadhaar may be voluntary where an alternative permitted identification method is available.",
    },
    {
      title: "Health Information",
      description:
        "CareTech may collect your symptoms, answers, medical history and other information you provide to prepare your clinical history.",
    },
    {
      title: "Medical Documents",
      description:
        "CareTech may process your prescriptions, laboratory reports, scans, discharge summaries and other medical documents.",
    },
    {
      title: "AI Processing",
      description:
        "Your information may be processed by AI to organize your medical history, summarize reports and prepare a clinical summary for your doctor's review.",
    },
    {
      title: "Voice Processing",
      description:
        "CareTech may process your voice input to convert your answers into text and prepare your clinical history.",
    },
    {
      title: "Doctor & Healthcare Facility",
      description:
        "Your collected medical information and AI-generated clinical summary may be shared with your treating doctor and the authorized healthcare facility.",
    },
    {
      title: "ABDM / ABHA",
      description:
        "Your health information may be shared through the applicable ABDM/ABHA mechanism for the purpose explained to you.",
    },
    {
      title: "Hospital Information System",
      description:
        "Your structured clinical information may be transmitted to the authorized hospital information system (HIS/EMR) for use by your healthcare provider.",
    },
  ];

  const handleContinue = () => {
    if (!agreed) return;

    navigate("/final");
  };

  return (
    <div className="min-h-screen w-full from-[#eefafa] via-white to-[#e5f5f6] px-4 py-8 md:px-8">

      {/* Header */}
      <div className="mx-auto mb-8 flex w-full max-w-5xl items-center justify-between">

        {/* CareTech Logo */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-2xl font-bold tracking-tight text-[#005f73] md:text-3xl">
            CareTech
            <BiPlusMedical />
          </span>
        </div>

        {/* Security */}
        <div className="hidden items-center gap-2 text-sm font-medium text-gray-500 sm:flex">
          <FiLock className="text-[#005f73]" />
          Secure & Private
        </div>

      </div>


      {/* Main Container */}
      <div className="mx-auto w-full max-w-5xl">

        {/* Heading */}
        <div className="mb-7 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dff3f3] text-[#005f73] shadow-sm">
            <FiShield size={32} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#073b4c] md:text-4xl">
            Privacy & Consent
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Please review how CareTech collects, processes and shares
            your information before continuing.
          </p>

        </div>


        {/* Main Card */}
        <div className="overflow-hidden rounded-[3vh] border border-[#d9eeee] bg-white shadow-[0_20px_60px_rgba(0,95,115,0.10)]">

          {/* Information Banner */}
          <div className="flex gap-4 border-b border-[#dceeee] bg-[#f3fbfb] px-6 py-5 md:px-8">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#005f73] shadow-sm">
              <FiInfo size={20} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#073b4c]">
                How your information is used
              </h2>

              <p className="mt-1 text-xs leading-5 text-gray-500 md:text-sm">
                The following explains the purposes for which CareTech
                may collect, process and share your information.
              </p>
            </div>

          </div>


          {/* Consent Information */}
          <div className="space-y-3 px-6 py-6 md:px-8">

            {consentItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-[#fbfefe] p-5 transition-all duration-300 hover:border-[#b9dddd] hover:bg-[#f7fcfc]"
              >

                <div className="flex items-start gap-4">

                  {/* Number */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e2f4f4] text-xs font-bold text-[#005f73]">
                    {index + 1}
                  </div>

                  {/* Information */}
                  <div>
                    <h3 className="text-sm font-bold text-[#073b4c] md:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500 md:text-sm md:leading-6">
                      {item.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* Final Agreement */}
          <div className="border-t border-[#dceeee] bg-[#f8fcfc] px-6 py-6 md:px-8">

            <div
              onClick={() => setAgreed(!agreed)}
              className={`flex cursor-pointer items-start gap-4 rounded-2xl border-2 p-5 transition-all duration-300 ${
                agreed
                  ? "border-[#005f73] bg-[#eefafa]"
                  : "border-gray-200 bg-white hover:border-[#8fcaca]"
              }`}
            >

              {/* Checkbox */}
              <div
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-300 ${
                  agreed
                    ? "border-[#005f73] bg-[#005f73] text-white"
                    : "border-gray-300 bg-white"
                }`}
              >
                {agreed && <FiCheck size={16} />}
              </div>


              {/* Agreement Text */}
              <div>
                <p className="text-sm font-semibold text-[#073b4c]">
                  I agree to CareTech's Terms & Conditions and Privacy Policy.
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  I understand how my information may be collected,
                  processed and shared for the purposes explained above.
                </p>
              </div>

            </div>


            {/* Continue Button */}
            <div className="mt-5 flex justify-end">

              <button
                type="button"
                onClick={handleContinue}
                disabled={!agreed}
                className={`group flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 ${
                  agreed
                    ? "bg-[#005f73] hover:-translate-y-0.5 hover:bg-[#0a7288] hover:shadow-lg"
                    : "cursor-not-allowed bg-gray-300"
                }`}
              >
                Agree & Continue

                <FiChevronRight
                  size={19}
                  className={`transition-transform duration-300 ${
                    agreed ? "group-hover:translate-x-1" : ""
                  }`}
                />
              </button>

            </div>

          </div>

        </div>


        {/* Footer */}
        <div className="mx-auto mt-5 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-gray-400">
          <FiLock className="text-[#005f73]" size={14} />
          Your information is handled securely by CareTech.
        </div>

      </div>

    </div>
  );
};

export default Concerns;