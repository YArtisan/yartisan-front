import React, { useState } from "react";
import Button from "@atoms/Button";
import { FaBell, FaSignOutAlt } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import Window from "@components/layouts/HeaderButtons/Window/Window";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/user/components/UserProvider";
import { signOut } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";

export const AuthButtons = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { connectedUser } = useAuthState();

  return (
    <div
      className={["flex gap-3 flex-wrap justify-center", className].join(" ")}
      {...props}
    >
      {connectedUser != null ? (
        <div className="flex justify-center">
          <div className="self-center mx-2 text-white sm:text-black">
            {connectedUser?.email}
          </div>
          <Button
            onClick={async () => {
              await signOut(firebaseAuthentication);
              navigate("/login");
            }}
          >
            <FaSignOutAlt />
          </Button>
        </div>
      ) : (
        <>
          <Button
            onClick={() => {
              navigate("/register");
            }}
            template="secondary"
            invertColors
          >
            {t("authentication:redirectToRegister")}
          </Button>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            template="secondary"
          >
            {t("authentication:redirectToConnect")}
          </Button>
        </>
      )}
    </div>
  );
};

export const OptionButtons = () => {
  type Menu = "settings" | "notifications" | "";
  const [openedMenu, setOpenedMenu] = useState<Menu>("");
  const nbMessages = 2;
  const nbNotifications = 2;

  const toggleOpenMenu = (value: Menu) => {
    setOpenedMenu(openedMenu === value ? "" : value);
  };

  return (
    <div className="min-[400px]:relative flex items-center gap-3 h-full">
      <div
        className={`${
          nbMessages > 0
            ? "relative after:absolute after:top-0 after:right-0 after:rounded-full after:bg-red-600 after:w-2 after:h-2"
            : ""
        }`}
      >
        <a href="/chat">
          <BiSolidMessage
            size={25}
            className="duration-150 cursor-pointer hover:scale-125"
          />
        </a>
      </div>
      <div
        className={`${
          nbNotifications > 0
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
      <Window menu={openedMenu} clear={() => setOpenedMenu("")} />
    </div>
  );
};
