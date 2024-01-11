import { firebaseAuthentication } from "@/api/service/firebase"
import axios from "axios"
import { signInWithEmailAndPassword } from "firebase/auth"

interface Return {
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>
}

export const useLogin = (): Return => {
  const loginWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(firebaseAuthentication, email, password)
    const token = await firebaseAuthentication?.currentUser?.getIdToken()
    const { data } = await axios
      .post(`${import.meta.env.VITE_YARTISAN_API_URL}/users/signin`, {}, { headers: { token } })
    console.log({ data })
  }

  return {
    loginWithEmailAndPassword
  }
}