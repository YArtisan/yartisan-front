import Button from "@atoms/Button";
import React, { useState } from "react";
import { FaBars, FaBell, FaSignOutAlt } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import NavItem from "./NavItem";
import Window from "@components/layouts/DefaultLayout/Header/Window/Window";
import { useNavLinks } from "@/navigation/hooks/useNavLinks";
import { useTranslation } from "react-i18next";
import { useAuthState } from "@/user/components/UserProvider";
import { signOut } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";
import { useNavigate } from "react-router-dom";

interface IProps {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

const Header = ({ isExpanded, setIsExpanded }: IProps) => {
  const { navLinks } = useNavLinks()
  type Menu = "settings" | "notifications" | "";
  const [openedMenu, setOpenedMenu] = useState<Menu>("");
  const pathname = window.location.pathname;
  const nbMessages = 2;
  const nbNotifications = 2;

  const toggleOpenMenu = (value: Menu) => {
    setOpenedMenu(openedMenu === value ? "" : value);
  };

  return (
    <nav className="w-full h-20 px-3 duration-200 flex items-center justify-between gap-5 fixed top-0 z-10 bg-white">
      {/* Logo and nav links */}
      <div className="flex items-center gap-2 min-[930px]:gap-20 h-full">
        <a href="/">
          <p className="text-2xl font-bold text-black h-fit">YARTISAN</p>
        </a>
        <ul
          className={`h-full overflow-hidden transition-[max-width,padding] duration-300 max-[930px]:left-0 max-[930px]:bg-primary max-[930px]:bg-opacity-90 max-[930px]:w-full max-[930px]:absolute max-[930px]:top-full max-[930px]:h-[calc(100vh-80px)] ${isExpanded
            ? "max-[930px]:max-w-[450px] max-[930px]:px-5"
            : "max-[930px]:max-w-[0px]"
            }`}
        >
          <div
            className={`flex min-[930px]:items-center min-[930px]:justify-center h-full ${isExpanded
              ? "max-[930px]:flex-col max-[930px]:gap-10 max-[930px]:py-5"
              : "max-[930px]:opacity-0"
              }`}
          >
            <AuthButtons className="min-[930px]:hidden mx-auto" />
            <div className="flex max-[930px]:flex-col max-[930px]:gap-2 min-[930px]:h-full">
              {navLinks.map((navItem, index) => {
                return (
                  <NavItem
                    {...navItem}
                    key={`nav-item-${index}`}
                    id={`nav-item-${index}`}
                    pagePath={pathname}
                    large={true}
                    level={1}
                  />
                );
              })}
            </div>
          </div>
        </ul>
      </div>

      {/* Boutons */}
      <div className="flex items-center justify-center gap-5 h-full">
        <div className="min-[400px]:relative flex items-center gap-1 h-full">
          <div
            className={`${nbMessages > 0
              ? "relative after:absolute after:top-0 after:right-0 after:rounded-full after:bg-red-600 after:w-2 after:h-2"
              : ""
              }`}
          >
            <BiSolidMessage
              size={25}
              className="duration-150 cursor-pointer hover:scale-125"
            />
          </div>
          <div
            className={`${nbNotifications > 0
              ? "relative after:absolute after:top-0 after:right-0 after:rounded-full after:bg-red-600 after:w-2 after:h-2"
              : ""
              }`}
          >
            <FaBell
              size={25}
              className="duration-150 cursor-pointer hover:scale-125"
              onClick={() => toggleOpenMenu("notifications")}
            />
          </div>
          <BsGearFill
            size={25}
            className="duration-150 cursor-pointer hover:scale-125"
            onClick={() => toggleOpenMenu("settings")}
          />
          <Window menu={openedMenu} />
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="min-[930px]:hidden"
        >
          <FaBars size={22} />
        </button>

        <AuthButtons className="max-[930px]:hidden" />
      </div>
    </nav>
  );
};

const AuthButtons = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { t } = useTranslation()
  const { connectedUser } = useAuthState()
  const navigate = useNavigate()

  return (
    <div
      className={["flex gap-1 flex-wrap justify-center", className].join(" ")}
      {...props}
    >
      {connectedUser != null
        ? (
          <div className="flex justify-center">
            <div className="self-center mx-2 text-white sm:text-black">{connectedUser?.email}</div>
            <Button onClick={() => {
              signOut(firebaseAuthentication)
              navigate('/login')
            }} template="secondary">
              <FaSignOutAlt />
            </Button>
          </div>
        )
        : (
          <>
            <Button onClick={() => { navigate('/register') }} template="secondary" invertColors>
              {t('authentication:register')}
            </Button>
            <Button onClick={() => { navigate('/login') }} template="secondary">{t('authentication:connect')}</Button>
          </>
        )
      }
    </div >
  );
};

export default Header;
