import { INavLink } from "@/types/interfaces";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

interface INavItemProps extends INavLink, React.HTMLAttributes<HTMLLIElement> {
  pagePath: string;
  level: number;
  large?: boolean;
}

const NavItem = ({
  href,
  label,
  dropdown,
  pagePath,
  large,
  level,
  ...props
}: INavItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const path = pagePath
    .split("/")
    .slice(0, level + 1)
    .join("/");
  const active = href === path;

  return (
    <li
      {...props}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-[930px]:h-full flex items-center"
    >
      <Link
        className={`${active
          ? "text-white bg-secondary max-[930px]:bg-secondary max-[930px]:text-white max-[930px]:rounded-md"
          : "hover:bg-gray-200 max-[930px]:hover:text-secondary max-[930px]:text-black"
          } relative px-2 w-full h-full font-bold  text-xl min-[930px]:text-lg duration-200 flex items-center gap-1 after:absolute after:bottom-0 after:h-1`}
        to={href}
      >
        {label}
        {dropdown && large && (
          <>{isHovering ? <FaChevronUp /> : <FaChevronDown />}</>
        )}
      </Link>
      {dropdown && (
        <ul
          className={`${large
            ? `${isHovering ? "" : "opacity-0 pointer-events-none"
            } absolute bg-black top-full left-0 p-2 w-full`
            : ""
            } pl-4`}
        >
          {dropdown.map((navItem, index) => (
            <NavItem
              {...navItem}
              key={props.id + "-" + index}
              id={props.id + "-" + index}
              pagePath={pagePath}
              large={large}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
