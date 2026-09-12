import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiActivity,
  FiHeart,
  FiWind,
  FiUser,
  FiCpu,
  FiDroplet,
  FiSun,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const Select = () => {
  const navigate = useNavigate();

  const domains = [
    {
      title: "General Medicine",
      subtitle: "Primary Care",
      description: "Fever, general complaints, hypertension, diabetes",
      icon: FiActivity,
    },
    {
      title: "Gastroenterology",
      subtitle: "Digestive Health",
      description: "Abdominal pain, acidity, indigestion, digestive problems",
      icon: FiDroplet,
    },
    {
      title: "Cardiology",
      subtitle: "Heart Health",
      description: "Chest pain, hypertension, heart disease",
      icon: FiHeart,
    },
    {
      title: "Pulmonology",
      subtitle: "Respiratory Health",
      description: "Cough, asthma, breathing problems",
      icon: FiWind,
    },
    {
      title: "Orthopedics",
      subtitle: "Musculoskeletal",
      description: "Joint pain, back pain, arthritis, body aches",
      icon: FiActivity,
    },
    {
      title: "Neurology",
      subtitle: "Nervous System",
      description: "Headache, dizziness, seizures, neurological symptoms",
      icon: FiCpu,
    },
    {
      title: "Gynecology",
      subtitle: "Women's Health",
      description: "Menstrual, pregnancy, reproductive-health concerns",
      icon: FiUser,
    },
    {
      title: "Endocrinology",
      subtitle: "Hormonal & Metabolic",
      description: "Diabetes, thyroid and metabolic problems",
      icon: FiSun,
    },
    {
      title: "Dermatology",
      subtitle: "Skin Health",
      description: "Skin diseases and common skin complaints",
      icon: FiShield,
    },
    {
      title: "Urology / Nephrology",
      subtitle: "Urinary & Kidney Health",
      description: "Urinary and kidney-related problems",
      icon: FiDroplet,
    },
  ];

  function handleSelect(domain) {
    console.log("Selected domain:", domain);
    navigate("/mode")
  }

  return (
    <div className="min-h-screen w-full from-[#f2fbfb] via-white to-[#e8f6f7] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="text-3xl font-bold tracking-tight text-[#005f73]">
              CareTech +
            </span>
          </div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a9396]">
            Personalized Healthcare
          </span>

          <h1 className="mt-3 text-3xl font-bold text-[#073b4c] md:text-5xl">
            Choose Your Medical Domain
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Select the healthcare domain that best matches your health concern.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <button
                key={domain.title}
                type="button"
                onClick={() => handleSelect(domain.title)}
                className="relative flex min-h-[25vh] flex-col overflow-hidden rounded-2xl border border-[#d8eeee] bg-white p-6 text-left shadow-sm hover:-translate-y-2
hover:shadow-xl"
              >
                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f6f6] text-[#005f73]">
                  <Icon size={27} />
                </div>

                {/* Text */}
                <div className="relative flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0a9396]">
                    {domain.subtitle}
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-[#073b4c]">
                    {domain.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {domain.description}
                  </p>
                </div>

                {/* Select */}
                <div className="relative mt-5 flex items-center gap-2 text-sm font-semibold text-[#005f73]">
                  <span>Select Domain</span>

                  <FiArrowRight size={17} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
