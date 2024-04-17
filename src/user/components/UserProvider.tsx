import { ReactNode, createContext, useContext, useState } from "react";
import { ArtisanUser, User } from "../types/User";

interface AuthContext {
  connectedUser?: User | ArtisanUser;
  setConnectedUser: (connectedUser?: User | ArtisanUser) => void;
}

const AuthStateContext = createContext<AuthContext>({
  setConnectedUser: () => {},
});

export const useAuthState = () => useContext(AuthStateContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [connectedUser, setConnectedUser] = useState<
    User | ArtisanUser | undefined
  >(undefined);

  return (
    <AuthStateContext.Provider value={{ connectedUser, setConnectedUser }}>
      {children}
    </AuthStateContext.Provider>
  );
};
