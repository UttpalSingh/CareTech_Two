import React from "react";

import {
  FaLeaf,
  FaStethoscope,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext.jsx";

const Mode = () => {
  let selected = "ayush";

  const navigate = useNavigate();

  const { t } = useLanguage();

  function ayushPage() {
    navigate("/selectDomain", {
      state: {
        selected: "ayush",
      },
    });
  }

  function generalPage() {
    navigate("/selectDomain", {
      state: {
        selected: "general",
      },
    });
  }

  return (
    <div className="min-h-screen w-full from-[#f0fbfb] via-white to-[#e8f6f7] px-6 py-12">

      {/* Main Container */}
      <div className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center">

        {/* Heading */}
        <div className="mb-12 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            CareTech
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-800 md:text-5xl">
            {t("mode.title")}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            {t("mode.description")}
          </p>

        </div>

        {/* Mode Cards */}
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">

          {/* Ayush Mode */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#bfe5e6] bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative">

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a9396] text-3xl text-white shadow-lg">
                <FaLeaf />
              </div>

              {/* Badge */}
              <span className="mt-6 inline-block rounded-full bg-[#e7f7f5] px-3 py-1 text-xs font-semibold text-[#0a9396]">
                {t("mode.traditionalHealthcare")}
              </span>

              {/* Title */}
              <h2 className="mt-4 text-3xl font-bold text-gray-800">
                {t("mode.ayushMode")}
              </h2>

              {/* Description */}
              <p className="mt-3 min-h-[7.2vh] leading-6 text-gray-500">
                {t("mode.ayushDescription")}
              </p>

              {/* Button */}
              <button
                onClick={ayushPage}
                type="button"
                className="mt-7 flex w-full items-center justify-between rounded-xl bg-[#0a9396] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#005f73]"
              >
                <span>{t("mode.continueAyush")}</span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>
          </div>

          {/* General Mode */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0a9396]/30 hover:shadow-2xl">

            <div className="relative">

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005f73] text-3xl text-white shadow-lg">
                <FaStethoscope />
              </div>

              {/* Badge */}
              <span className="mt-6 inline-block rounded-full bg-[#e9f7f7] px-3 py-1 text-xs font-semibold text-[#005f73]">
                {t("mode.generalHealthcare")}
              </span>

              {/* Title */}
              <h2 className="mt-4 text-3xl font-bold text-gray-800">
                {t("mode.generalMode")}
              </h2>

              {/* Description */}
              <p className="mt-3 min-h-[7.2vh] leading-6 text-gray-500">
                {t("mode.generalDescription")}
              </p>

              {/* Button */}
              <button
                onClick={generalPage}
                type="button"
                className="mt-7 flex w-full items-center justify-between rounded-xl bg-[#005f73] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#0a9396]"
              >
                <span>{t("mode.continueGeneral")}</span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mode;