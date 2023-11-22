import { useState } from "react";
import Header from "./Header/Header";

interface IProps {
  children: React.ReactNode;
}

function DefaultLayout({ children }: IProps) {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <div>
      <Header isExpanded={navbarExpanded} setIsExpanded={setNavbarExpanded} />
      <main className={`pt-20 pb-5 ${navbarExpanded ? "" : ""}`}>
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;
