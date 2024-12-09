import English from "./languages/Eng";
import French from "./languages/Fr";
import Deutsche from "./languages/De";
// === import additional language files here === //

// input: language code in string
// returns an object of translated strings in the language
export const getTranslations = (langCode) => {
  if (langCode === "") return English;
  if (langCode === "en") return English;
  if (langCode === "Fr") return French;
  if (langCode === "De") return Deutsche;
  // === add conditionals here for additional languages here === //
};

// input: language code in string & phrase key in string
// returns an corresponding phrase value in string
export const localize = (langCode, phraseKey) => {
  const lang = getTranslations(langCode);
  return lang[phraseKey];
};
