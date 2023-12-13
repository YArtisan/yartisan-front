import Button from "@atoms/Button";
import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import NavItem, { INavLink } from "./NavItem";

const navLinks: INavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact us" },
];

interface IProps {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

const Header = ({ isExpanded, setIsExpanded }: IProps) => {
  const pathname = window.location.pathname;
  const nbMessages = 2;
  const nbNotifications = 2;

  return (
    <nav className="w-full h-20 px-3 duration-200 flex items-center justify-between gap-5 fixed top-0 z-10 bg-white">
      <div className="flex items-center gap-2 min-[930px]:gap-20 h-full">
        <a href="/">
          <p className="text-2xl font-bold text-black h-fit">YARTISAN</p>
        </a>

        <ul
          className={`h-full overflow-hidden transition-[max-width,padding] duration-300 max-[930px]:left-0 max-[930px]:bg-primary max-[930px]:bg-opacity-90 max-[930px]:w-full max-[930px]:absolute max-[930px]:top-full max-[930px]:h-[calc(100vh-80px)] ${
            isExpanded
              ? "max-[930px]:max-w-[450px] max-[930px]:px-5"
              : "max-[930px]:max-w-[0px]"
          }`}
        >
          <div
            className={`flex min-[930px]:items-center min-[930px]:justify-center h-full ${
              isExpanded
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

      <div className="flex items-center justify-center gap-5">
        <div className="flex gap-1">
          <div
            className={`${
              nbMessages > 0
                ? "relative after:absolute after:top-0 after:right-0 after:rounded-full after:bg-red-600 after:w-2 after:h-2"
                : ""
            }`}
          >
            <BiSolidMessage size={25} />
          </div>
          <div
            className={`${
              nbNotifications > 0
                ? "relative after:absolute after:top-0 after:right-0 after:rounded-full after:bg-red-600 after:w-2 after:h-2"
                : ""
            }`}
          >
            <FaBell size={25} />
          </div>
          <BsGearFill size={25} />
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
  return (
    <div
      className={["flex gap-1 flex-wrap justify-center", className].join(" ")}
      {...props}
    >
      <Button template="secondary" invertColors>
        S'inscrire
      </Button>
      <Button template="secondary">Se connecter</Button>
    </div>
  );
};

export default Header;
