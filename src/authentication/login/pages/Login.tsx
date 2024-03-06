import { ReactElement } from "react";
import { LoginForm } from "../components/LoginForm";
import { useLogin } from "../hooks/useLogin";

export const Login = (): ReactElement => {
 const { loginWithEmailAndPassword } = useLogin()

 return (
  <LoginForm className="w-1/2" {...{ onClick: loginWithEmailAndPassword }} />
 )
}