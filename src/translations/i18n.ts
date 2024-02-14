import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import artisanFilterFr from "../locales/translations/fr/artisanFilter.json";
import artisanFilterEn from "../locales/translations/en/artisanFilter.json";
import authenticationFr from "../locales/translations/fr/authentication.json";
import authenticationEn from "../locales/translations/en/authentication.json";
import navigationFr from "../locales/translations/fr/navigation.json";
import navigationEn from "../locales/translations/en/navigation.json";
import createArtisanFr from "../locales/translations/fr/createArtisan.json";
import createArtisanEn from "../locales/translations/en/createArtisan.json";
import headerFr from "../locales/translations/fr/header.json";
import headerEn from "../locales/translations/en/header.json";
import addressInputFr from "../locales/translations/fr/addressInput.json";
import addressInputEn from "../locales/translations/en/addressInput.json";
import daysFr from "../locales/translations/fr/days.json";
import daysEn from "../locales/translations/en/days.json";
import userFr from '../locales/translations/fr/user.json'
import userEn from '../locales/translations/en/user.json'
import expressionFr from '../locales/translations/fr/expression.json'
import expressionEn from '../locales/translations/en/expression.json'

i18n.use(initReactI18next).init({
    fallbackLng: "fr",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        fr: {
            expression: expressionFr,
            artisanFilter: artisanFilterFr,
            authentication: authenticationFr,
            navigation: navigationFr,
            createArtisan: createArtisanFr,
            header: headerFr,
            addressInput: addressInputFr,
            days: daysFr,
            user: userFr
        },
        en: {
            expression: expressionEn,
            artisanFilter: artisanFilterEn,
            authentication: authenticationEn,
            navigation: navigationEn,
            createArtisan: createArtisanEn,
            header: headerEn,
            addressInput: addressInputEn,
            days: daysEn,
            user: userEn
        },
    },
});

export default i18n;
