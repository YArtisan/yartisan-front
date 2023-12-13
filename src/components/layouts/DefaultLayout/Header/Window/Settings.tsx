// import { useDarkModeState } from "@/context/DarkModeContext";
// import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useLanguageState } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";

function Settings() {
  const { t } = useTranslation();
  // const { darkMode, toggleDarkMode } = useDarkModeState();
  const { language, changeLanguage } = useLanguageState();

  // const DarkModeToggler = darkMode ? MdToggleOn : MdToggleOff;

  return (
    <div className="flex flex-col gap-2 max-[400px]:w-full w-40">
      {/* <div
        className="flex items-center gap-2 font-bold rounded duration-150 hover:brightness-95 cursor-pointer bg-white"
        onClick={toggleDarkMode}
      >
        <DarkModeToggler size={25} />
        <p>{t("header:darkMode")}</p>
      </div> */}
      <div className="flex items-center gap-2 font-bold">
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
        <p>{t("header:language")}</p>
      </div>
    </div>
  );
}

export default Settings;
