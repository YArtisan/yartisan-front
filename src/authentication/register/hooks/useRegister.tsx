import axios from "axios";
import { RegisterFormInput } from "../types/RegisterFormInput.type";
import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";

export const useRegister = () => {
 const register = async (data: RegisterFormInput) => {
  const { email, password } = data
  await createUserWithEmailAndPassword(firebaseAuthentication, email, password)
  await sendSignInLinkToEmail(firebaseAuthentication, email, { url: '' })
  // await axios.post(`${import.meta.env.VITE_YARTISAN_API_URL}/users/signup`, data);
 };

 return {
  register
 }
}