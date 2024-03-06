import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageContext {
  language: string;
  changeLanguage: (value: string) => void;
}

//@ts-ignore
const LanguageContext = createContext<ILanguageContext>({});

export const useLanguageState = () => {
  const context = useContext(LanguageContext);
  return context;
};

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("fr");

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setLanguage(value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
