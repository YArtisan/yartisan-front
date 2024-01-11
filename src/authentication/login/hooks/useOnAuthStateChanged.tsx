import { firebaseAuthentication } from "@/api/service/firebase"
import { sendEmailVerification } from "firebase/auth";

export const useOnAuthStateChanged = (): void => {
 firebaseAuthentication.onAuthStateChanged(async (user) => {
  if (user === null || user?.emailVerified === true) return

  await sendEmailVerification(user)
  console.log('email sended')
 });
}