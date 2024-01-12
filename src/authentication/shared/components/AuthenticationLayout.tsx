import AuthHeader from "@/authentication/shared/components/AuthHeader";
import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AuthenticationLayout = ({ children }: Props): ReactElement => {
  return (
    <div className="h-screen">
      <AuthHeader />
      <div className="h-2/3 bg-primary w-full">
      </div>
      <div className="h-1/3 bg-white w-full"></div>
      <main className="absolute w-full h-full top-0">{children}</main>
    </div>
  );
};
