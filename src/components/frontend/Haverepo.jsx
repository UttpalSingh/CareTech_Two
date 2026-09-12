import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const Haverepo = () => {
  const navigate = useNavigate();

  function mangageNextPage() {
    navigate("/summary");
  }

  return (
    <div className="min-h-screen w-full  from-[#f0fbfb] via-white to-[#e8f6f7] px-5 py-10">
      <div className="flex min-h-screen flex-col items-center justify-center">
        {/* CareTech Header */}
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a9396]">
            CareTech
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">
            Upload Your Report
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500 md:text-base">
            Already have a medical report? Upload it to help CareTech organize
            your health information.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:p-9">
          {/* Upload Box */}
          <div className="group relative flex min-h-[28vh] flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#bde5e4] bg-[#f7fcfc] px-6 text-center transition-all duration-300 hover:border-[#0a9396] hover:bg-[#eefafa]">
            {/* Decorative Circle */}
            <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#e3f6f5] transition-transform duration-500 group-hover:scale-125"></div>

            <h2 className="mt-6 text-xl font-bold text-gray-800">
              Upload your medical report
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Scan your medical report to instantly digitize your health
              information.
            </p>
          </div>

          {/* Security Information */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#f0fbfb] p-4">
            <div className="mt-0.5 text-[#0a9396]"></div>

            <div>
              <p className="text-sm font-semibold text-gray-700">
                Your information is protected
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Your uploaded medical documents are used to help organize your
                health information.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={mangageNextPage}
              type="button"
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50"
            >
              Skip
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#0a9396] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005f73] hover:shadow-lg"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-6 flex w-full justify-end">
          <button
            type="button"
            onClick={mangageNextPage}
            className="group flex items-center gap-3 rounded-xl bg-[#005f73] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a7288] hover:shadow-xl"
          >
            <span>Continue to Summary</span>

            <GrLinkNext
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex items-center gap-2 text-center text-xs text-gray-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#0a9396]"></span>
          You can skip this step and continue without uploading a report.
        </div>
      </div>
    </div>
  );
};
