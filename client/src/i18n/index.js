import i18n from "i18next";
import en from "./langs/en";
import tr from "./langs/tr";
import { initReactI18next } from "react-i18next";
import { LANG_EN, CURRENT_LANG, LANG_TR } from "../utils/constants";

i18n.use(initReactI18next).init({
  lng: "tr",
  fallbackLng: LANG_TR,
  resources: {
    en,
    tr,
  },
});

export default i18n;
