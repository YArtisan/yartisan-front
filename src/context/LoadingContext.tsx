import React, { createContext, useContext, useState } from "react";

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

//@ts-ignore
const LoadingContext = createContext<ILoadingContext>({});

export const useLoadingState = () => {
  const context = useContext(LoadingContext);
  return context;
};

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
