import DarkModeProvider from "@/context/DarkModeContext";
import LanguageProvider from "@/context/LanguageContext";
import LoadingProvider from "@/context/LoadingContext";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <DarkModeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </DarkModeProvider>
    </LoadingProvider>
  );
}

export default Providers;
