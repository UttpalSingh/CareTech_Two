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
import { useLanguage } from "../../context/LanguageContext.jsx";

const Concerns = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [agreed, setAgreed] = useState(false);

  const consentItems = t("concerns.consentItems");

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
          {t("concerns.securePrivate")}
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
            {t("concerns.title")}
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            {t("concerns.description")}
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
                {t("concerns.informationTitle")}
              </h2>

              <p className="mt-1 text-xs leading-5 text-gray-500 md:text-sm">
                {t("concerns.informationDescription")}
              </p>
            </div>
          </div>

          <div className="space-y-3 px-6 py-6 md:px-8">
            {Array.isArray(consentItems) &&
              consentItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-[#fbfefe] p-5 transition-all duration-300 hover:border-[#b9dddd] hover:bg-[#f7fcfc]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e2f4f4] text-xs font-bold text-[#005f73]">
                      {index + 1}
                    </div>

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

           
              <div>
                <p className="text-sm font-semibold text-[#073b4c]">
                  {t("concerns.agreementTitle")}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {t("concerns.agreementDescription")}
                </p>
              </div>
            </div>

  
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
                {t("concerns.agreeContinue")}

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
      </div>
    </div>
  );
};

export default Concerns;
