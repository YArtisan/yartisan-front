import React, { createContext, useContext, useState } from "react";

interface ILanguageContext {
  language: string;
  setLanguage: (value: string) => void;
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
  const [language, setLanguage] = useState("");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
