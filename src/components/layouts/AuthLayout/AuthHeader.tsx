import { OptionButtons } from "../HeaderButtons/HeaderButtons";

function AuthHeader() {
  return (
    <nav className="w-full h-14 px-3 duration-200 flex items-center justify-between gap-5 fixed top-0 z-10 backdrop-blur-sm">
      <a href="/">
        <p className="text-2xl font-bold text-secondary h-fit">YARTISAN</p>
      </a>
      <OptionButtons />
    </nav>
  );
}

export default AuthHeader;
