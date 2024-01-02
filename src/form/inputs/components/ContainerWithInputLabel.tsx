import { ReactElement, ReactNode } from "react";
import { DivProps } from "@styles/types/DivProps";

interface Props {
 label: string
 children: ReactNode
 container?: DivProps
}

export const ContainerWithInputLabel = ({ label, children, container }: Props): ReactElement => {
 return (
  <div {...container}>
   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">
    {label}
   </label>
   {children}
  </div>
 )
}