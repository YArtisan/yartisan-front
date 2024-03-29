import { ReactElement, ReactNode } from "react";

interface Props {
 children: ReactNode
 className?: string
 cardClassName?: string
}

export const AuthenticationFormCard = ({ children, className = '', cardClassName = '' }: Props): ReactElement => {
 return (
  <div className={`h-full pt-16 pb-5 flex sm:items-center items-end justify-center w-1/2 ${className}`}>
   <div className={`overflow-y-auto bg-white rounded-3xl p-8 shadow-lg min-w-[700px] flex flex-col justify-start ${cardClassName}`}>
    {children}
   </div>
  </div>
 )
}