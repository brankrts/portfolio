import React, { useContext, useState } from "react";
import { languageContext } from "../App";
import { en, tr } from "../localization/languages";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("tr"); // Default language is Turkish
  const { setCurrentLang } = useContext(languageContext);

  return (
    <button
      onClick={() => {
        if (selectedLanguage === "tr") {
          setSelectedLanguage("en");
          setCurrentLang(en);
        } else {
          setSelectedLanguage("tr");
          setCurrentLang(tr);
        }
      }}
      className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
    >
      {selectedLanguage === "tr" ? "Türkçe" : "English"}
    </button>
  );
};

export default LanguageSelector;
