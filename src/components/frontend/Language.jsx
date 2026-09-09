import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Language = () => {
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate()

  const languages = [
    { name: "English", native: "English" },
    { name: "Hindi", native: "हिन्दी" },
    { name: "Tamil", native: "தமிழ்" },
    { name: "Telugu", native: "తెలుగు" },
    { name: "Bengali", native: "বাংলা" },
    { name: "Marathi", native: "मराठी" },
  ];

  function selectLanguage(){
    if(language){
        navigate("/steps")
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl">
        {/* Top Message */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0a9396]">
            CareTech
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            CareTech in your language
          </h1>

          <p className="mt-2 text-gray-500">
            Choose your preferred language to continue
          </p>
        </div>

        {/* Language Selection */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-gray-700">
            Select Your Language
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {languages.map((lang) => {
              const isSelected = language === lang.name;
              return (
                <button
                  key={lang.name}
                  type="button"
                  onClick={() => setLanguage(lang.name)}
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
                      isSelected ? "text-white/80" : "text-gray-400"
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
          <p className="text-sm text-gray-500">Selected Language</p>

          <p className="mt-1 text-lg font-bold text-[#005f73]">
            {languages.find((lang) => lang.name === language)?.native}
          </p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            onClick={selectLanguage}
            type="button"
            className="w-full max-w-xs rounded-xl bg-[#0a9396] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#005f73] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0a9396]/40 focus:ring-offset-2 active:scale-[0.98]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
