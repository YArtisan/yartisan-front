import { ReactElement, ReactNode } from "react";
import { WelcomingPresentation } from "./WelcomingPresentation";

interface Props {
 children: ReactNode
}

export const WelcomingLayout = ({ children }: Props): ReactElement => {
 return (
  <div className="flex justify-center items-center w-full h-full">
   <WelcomingPresentation className="w-1/2 ml-10 hidden lg:flex" />
   {children}
  </div>
 )
}