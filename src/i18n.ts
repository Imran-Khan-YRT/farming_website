// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "../src/assets/combined/en/translation.json";
import translationFr from "../src/assets/combined/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
