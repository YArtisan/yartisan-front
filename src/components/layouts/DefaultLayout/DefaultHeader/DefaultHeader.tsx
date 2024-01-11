import React from "react";
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import { useNavLinks } from "@/navigation/hooks/useNavLinks";
import { AuthButtons, OptionButtons } from "../../HeaderButtons/HeaderButtons";

interface IProps {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

const DefaultHeader = ({ isExpanded, setIsExpanded }: IProps) => {
  const { navLinks } = useNavLinks();
  const pathname = window.location.pathname;

  return (
    <nav className="w-full h-20 px-3 duration-200 flex items-center justify-between gap-5 fixed top-0 z-10 bg-white">
      {/* Logo and nav links */}
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

      {/* Boutons */}
      <div className="flex items-center justify-center gap-5 h-full">
        <OptionButtons />

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

export default DefaultHeader;
