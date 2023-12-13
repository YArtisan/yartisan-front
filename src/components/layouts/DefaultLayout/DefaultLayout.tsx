import { useState } from "react";
import Header from "./Header/Header";
import { useDarkModeState } from "@/context/DarkModeContext";

interface IProps {
  children: React.ReactNode;
}

function DefaultLayout({ children }: IProps) {
  const { darkMode } = useDarkModeState();
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <div>
      <Header isExpanded={navbarExpanded} setIsExpanded={setNavbarExpanded} />
      <main className="pt-20 pb-5 dark:bg-black">{children}</main>
    </div>
  );
}

export default DefaultLayout;
