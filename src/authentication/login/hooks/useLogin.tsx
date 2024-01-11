import { firebaseAuthentication } from "@/api/service/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

interface Return {
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>
}

export const useLogin = (): Return => {
  const navigate = useNavigate()

  const loginWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(firebaseAuthentication, email, password)
    navigate('/')
  }

  return {
    loginWithEmailAndPassword
  }
}