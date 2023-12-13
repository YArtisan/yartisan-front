import React, { createContext, useContext, useState } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

//@ts-ignore
const DarkModeContext = createContext<IDarkModeContext>({});

export const useDarkModeState = () => {
  const context = useContext(DarkModeContext);
  return context;
};

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
