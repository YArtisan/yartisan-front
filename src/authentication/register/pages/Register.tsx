import { ReactElement } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { useRegister } from "../hooks/useRegister";

export const Register = (): ReactElement => {
 const { register } = useRegister()

 return (
  <RegisterForm onClick={register} className="w-1/2" />
 )
}