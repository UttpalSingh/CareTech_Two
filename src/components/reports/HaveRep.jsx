import React from "react";
import { FiUploadCloud, FiFileText, FiShieldCheck } from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";

export const HaveRep = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f0fbfb] via-white to-[#e8f6f7] px-5 py-10">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl">
            Upload Your Report
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Already have a medical report? Upload it to help CareTech
            organize your health information.
          </p>
        </div>

        {/* Upload Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">
          {/* Upload Area */}
          <div className="group relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#bde5e4] bg-[#f7fcfc] px-6 text-center transition-all duration-300 hover:border-[#0a9396] hover:bg-[#eefafa]">
            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#e3f6f5] transition-transform duration-500 group-hover:scale-125"></div>

            <div className="relative">
              {/* Upload Icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#e0f4f4] text-[#0a9396] shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-md">
                <FiUploadCloud size={42} />
              </div>

              <h2 className="mt-6 text-xl font-bold text-gray-800">
                Upload your medical report
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Drag & drop your file here or click to browse
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-500 shadow-sm">
                  <FiFileText className="text-[#0a9396]" />
                  PDF
                </span>

                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-500 shadow-sm">
                  <FiFileText className="text-[#0a9396]" />
                  JPG
                </span>

                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-500 shadow-sm">
                  <FiFileText className="text-[#0a9396]" />
                  PNG
                </span>
              </div>

              <p className="mt-4 text-xs text-gray-400">
                Maximum file size: 10 MB
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#f0fbfb] p-4">
            <div className="mt-0.5 shrink-0 text-[#0a9396]">
              <FiShieldCheck size={21} />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">
                Your information is protected
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Your uploaded medical documents are used to help organize
                your health information.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            {/* Skip */}
            <button
              type="button"
              className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50"
            >
              Skip
            </button>

            {/* Upload */}
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#0a9396] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#005f73] hover:shadow-lg hover:-translate-y-0.5"
            >
              Upload
              <GrLinkNext />
            </button>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-2 text-center text-xs text-gray-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#0a9396]"></span>
          You can skip this step and continue without uploading a report.
        </div>
      </div>
    </div>
  );
};

export default HaveRep;
