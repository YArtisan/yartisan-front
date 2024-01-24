import { useState } from "react";
import DefaultHeader from "./DefaultHeader/DefaultHeader";
import { useDarkModeState } from "@/context/DarkModeContext";

interface IProps {
  children: React.ReactNode;
  bgBlue?: boolean;
}

function DefaultLayout({ children, bgBlue }: IProps) {
  const { darkMode } = useDarkModeState();
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <div className="h-screen">
      <DefaultHeader
        isExpanded={navbarExpanded}
        setIsExpanded={setNavbarExpanded}
        className={`${bgBlue ? "!bg-card" : ""}`}
      />
      <main
        className={`pt-20 pb-5 dark:bg-black h-full ${bgBlue ? "bg-card" : ""}`}
      >
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;
