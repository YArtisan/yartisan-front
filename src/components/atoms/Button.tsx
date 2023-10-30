import { Template } from "@/types/types";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  template?: Template;
  invertColors?: boolean;
  children: React.ReactNode;
}

function Button({
  children,
  template,
  invertColors,
  className,
  ...props
}: IProps) {
  const getClassName = () => {
    const classNames = ["rounded-md duration-200 border-2 px-4 py-2 font-bold"];
    switch (template) {
      case "primary":
        if (invertColors) {
          classNames.push("bg-white border-primary text-primary");
        } else {
          classNames.push("bg-primary border-primary text-white");
        }
        break;
      case "secondary":
        if (invertColors) {
          classNames.push("bg-white border-secondary text-secondary");
        } else {
          classNames.push("bg-secondary border-secondary text-white");
        }
        break;
      case "dark":
        if (invertColors) {
          classNames.push("bg-white border-dark text-dark");
        } else {
          classNames.push("bg-dark border-dark text-white");
        }
        break;

      default:
        break;
    }

    if (className) classNames.push(className);

    return classNames.join(" ");
  };

  return (
    <button className={getClassName()} {...props}>
      {children}
    </button>
  );
}

export default Button;
