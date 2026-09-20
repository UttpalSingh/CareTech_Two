import React, {
  createContext,
  useContext,
  useState,
} from "react";

import en from "../translations/en";
import hi from "../translations/hi";

const translations = {
  English: en,
  Hindi: hi,
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("caretech-language") || "English"
  );

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("caretech-language", newLanguage);
  };

  const t = (key) => {
    const keys = key.split(".");

    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};