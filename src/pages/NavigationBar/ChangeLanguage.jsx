import React, { useState, useContext } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { localize } from "../../Translation";
import { CartContext } from "../../App";

const ChangeLanguage = () => {
  const { setLanguage } = useContext(CartContext);
  let { language } = useContext(CartContext);

  const [lang, setLang] = useState(() => "en");
  const [showAllLanguage, setshowAllLanguage] = useState(false);

  const handleLanguageChange = (selectedLang) => {
    setLang(selectedLang);
    setshowAllLanguage(false);
    setLanguage(selectedLang);
  };

  const languages = [
    { code: "en", label: "English", flagUrl: "../images/Flag_UK.png" },
    { code: "De", label: "Deutsch", flagUrl: "../images/Flag_De.png" },
    { code: "Fr", label: "French", flagUrl: "../images/Flag_Fr.png" },
    // Add other languages as needed
  ];

  return (
    <FormControl>
      {/* <label id="language-select-label">{localize(language, "Language")}</label> */}
      <Select
        labelId="language-select-label"
        id="language-select"
        value={lang}
        label="Language"
        onClick={() => setshowAllLanguage(true)}
        onClose={() => setshowAllLanguage(false)}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            <div className=" w-full  gap-2 sm:none md:flex">
              <img
                src={language.flagUrl}
                alt={language.code}
                className="w-7 h-5"
              />
              <Box
                component="span"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {language.label}
              </Box>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ChangeLanguage;
