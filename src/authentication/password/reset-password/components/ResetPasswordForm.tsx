import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { ReactElement, useState } from "react";
import { PasswordNavigationBar } from "../../shared/components/PasswordNavigationBar";
import { useTranslation } from "react-i18next";
import Button from "@atoms/Button";
import { Title } from "@/text/components/Title";
import { PasswordAndConfirmPasswordInput } from "../../../../user/components/form/PasswordAndConfirmPasswordInput";

export const ResetPasswordForm = (): ReactElement => {
 const { t } = useTranslation()
 const [password, setPassword] = useState<string>('')

 return (
  <AuthenticationFormCard className="items-center" cardClassName="min-w-7 w-1/3">
   <PasswordNavigationBar className="mb-14" />
   <Title className="flex justify-center mb-10">{t('authentication:resetPasswordTitle')}</Title>
   <PasswordAndConfirmPasswordInput {...{ password, setPassword }} />
   <Button className="mt-14" template="secondary">{t('authentication:resetPasswordButton')}</Button>
  </AuthenticationFormCard>
 )
}
