import { RegisterFormInput } from "../types/RegisterFormInput.type";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";
import { useLocalStorageState } from "@utils/useLocalStorageState";
import { UserType } from "@/user/enums/UserType";
import axios from "@/api/service/axios";
import { useCurrentUrl } from "@utils/useCurrentUrl";

export const useRegister = () => {
 const [_, setUserFunction] = useLocalStorageState('userFunction', UserType.client)
 const { url } = useCurrentUrl()

 const register = async (data: RegisterFormInput) => {
  const { email, password, userFunction } = data
  setUserFunction(userFunction as UserType)
  const response = await createUserWithEmailAndPassword(firebaseAuthentication, email, password)
  const token = await firebaseAuthentication?.currentUser?.getIdToken()
  await Promise.all([
   sendEmailVerification(response.user, { url }),
   axios.post(`/users/signup`, { ...data, user_id: response.user.uid }, {
    headers: { authorization: token ? `Bearer ${token}` : '' }
   })
  ])
 };

 return {
  register
 }
}