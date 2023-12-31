import { ReactElement, ReactNode } from "react";

interface Props {
 children: ReactNode
 className?: string
 cardClassName?: string
}

export const AuthenticationFormCard = ({ children, className = '', cardClassName = '' }: Props): ReactElement => {
 return (
  <div className={`h-full flex sm:items-center items-end justify-center ${className}`}>
   <div className={`bg-white rounded-3xl w-2/3 p-8 shadow-lg min-w-[400px] flex flex-col justify-center ${cardClassName}`}>
    {children}
   </div>
  </div>
 )
}