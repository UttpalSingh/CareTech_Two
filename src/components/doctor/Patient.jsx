import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Patient = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  function managePage() {
    navigate("/list");
  }

  return (
    <div className="min-h-screen w-full bg-[#f3fafa]">
      <div className="mx-auto min-h-screen w-full max-w-[140vh] px-4 md:px-8">
        {/* Navbar */}
        <nav className="h-[9vh] w-full border-b border-[#d8eeee] bg-white">
          <div className="flex h-full items-center justify-between">
            <div className="flex h-14 items-center">
              <img
                src="/images/Ayush.png"
                alt="AYUSH"
                className="h-full w-auto object-contain"
              />

              <div className="mx-5 h-10 w-px bg-gray-200"></div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-[#005f73]">
                  CareTech +
                </span>
              </div>
            </div>
          </div>
        </nav>

        <main className="w-full py-7">
          <div className="mb-6">
            <h1 className="mt-1 text-2xl font-bold text-[#073b4c] md:text-3xl">
              Patient Result
            </h1>
          </div>
          <div className="flex w-full flex-col items-start gap-6 lg:flex-row">
            {/* info */}
            <aside className="w-full lg:sticky lg:top-[12vh] lg:w-[30%] xl:w-[28%]">
              <div className="w-full overflow-hidden rounded-2xl border border-[#d8eeee] bg-white shadow-[0_10px_35px_rgba(0,95,115,0.08)]">
                <div className="border-b border-[#e1eeee] from-[#edfafa] to-white px-6 py-5">
                  <h2 className="mt-1 text-xl font-bold text-[#073b4c]">
                    Patient Information
                  </h2>
                </div>

                {/* Details */}
                <div className="flex flex-col px-6 py-3">
                  <div className="flex items-center justify-between border-b border-gray-100 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Name
                    </span>

                    <p className="text-sm font-bold text-[#073b4c]">Rahul</p>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Age
                    </span>

                    <p className="text-sm font-bold text-[#073b4c]">18</p>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Gender
                    </span>

                    <p className="text-sm font-bold text-[#073b4c]">Male</p>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Patient ID
                    </span>

                    <span className="rounded-md bg-[#eaf7f7] px-3 py-1.5 font-mono text-xs font-bold text-[#005f73]">
                      CT12345
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Visit Type
                    </span>

                    <p className="text-sm font-bold text-[#073b4c]">
                      Heart Health
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Priority
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                      High
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <span className="text-sm font-medium text-gray-500">
                      Date
                    </span>

                    <p className="text-sm font-bold text-[#073b4c]">
                      12 Sep 2026
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex w-full flex-col gap-6">
              {/* Q&A */}
              <section className="w-full overflow-hidden rounded-2xl border border-[#d8eeee] bg-white shadow-[0_10px_35px_rgba(0,95,115,0.08)]">
                {/* Header */}
                <div className="border-b border-[#d8eeee] from-[#edfafa] to-white px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0a9396]">
                    Clinical History
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#073b4c]">Q&A</h2>

                    <span className="rounded-full bg-[#e7f6f6] px-3 py-1 text-xs font-bold text-[#007f86]">
                      6 Questions
                    </span>
                  </div>
                </div>

                {/* Chief Complaint */}
                <div className="border-b border-[#e6f1f1] px-6 py-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e63946]"></span>

                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#073b4c]">
                      Chief Complaint
                    </h3>
                  </div>

                  <div className="rounded-xl border border-red-100 bg-[#fff7f7] px-5 py-4">
                    <p className="text-sm font-medium leading-6 text-gray-700">
                      I have a heart-related issue and sometimes I feel pain.
                    </p>
                  </div>
                </div>

                {/* Questions */}
                <div className="flex flex-col gap-4 p-6">
                  {/* Question 1 */}
                  <div className="group rounded-xl border border-[#e1eeee] bg-white p-5 transition-all duration-200 hover:border-[#b8dddd] hover:shadow-[0_6px_20px_rgba(0,95,115,0.07)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf7f7] text-sm font-bold text-[#005f73]">
                        01
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1.5 text-sm font-bold text-[#073b4c]">
                          Where exactly do you feel the pain?
                        </p>

                        <div className="mt-3 border-l-2 border-[#b9dddd] pl-4">
                          <p className="text-sm leading-6 text-gray-600">
                            The pain is mainly in the center of my chest.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="group rounded-xl border border-[#e1eeee] bg-white p-5 transition-all duration-200 hover:border-[#b8dddd] hover:shadow-[0_6px_20px_rgba(0,95,115,0.07)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf7f7] text-sm font-bold text-[#005f73]">
                        02
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1.5 text-sm font-bold text-[#073b4c]">
                          When did the pain first start?
                        </p>

                        <div className="mt-3 border-l-2 border-[#b9dddd] pl-4">
                          <p className="text-sm leading-6 text-gray-600">
                            It started a few weeks ago and happens occasionally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="group rounded-xl border border-[#e1eeee] bg-white p-5 transition-all duration-200 hover:border-[#b8dddd] hover:shadow-[0_6px_20px_rgba(0,95,115,0.07)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf7f7] text-sm font-bold text-[#005f73]">
                        03
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1.5 text-sm font-bold text-[#073b4c]">
                          How would you describe the pain?
                        </p>

                        <div className="mt-3 border-l-2 border-[#b9dddd] pl-4">
                          <p className="text-sm leading-6 text-gray-600">
                            It feels like pressure and sometimes a mild
                            squeezing sensation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="group rounded-xl border border-[#e1eeee] bg-white p-5 transition-all duration-200 hover:border-[#b8dddd] hover:shadow-[0_6px_20px_rgba(0,95,115,0.07)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf7f7] text-sm font-bold text-[#005f73]">
                        04
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1.5 text-sm font-bold text-[#073b4c]">
                          Does the pain spread to any other part of your body?
                        </p>

                        <div className="mt-3 border-l-2 border-[#b9dddd] pl-4">
                          <p className="text-sm leading-6 text-gray-600">
                            Sometimes I feel the discomfort spreading toward my
                            left shoulder.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="group rounded-xl border border-[#e1eeee] bg-white p-5 transition-all duration-200 hover:border-[#b8dddd] hover:shadow-[0_6px_20px_rgba(0,95,115,0.07)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf7f7] text-sm font-bold text-[#005f73]">
                        05
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1.5 text-sm font-bold text-[#073b4c]">
                          Do you experience any other symptoms along with the
                          pain?
                        </p>

                        <div className="mt-3 border-l-2 border-[#b9dddd] pl-4">
                          <p className="text-sm leading-6 text-gray-600">
                            Sometimes I feel shortness of breath and mild
                            dizziness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question 6 */}
                  <div className="group rounded-xl border border-[#e1eeee] bg-white p-5 transition-all duration-200 hover:border-[#b8dddd] hover:shadow-[0_6px_20px_rgba(0,95,115,0.07)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf7f7] text-sm font-bold text-[#005f73]">
                        06
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="mt-1.5 text-sm font-bold text-[#073b4c]">
                          How severe is the pain on a scale of 0 to 10?
                        </p>

                        <div className="mt-3 border-l-2 border-[#b9dddd] pl-4">
                          <p className="text-sm leading-6 text-gray-600">
                            I would rate it around 5 out of 10 when it occurs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* report */}
              <section className="w-full overflow-hidden rounded-2xl border border-[#d8eeee] bg-white shadow-[0_10px_35px_rgba(0,95,115,0.08)]">
                {/* Reports Header */}
                <div className="border-b border-[#d8eeee] from-[#edfafa] to-white px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="mt-1 text-2xl font-bold text-[#073b4c]">
                        Medical Reports
                      </h2>
                    </div>

                    <span className="rounded-full bg-[#e7f6f6] px-3 py-1 text-xs font-bold text-[#007f86]">
                      4 Reports
                    </span>
                  </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2">
                  {/* Report 1 */}
                  <div className="group overflow-hidden rounded-xl border border-[#dceaea] bg-[#f8fcfc] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-[26vh] w-full overflow-hidden bg-white">
                      <img
                        src="/images/bp.png"
                        alt="Medical Report"
                        onClick={() => setSelectedImage("/images/bp.png")}
                        className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="border-t border-[#e4eeee] bg-white px-4 py-3">
                      <p className="text-sm font-bold text-[#073b4c]">
                        Blood Pressure Report
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Patient medical document
                      </p>
                    </div>
                  </div>

                  {/* Report 2 */}
                  <div className="group overflow-hidden rounded-xl border border-[#dceaea] bg-[#f8fcfc] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-[26vh] w-full overflow-hidden bg-white">
                      <img
                        src="/images/bloodRepo.png"
                        onClick={() =>
                          setSelectedImage("/images/bloodRepo.png")
                        }
                        alt="Medical Report"
                        className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="border-t border-[#e4eeee] bg-white px-4 py-3">
                      <p className="text-sm font-bold text-[#073b4c]">
                        Blood Test Report
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Patient medical document
                      </p>
                    </div>
                  </div>

                  {/* Report 3 */}
                  <div className="group overflow-hidden rounded-xl border border-[#dceaea] bg-[#f8fcfc] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-[26vh] w-full overflow-hidden bg-white">
                      <img
                        src="/images/sugarRepo.png"
                        onClick={() =>
                          setSelectedImage("/images/sugarRepo.png")
                        }
                        alt="Medical Report"
                        className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="border-t border-[#e4eeee] bg-white px-4 py-3">
                      <p className="text-sm font-bold text-[#073b4c]">
                        Sugar Test Report
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Patient medical document
                      </p>
                    </div>
                  </div>

                  {/* Report 4 */}
                  <div className="group overflow-hidden rounded-xl border border-[#dceaea] bg-[#f8fcfc] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-[26vh] w-full overflow-hidden bg-white">
                      <img
                        src="/images/ctScan.png"
                        onClick={() => setSelectedImage("/images/ctScan.png")}
                        alt="Medical Report"
                        className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="border-t border-[#e4eeee] bg-white px-4 py-3">
                      <p className="text-sm font-bold text-[#073b4c]">
                        CT Scan Report
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Patient medical document
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Graph */}
              <section className="w-full overflow-hidden rounded-2xl border border-[#d8eeee] bg-white shadow-[0_10px_35px_rgba(0,95,115,0.08)]">
                {/* Header */}
                <div className="border-b border-[#d8eeee] bg-gradient-to-r from-[#edfafa] to-white px-6 py-5">
                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-[#073b4c]">
                        Graph
                      </h2>
                    </div>

                    <span className="hidden rounded-full bg-[#e7f6f6] px-3 py-1 text-xs font-bold text-[#007f86] sm:block">
                      Complete Analysis
                    </span>
                  </div>
                </div>

                {/* Graph Content */}
                <div className="p-5">
                  <div className="relative overflow-hidden rounded-xl border border-[#dceaea] bg-[#f8fcfc]">
                    {/* Graph */}
                    <div className="flex min-h-[360px] w-full items-center justify-center p-4 md:p-6">
                      <div className="h-[40vh] min-h-[300px] w-full max-w-[850px] overflow-hidden rounded-lg bg-white shadow-sm">
                        <img
                          className="h-full w-full object-contain p-3"
                          src="/images/graph.png"
                          alt="CBC differential count graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary */}
              <section className="w-full overflow-hidden rounded-2xl border border-[#d8eeee] bg-white shadow-[0_10px_35px_rgba(0,95,115,0.08)]">
                <div className="border-b border-[#d8eeee] from-[#edfafa] to-white px-6 py-5">
                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-[#073b4c]">
                        Patient Summary
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Summary Content */}
                <div className="p-6">
                  <div className="rounded-xl border border-[#dceaea] bg-[#f8fcfc] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div>
                        <p className="text-sm font-bold text-[#073b4c]">
                          Clinical Summary
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-gray-600">
                      The patient reports intermittent central chest pain that
                      started a few weeks ago. The pain is described as
                      pressure-like with occasional squeezing sensation and
                      sometimes radiates toward the left shoulder. The patient
                      also reports occasional shortness of breath and mild
                      dizziness. The reported pain severity is approximately
                      5/10 when it occurs.
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Genetic */}
                    <div className="rounded-xl border border-[#e1eeee] bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-[#0a9396]">
                            Genetic History
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg p-3">
                        <p className="text-sm leading-6 text-gray-600">
                          No known genetic or hereditary heart condition
                          reported.
                        </p>
                      </div>
                    </div>

                    {/* Surgery */}
                    <div className="rounded-xl border border-[#e1eeee] bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-[#0a9396]">
                            Surgical History
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg bg-[#f7fbfb] p-3">
                        <p className="text-sm leading-6 text-gray-600">
                          No previous major surgery reported.
                        </p>
                      </div>
                    </div>

                    {/* Medication */}
                    <div className="rounded-xl border border-[#e1eeee] bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-[#0a9396]">
                            Medication History
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-lg bg-[#f7fbfb] p-3">
                        <p className="text-sm leading-6 text-gray-600">
                          Patient reports no regular medication use.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="flex justify-end">
                <button
                  onClick={managePage}
                  className="h-10 w-30 bg-[#005f73] text-white rounded-xl cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-100 flex cursor-pointer items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <img
            src={selectedImage}
            className="max-h-[95vh] max-w-[95vw] cursor-default rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Patient;
