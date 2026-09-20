import React from "react";

import { BiPlusMedical } from "react-icons/bi";

import {
  FiCheck,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext.jsx";

const Final = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  function handleContinue() {
    navigate("/");
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden from-[#eefafa] via-white to-[#e5f5f6] px-5 py-10">


      <div className="relative z-10 w-full max-w-xl">
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-3xl font-bold tracking-tight text-[#005f73]">
              CareTech +
            </span>
          </div>
        </div>

        <div className="rounded-[3vh] border border-[#d8eeee] bg-white px-6 py-10 text-center shadow-[0_25px_70px_rgba(0,95,115,0.12)] md:px-12 md:py-12">
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full bg-[#bde5e4] opacity-30"></div>

            <div className="absolute inset-2 animate-pulse rounded-full border border-[#8bcaca]"></div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#005f73] text-white shadow-[0_10px_30px_rgba(0,95,115,0.25)]">
              <FiCheck
                size={42}
                strokeWidth={2.5}
                className="animate-[scaleIn_0.5s_ease-out]"
              />
            </div>
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#073b4c] md:text-4xl">
            {t("final.successTitle")}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 md:text-base">
            {t("final.successDescription")}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 md:text-base">
            {t("final.tokenText")}{" "}
            <span className="font-bold text-[#073b4c]">CT23765</span>.
          </p>

          <div className="mx-auto mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-[#d8eeee] bg-[#f5fcfc] p-4 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dff3f3] text-[#005f73]">
              <FiFileText size={24} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-[#073b4c]">
                {t("final.medicalReport")}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0a9396]"></span>

                <span className="text-xs font-medium text-[#0a9396]">
                  {t("final.processed")}
                </span>
              </div>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9f2f1] text-[#005f73]">
              <FiCheck size={17} />
            </div>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            className="group mx-auto mt-9 flex items-center justify-center gap-3 rounded-xl bg-[#005f73] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a7288] hover:shadow-xl"
          >
            {t("final.continue")}

            <FiArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
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