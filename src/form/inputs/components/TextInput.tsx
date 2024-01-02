import { ReactElement } from "react";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 error?: string
}

export const TextInput = (props: TextInputProps): ReactElement => {
 const { className, error, ...propsWithoutClassName } = props

 return (
  <>
   <input className={`focus:border-blue-400 focus:outline-none border-gray-200 border-2 rounded-lg p-2 ${className}`} {...propsWithoutClassName} />
   {error !== undefined ? <p className="text-red-500 text-xs italic">{error}</p> : null}
  </>
 )
}
