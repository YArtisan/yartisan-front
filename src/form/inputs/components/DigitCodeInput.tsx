import { ReactElement } from "react";

interface Props {
 className?: string
}

export const DigitCodeInput = ({ className = '' }: Props): ReactElement => {
 return (
  <div className={`flex justify-center ${className}`}>
   <input className="m-1 rounded-lg text-center text-2xl w-16 h-16 focus:border-blue-400 focus:outline-none border-gray-200 border-2" type="text" />
   <input className="m-1 rounded-lg text-center text-2xl w-16 h-16 focus:border-blue-400 focus:outline-none border-gray-200 border-2" type="text" />
   <input className="m-1 rounded-lg text-center text-2xl w-16 h-16 focus:border-blue-400 focus:outline-none border-gray-200 border-2" type="text" />
   <input className="m-1 rounded-lg text-center text-2xl w-16 h-16 focus:border-blue-400 focus:outline-none border-gray-200 border-2" type="text" />
  </div>
 )
}