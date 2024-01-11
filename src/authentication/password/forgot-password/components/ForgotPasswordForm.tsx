import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import { EmailInput } from "@/user/components/form/EmailInput";
import Button from "@atoms/Button";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { PasswordNavigationBar } from "../../shared/components/PasswordNavigationBar";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuthentication } from "@/api/service/firebase";

export const ForgotPasswordForm = (): ReactElement => {
 const { t } = useTranslation()
 const navigate = useNavigate()
 const [email, setEmail] = useState<string>('')

 const onClick = async (): Promise<void> => {
  await sendPasswordResetEmail(firebaseAuthentication, email, { url: import.meta.env.VITE_WEB_APP_URL })
  navigate('/forgot-password/code-verification', { state: { email } })
 }

 return (
  <AuthenticationFormCard className="items-center" cardClassName="min-w-7 w-1/3">
   <PasswordNavigationBar className="mb-14" />
   <Title className="flex justify-center">{t('authentication:forgotPasswordTitle')}</Title>
   <div className="flex justify-center mt-4 font-bold">{t('authentication:forgotPasswordSubTitle')}</div>
   <EmailInput {...{ onChange: setEmail, value: email }} container={{ className: 'my-14' }} />
   <Button {...{ onClick }} className="mt-6" template="secondary">{t('authentication:resetPasswordButton')}</Button>
  </AuthenticationFormCard>
 )
}