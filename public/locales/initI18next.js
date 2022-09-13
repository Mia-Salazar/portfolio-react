// tslint:disable-next-line:no-var-requires
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./en/translation.json"

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
  },
});

export const initI18next = i18next;