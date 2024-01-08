import { ReactElement } from "react";

export interface Props {
 title: string
 inputId: string
 value: string
 onChange: (newValue: string) => void
 checked: boolean
}

export const RadioSwitch = ({ title, inputId, value, onChange, checked }: Props): ReactElement => {
 return (
  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
   <div className="flex items-center ps-3">
    <input {...{ value, id: inputId, name: inputId, checked, onChange: (e) => onChange(e.target.value) }} type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
    <label for={inputId} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
     {title}
    </label>
   </div>
  </li>
 )
}