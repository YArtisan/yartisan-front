import { ReactElement } from "react";
import { RadioSwitch } from "./RadioSwitch";
import { SwitchRadioOption } from "../types/SwitchRadioOption";

interface Props {
 options: Array<SwitchRadioOption>
 className?: string
 selectedValue: string
 setSelectedValue: (newValue: string) => void
}

export const RadioSwitchGroupInput = ({ options, className, selectedValue, setSelectedValue }: Props): ReactElement => {
 return (
  <ul className={`items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}>
   {options.map(({ title, inputId, value }) =>
    <RadioSwitch
     {...{ title, inputId, value, checked: value === selectedValue, onChange: (newValue) => { setSelectedValue(newValue) } }}
    />)
   }
  </ul >
 )
}