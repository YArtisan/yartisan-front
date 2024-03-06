import React from "react";
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import { useNavLinks } from "@/navigation/hooks/useNavLinks";
import { AuthButtons, OptionButtons } from "../../HeaderButtons/HeaderButtons";
import { Link } from "react-router-dom";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

const DefaultHeader = ({ isExpanded, setIsExpanded, className, ...props }: IProps) => {
  const { navLinks } = useNavLinks();
  const pathname = window.location.pathname;

  return (
    <nav
      {...props}
      className={[
        "w-full h-16 px-3 duration-200 flex items-center justify-between gap-5 fixed top-0 z-10 bg-white",
        className,
      ].join(" ")}
    >
      {/* Logo and nav links */}
      <div className="flex items-center gap-2 min-[1025px]:gap-20 h-full">
        <Link to="/">
          <p className="text-2xl font-bold text-black h-fit">YARTISAN</p>
        </Link>

        <ul
          className={`h-full overflow-hidden transition-[max-width,padding] duration-300 max-[1025px]:left-0 max-[1025px]:bg-primary max-[1025px]:bg-opacity-90 max-[1025px]:w-full max-[1025px]:absolute max-[1025px]:top-full max-[1025px]:h-[calc(100vh-80px)] ${
            isExpanded
              ? "max-[1025px]:max-w-[450px] max-[1025px]:px-5"
              : "max-[1025px]:max-w-[0px]"
          }`}
        >
          <div
            className={`flex min-[1025px]:items-center min-[1025px]:justify-center h-full ${
              isExpanded
                ? "max-[1025px]:flex-col max-[1025px]:gap-10 max-[1025px]:py-5"
                : "max-[1025px]:opacity-0"
            }`}
          >
            <AuthButtons className="min-[1025px]:hidden mx-auto" />
            <div className="flex max-[1025px]:flex-col max-[1025px]:gap-2 min-[1025px]:h-full">
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
      <div className="flex items-center justify-center gap-6 h-full">
        <OptionButtons />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="min-[1025px]:hidden"
        >
          <FaBars size={22} />
        </button>

        <AuthButtons className="max-[1025px]:hidden" />
      </div>
    </nav>
  );
};

export default DefaultHeader;
