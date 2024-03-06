import { useEffect, useRef, useState } from "react";
import Notifications from "./Notifications";
import Settings from "./Settings";

type Menu = "settings" | "notifications" | "";

function Window({ menu, clear }: { menu: Menu; clear: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const currentMenuRef = useRef<Menu>("");
  const isInitializingRef = useRef<boolean>(false);

  useEffect(() => {
    isInitializingRef.current = true;
    currentMenuRef.current = menu;
  }, [menu]);

  const handleClick = (e: MouseEvent) => {
    const currentMenu = currentMenuRef.current;
    const isInitializing = isInitializingRef.current;

    // Si c'est le clic qui ouvre la fenêtre on ne clear pas
    if (isInitializing) {
      isInitializingRef.current = false;
      return;
    }

    if (!e.target || !currentMenu) {
      return;
    }
    
    // Si le clic est à l'extérieur de la div, on clear le menu
    if (ref.current && !ref.current.contains(e.target as Node)) {
      clear();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute top-full right-0 rounded-b-lg max-[400px]:w-full bg-white ${
        !!menu ? "p-2 shadow-xl" : ""
      }`}
    >
      {menu === "settings" && <Settings />}
      {menu === "notifications" && <Notifications />}
    </div>
  );
}

export default Window;
