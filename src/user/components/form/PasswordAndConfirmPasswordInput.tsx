import { PasswordInput } from "@/user/components/form/PasswordInput";
import { ReactElement, useState } from "react";
import { ConfirmPasswordInput } from "./ConfirmPasswordInput";

interface Props {
 password: string
 setPassword: (newValue: string) => void
}

export const PasswordAndConfirmPasswordInput = ({ password, setPassword }: Props): ReactElement => {
 const [confirmPassword, setConfirmPassword] = useState('')

 return (
  <>
   <PasswordInput {...{ value: password, onChange: setPassword, container: { className: 'mb-4' } }} />
   <ConfirmPasswordInput {...{ value: confirmPassword, onChange: setConfirmPassword }} />
  </>
 )
}