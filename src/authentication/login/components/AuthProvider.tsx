import { ReactElement, ReactNode } from "react";
import { useOnAuthStateChanged } from "../hooks/useOnAuthStateChanged";

export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
 useOnAuthStateChanged()

 return (
  <>
   {children}
  </>
 )
}