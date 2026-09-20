import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";

const LANGUAGES = [
  { name: "English", native: "English" },
  { name: "Hindi", native: "हिन्दी" },
];

const Language = () => {
  const navigate = useNavigate();

  const { language, changeLanguage, t } = useLanguage();

  const selectedLanguage = LANGUAGES.find(
    (lang) => lang.name === language
  );

  const handleContinue = () => {
    navigate("/steps");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl">

        {/* Top Message */}
        <div className="mb-8 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-[#0a9396]">
            CareTech
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            {t("language.title")}
          </h1>

          <p className="mt-2 text-gray-500">
            {t("language.subtitle")}
          </p>

        </div>

        {/* Language Selection */}
        <div className="flex flex-col gap-3">

          <p className="text-sm font-semibold text-gray-700">
            {t("language.select")}
          </p>

          <div className="grid grid-cols-2 gap-3">

            {LANGUAGES.map((lang) => {

              const isSelected = language === lang.name;

              return (
                <button
                  key={lang.name}
                  type="button"
                  onClick={() => changeLanguage(lang.name)}
                  aria-pressed={isSelected}
                  className={`rounded-xl border px-4 py-3 text-center transition focus:outline-none focus:ring-2 focus:ring-[#0a9396]/40 ${
                    isSelected
                      ? "border-[#0a9396] bg-[#0a9396] text-white shadow-md"
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#0a9396]/50 hover:bg-[#e9f7f7]"
                  }`}
                >
                  <span className="block text-base font-semibold">
                    {lang.native}
                  </span>

                  <span
                    className={`block text-xs ${
                      isSelected
                        ? "text-white/80"
                        : "text-gray-400"
                    }`}
                  >
                    {lang.name}
                  </span>
                </button>
              );

            })}

          </div>
        </div>

        {/* Selected Language */}
        <div className="mt-6 rounded-xl bg-[#e9f7f7] p-4 text-center">

          <p className="text-sm text-gray-500">
            {t("language.selected")}
          </p>

          <p className="mt-1 text-lg font-bold text-[#005f73]">
            {selectedLanguage?.native}
          </p>

        </div>

        {/* Continue */}
        <div className="flex items-center justify-center mt-8">

          <button
            onClick={handleContinue}
            type="button"
            className="w-full max-w-xs rounded-xl bg-[#0a9396] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#005f73] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0a9396]/40 focus:ring-offset-2 active:scale-[0.98]"
          >
            {t("language.continue")}
          </button>

        </div>

      </div>
    </div>
  );
};

export default Language;