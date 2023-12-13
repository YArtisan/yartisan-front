interface IProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IProps) {
  return (
    <div
      className={[
        "p-2 relative bg-primary h-screen",
        "before:absolute before:left-0 before:bottom-0 before:w-full before:h-2/5 before:bg-white before:pointer-events-none",
      ].join(" ")}
    >
      <a href="/">
        <p className="absolute top-2 left-2 text-2xl font-bold text-secondary h-fit">YARTISAN</p>
      </a>
      <main className="relative pt-20 z-[1]">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;
