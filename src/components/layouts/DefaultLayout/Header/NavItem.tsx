import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export interface INavLink {
  href: string;
  label: string;
  dropdown?: INavLink[];
}

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
      className="relative min-[910px]:h-full flex items-center"
    >
      <a
        className={`${
          active
            ? "text-white bg-secondary max-[910px]:bg-secondary max-[910px]:text-white max-[910px]:rounded-md"
            : "hover:bg-gray-200 max-[910px]:hover:text-secondary max-[910px]:text-black"
        } relative px-2 w-full h-full font-bold  text-xl min-[910px]:text-lg duration-200 flex items-center gap-1 after:absolute after:bottom-0 after:h-1`}
        href={href}
      >
        {label}
        {dropdown && large && (
          <>{isHovering ? <FaChevronUp /> : <FaChevronDown />}</>
        )}
      </a>
      {dropdown && (
        <ul
          className={`${
            large
              ? `${
                  isHovering ? "" : "opacity-0 pointer-events-none"
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
