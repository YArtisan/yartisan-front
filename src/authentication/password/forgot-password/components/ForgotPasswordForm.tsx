import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import { EmailInput } from "@/user/components/form/EmailInput";
import Button from "@atoms/Button";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { PasswordNavigationBar } from "../../shared/components/PasswordNavigationBar";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordForm = (): ReactElement => {
 const { t } = useTranslation()
 const navigate = useNavigate()
 const [email, setEmail] = useState()

 const onClick = (): void => {
  navigate('/forgot-password/code-verification', { state: { email } })
 }

 return (
  <AuthenticationFormCard cardClassName="min-w-7 w-1/3">
   <PasswordNavigationBar className="mb-14" />
   <Title className="flex justify-center">{t('authentication:forgotPasswordTitle')}</Title>
   <div className="flex justify-center mt-4 font-bold">{t('authentication:forgotPasswordSubTitle')}</div>
   <EmailInput container={{ className: 'my-14' }} />
   <Button {...{ onClick }} className="mt-6" template="secondary">{t('authentication:resetPasswordButton')}</Button>
  </AuthenticationFormCard>
 )
}