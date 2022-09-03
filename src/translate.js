import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import cn from './language/zh-cn.json'
import en from './language/en.json'


const resources = {
  "zh-CN": {
    translation: cn
  },
  "en-US": {
    translation: en
  },
};
i18n.use(LanguageDetector)
.use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en-US",
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    }
  })


export default i18n