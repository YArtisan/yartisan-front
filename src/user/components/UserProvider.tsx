import { ReactNode, createContext, useContext, useState } from "react"
import { User } from "../types/User";

interface AuthContext {
 connectedUser?: User;
 setConnectedUser: (connectedUser?: User) => void;
}

const AuthStateContext = createContext<AuthContext>({
 setConnectedUser: () => { }
})

export const useAuthState = () => useContext(AuthStateContext)

export const UserProvider = ({
 children,
}: {
 children: ReactNode
}) => {
 const [connectedUser, setConnectedUser] = useState<User | undefined>(undefined);

 return (
  <AuthStateContext.Provider value={{ connectedUser, setConnectedUser }}>
   {children}
  </AuthStateContext.Provider>
 );
}