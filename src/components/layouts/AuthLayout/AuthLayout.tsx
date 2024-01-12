import AuthHeader from "../../../authentication/shared/components/AuthHeader";

interface IProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IProps) {
  return (
    <div
      className={[
        "relative bg-primary h-screen",
        "before:absolute before:left-0 before:bottom-0 before:w-full before:h-2/5 before:bg-white before:pointer-events-none",
      ].join(" ")}
    >
      <AuthHeader />
      <main className="p-2 relative pt-24 pb-6 z-[1]">{children}</main>
    </div>
  );
}

export default AuthLayout;
