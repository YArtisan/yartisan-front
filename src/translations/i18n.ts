
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import artisanFilterFr from '../locales/translations/fr/artisanFilter.json'
import artisanFilterEn from '../locales/translations/en/artisanFilter.json'
import authenticationFr from '../locales/translations/fr/authentication.json'
import authenticationEn from '../locales/translations/en/authentication.json'
import navigationFr from '../locales/translations/fr/navigation.json'
import navigationEn from '../locales/translations/en/navigation.json'
import userFr from '../locales/translations/fr/user.json'
import userEn from '../locales/translations/en/user.json'

i18n
 .use(initReactI18next)
 .init({
  fallbackLng: 'fr',
  debug: true,
  interpolation: {
   escapeValue: false,
  },
  resources: {
   fr: {
    artisanFilter: artisanFilterFr,
    authentication: authenticationFr,
    navigation: navigationFr,
    user: userFr
   },
   en: {
    artisanFilter: artisanFilterEn,
    authentication: authenticationEn,
    navigation: navigationEn,
    user: userEn
   }
  }
 })

export default i18n