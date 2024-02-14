import { ReactElement } from "react"
import { useEmailAndPasswordRegister } from "../hooks/useEmailAndPasswordRegister"
import { RegisterForm } from "../components/RegisterForm"

export const Register = (): ReactElement => {
  const { register } = useEmailAndPasswordRegister()

  return (
    <RegisterForm onClick={register}></RegisterForm>
  )
}
