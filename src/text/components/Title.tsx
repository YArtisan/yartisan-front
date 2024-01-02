import { ReactElement, ReactNode } from "react";

interface Props {
 children: ReactNode
 className?: string
}

export const Title = ({ children, className = '' }: Props): ReactElement => {
 return (
  <div className={`text-5xl flex font-semibold${className}`}>{children}</div>
 )
}