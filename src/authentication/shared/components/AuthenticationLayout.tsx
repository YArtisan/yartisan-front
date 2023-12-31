import { ReactElement, ReactNode } from "react";

interface Props {
 children: ReactNode
}

export const AuthenticationLayout = ({ children }: Props): ReactElement => {
 return (
  <div className="h-screen">
   <div className="h-2/3 bg-tertiary w-full">
    <div className="ml-10 pt-10 font-bold text-lg">Yartisan</div>
   </div>
   <div className="h-1/3 bg-white w-full"></div>
   <div className="absolute w-full h-full top-0">
    {children}
   </div>
  </div>
 )
}