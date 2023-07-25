import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import zh from "./locales/zh.json";

i18next.use(initReactI18next).init({
  lng: "zh",
  resources: {
    zh: {
      translation: zh
    },
    en: {
      translation: en
    }
  }
});

export { i18next };
