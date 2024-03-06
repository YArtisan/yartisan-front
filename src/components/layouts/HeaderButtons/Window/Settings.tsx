import "flag-icons/css/flag-icons.min.css";
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
        <p>{t("header:language")}</p>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option className="fi fi-gr" value="fr">
            FR
          </option>
          <option value="en">EN</option>
        </select>
        {language === "fr" && <span className="fi fi-fr"></span>}
        {language === "en" && <span className="fi fi-gb"></span>}
      </div>
    </div>
  );
}

export default Settings;
