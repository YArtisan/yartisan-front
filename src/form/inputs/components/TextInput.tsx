import { ReactElement } from "react";

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
 error?: string
 value?: string
 onChange?: (newValue: string) => void
}

export const TextInput = (props: TextInputProps): ReactElement => {
 const { className, error, onChange = () => { }, value = '', ...propsWithoutClassName } = props

 return (
  <>
   <input {...{ onChange: (e) => { onChange(e.target.value) }, value }} className={`focus:border-blue-400 focus:outline-none border-gray-200 border-2 rounded-lg p-2 ${className}`} {...propsWithoutClassName} />
   {error !== undefined ? <p className="text-red-500 text-xs italic">{error}</p> : null}
  </>
 )
}
