import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import Button from "@atoms/Button";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { PasswordNavigationBar } from "../../shared/components/PasswordNavigationBar";
import { DigitCodeInput } from "@/form/inputs/components/DigitCodeInput";

interface Props {
 email: string
}

export const VerificationCodeForm = ({ email }: Props): ReactElement => {
 const { t } = useTranslation()
 const [code, setCode] = useState('    ')

 return (
  <AuthenticationFormCard cardClassName="min-w-7 w-1/3">
   <PasswordNavigationBar className="mb-14" />
   <Title className="flex justify-center">{t('authentication:forgotPasswordTitle')}</Title>
   <div className="flex justify-center mt-4 font-bold">{t('authentication:resetPasswordSubTitle', { email })}</div>
   <DigitCodeInput {...{ code, setCode }} className="mt-14" />
   <div className="flex justify-center mt-4">
    <p className="mr-1">{t('authentication:resetPasswordNoCodeSentQuestion')}</p>
    <button className="font-semibold">{t('authentication:resetPasswordNoCodeSentLink')}</button>
   </div>
   <Button className="mb-4 mt-16" template="secondary">{t('authentication:resetPasswordCodeButton')}</Button>
  </AuthenticationFormCard>
 )
}