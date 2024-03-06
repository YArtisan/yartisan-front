import { ReactElement, useState } from "react";

interface Props {
 className?: string
 setCode: (newValue: string) => void
}

export const DigitCodeInput = ({ setCode, className = '' }: Props): ReactElement => {
 const [codeList, setCodeList] = useState(['', '', '', ''])

 const handleInputChange = (newValue: string, index: number): void => {
  let codeListCopy = structuredClone(codeList)
  codeListCopy[index] = newValue
  setCodeList(codeListCopy)
  setCode(codeListCopy.join(''))
 };

 return (
  <div className={`flex justify-center ${className}`}>
   {[0, 1, 2, 3].map((index) => (
    <input
     maxLength={1}
     key={index}
     className="m-1 rounded-lg text-center text-2xl w-16 h-16 focus:border-blue-400 focus:outline-none border-gray-200 border-2"
     type="text"
     value={codeList[index]}
     onChange={(e) => { handleInputChange(e.target.value, index) }}
    />
   ))}
  </div>
 )
}