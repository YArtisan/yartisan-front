import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import { UserType } from "@/user/enums/UserType"
import { CompleteProfileForm } from "../components/CompleteProfileForm"
import { postArtisan } from "@/fetch/artisanActions"
import { firebaseAuthentication } from "@/api/service/firebase"
import { sendEmailVerification } from "firebase/auth"
import axios from "@/api/service/axios"
import { useCurrentUrl } from "@utils/useCurrentUrl"

export const CompleteProfile = (): ReactElement => {
 const navigate = useNavigate();
 const { url } = useCurrentUrl()

 const createUser = async (data: any) => {
  const token = await firebaseAuthentication?.currentUser?.getIdToken()
  axios.post(`/users/signup`, data, {
   headers: { authorization: token ? `Bearer ${token}` : '' }
  })
 }

 const onClick = async (data: any): Promise<void> => {
  try {
   const user = firebaseAuthentication?.currentUser
   data.email = user?.email ?? user?.emailVerified ?? ''
   data.password = 'empty'
   if (user == null) throw new Error("not user auth");
   const registerFunction =
    data.userFunction === UserType.artisan ? postArtisan : createUser;
   await Promise.all([
    !user.emailVerified ? sendEmailVerification(user, { url: `${url}/complete-profile` }) : null,
    registerFunction(data)
   ])
   navigate("/register-redirection")
  } catch (error: any) {
   alert(error?.message ?? "Une erreur est survenue.");
  }
 }

 return (
  <CompleteProfileForm
   onClick={onClick}
   className="w-1/2"
  />
 )
}
