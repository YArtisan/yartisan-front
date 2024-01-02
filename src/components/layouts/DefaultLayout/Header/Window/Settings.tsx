import { useDarkModeState } from "@/context/DarkModeContext";
import { MdToggleOff, MdToggleOn } from "react-icons/md";

function Settings() {
  const { darkMode, toggleDarkMode } = useDarkModeState();

  const DarkModeToggler = darkMode ? MdToggleOn : MdToggleOff;

  return (
    <div className="flex flex-col gap-2 max-[400px]:w-full w-40">
      <div
        className="flex items-center gap-2 font-bold rounded duration-150 hover:brightness-95 cursor-pointer bg-white"
        onClick={toggleDarkMode}
      >
        <DarkModeToggler size={25} />
        <p>Dark mode</p>
      </div>
      <div className="flex items-center gap-2 font-bold rounded duration-150 hover:brightness-95 cursor-pointer bg-white">
        <p>Langue</p>
      </div>
    </div>
  );
}

export default Settings;
