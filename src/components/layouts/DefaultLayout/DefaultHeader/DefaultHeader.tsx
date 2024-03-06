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
        "w-full h-20 px-3 duration-200 flex items-center justify-between gap-5 fixed top-0 z-10 bg-white",
        className,
      ].join(" ")}
    >
      {/* Logo and nav links */}
      <div className="flex items-center gap-2 min-[975px]:gap-20 h-full">
        <Link to="/">
          <p className="text-2xl font-bold text-black h-fit">YARTISAN</p>
        </Link>

        <ul
          className={`h-full overflow-hidden transition-[max-width,padding] duration-300 max-[975px]:left-0 max-[975px]:bg-primary max-[975px]:bg-opacity-90 max-[975px]:w-full max-[975px]:absolute max-[975px]:top-full max-[975px]:h-[calc(100vh-80px)] ${
            isExpanded
              ? "max-[975px]:max-w-[450px] max-[975px]:px-5"
              : "max-[975px]:max-w-[0px]"
          }`}
        >
          <div
            className={`flex min-[975px]:items-center min-[975px]:justify-center h-full ${
              isExpanded
                ? "max-[975px]:flex-col max-[975px]:gap-10 max-[975px]:py-5"
                : "max-[975px]:opacity-0"
            }`}
          >
            <AuthButtons className="min-[975px]:hidden mx-auto" />
            <div className="flex max-[975px]:flex-col max-[975px]:gap-2 min-[975px]:h-full">
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
          className="min-[975px]:hidden"
        >
          <FaBars size={22} />
        </button>

        <AuthButtons className="max-[975px]:hidden" />
      </div>
    </nav>
  );
};

export default DefaultHeader;
