import { useState } from "react";
import DefaultHeader from "./DefaultHeader/DefaultHeader";

interface IProps {
  children: React.ReactNode;
}

function DefaultLayout ({ children }: IProps) {
  const { darkMode } = useDarkModeState();
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <div>
      <DefaultHeader isExpanded={navbarExpanded} setIsExpanded={setNavbarExpanded} />
      <main className="pt-20 pb-5 dark:bg-black">{children}</main>
    </div>
  );
}

export default DefaultLayout;
