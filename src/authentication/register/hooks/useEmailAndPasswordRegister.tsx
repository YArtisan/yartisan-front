import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";
import { useNavigate } from "react-router-dom";

export const useEmailAndPasswordRegister = () => {
 const navigate = useNavigate()

 const register = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(firebaseAuthentication, email, password)
  navigate('/complete-profile')
 }

 return {
  register
 }
}