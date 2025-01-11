import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHero from "../src/locales/languages/en/hero.json";
import enNavbar from "./locales/languages/en/navbar.json";
import enProjects from "./locales/languages/en/projects.json";
import enTechnologies from "./locales/languages/en/technologies.json";
import enAbout from "./locales/languages/en/about.json";
import enContact from "./locales/languages/en/contact.json";

import trHero from "./locales/languages/tr/hero.json";
import trNavbar from "./locales/languages/tr/navbar.json";
import trProjects from "./locales/languages/tr/projects.json";
import trTechnologies from "./locales/languages/tr/technologies.json";
import trAbout from "./locales/languages/tr/about.json";
import trContact from "./locales/languages/tr/contact.json";

const resources = {
  en: {
    translation: {
      hero: enHero,
      navbar: enNavbar,
      projects: enProjects,
      technologies: enTechnologies,
      about: enAbout,
      contact: enContact,
    },
  },
  tr: {
    translation: {
      hero: trHero,
      navbar: trNavbar,
      projects: trProjects,
      technologies: trTechnologies,
      about: trAbout,
      contact: trContact,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
