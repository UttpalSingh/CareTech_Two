import React from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit3, FiUploadCloud } from "react-icons/fi";

export const Summary = () => {
    const navigate = useNavigate()

    function nextPage(){
        navigate("/concerns")
    }

  return (
    <div className="min-h-screen w-full bg-[#f0fafa]">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#d6eeee] bg-white px-6 py-4 shadow-sm md:px-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#005f73]">
            CareTech
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#005f73] text-2xl font-bold text-white">
            +
          </span>
        </div>

        {/* Page Title */}
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-[#005f73]">
            Medical Summary
          </p>

          <p className="text-xs text-gray-400">
            FHIR Structured Health Record
          </p>
        </div>

      </div>


      {/* Main Image Area */}
      <main className="flex min-h-[calc(100vh-145px)] items-center justify-center px-3 py-5 md:px-6">

        <div className="w-full max-w-[150vh] overflow-hidden rounded-2xl border border-[#d7eeee] bg-white shadow-[0_15px_50px_rgba(0,95,115,0.12)]">

          <img
            src="/images/summary-fhir.png"
            alt="CareTech FHIR Structure"
            className="block h-auto w-full object-contain"
          />

        </div>

      </main>


      {/* Bottom Action Bar */}
      <div className="sticky bottom-0 z-50 border-t border-[#d6eeee] bg-white/95 px-5 py-4 shadow-[0_-10px_30px_rgba(0,95,115,0.08)] backdrop-blur-md">

        <div className="mx-auto flex w-full max-w-[150vh] items-center justify-end gap-3">

          {/* Edit Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border-2 border-[#005f73] bg-white px-6 py-3 text-sm font-semibold text-[#005f73] transition-all duration-300 hover:bg-[#eaf7f7] hover:shadow-md"
          >
            <FiEdit3 size={18} />
            Edit
          </button>


          {/* Upload Button */}
          <button
            onClick={nextPage}
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#005f73] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a7288] hover:shadow-lg"
          >
            <FiUploadCloud size={18} />
            Upload report
          </button>

        </div>

      </div>

    </div>
  );
};