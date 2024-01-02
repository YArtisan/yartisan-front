import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import { EmailInput } from "@/user/components/form/EmailInput";
import Button from "@atoms/Button";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { PasswordNavigationBar } from "../../shared/components/PasswordNavigationBar";

export const ForgotPasswordForm = (): ReactElement => {
 const { t } = useTranslation()

 return (
  <AuthenticationFormCard cardClassName="min-w-7 w-1/3">
   <PasswordNavigationBar className="mb-14" />
   <Title className="flex justify-center">{t('authentication:forgotPasswordTitle')}</Title>
   <div className="flex justify-center mt-4 font-bold">{t('authentication:forgotPasswordSubTitle')}</div>
   <EmailInput container={{ className: 'my-14' }} />
   <Button className="mt-6" template="secondary">{t('authentication:resetPasswordButton')}</Button>
  </AuthenticationFormCard>
 )
}