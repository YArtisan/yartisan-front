import { ForgotPasswordLink } from "@/authentication/password/forgot-password/components/ForgotPasswordLink";
import { SsoRegisterForm } from "@/authentication/register/components/SsoRegisterForm";
import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import { EmailInput } from "@/user/components/form/EmailInput";
import { PasswordInput } from "@/user/components/form/PasswordInput";
import Button from "@atoms/Button";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { SsoLoginForm } from "./SsoLoginForm";

interface Props {
 className?: string
 onClick: (email: string, password: string) => Promise<void>
}

export const LoginForm = ({ className, onClick }: Props): ReactElement => {
 const { t } = useTranslation()
 const [email, setEmail] = useState<string>('')
 const [password, setPassword] = useState<string>('')

 return (
  <AuthenticationFormCard {...{ className, cardClassName: 'w-2/3' }}>
   <Title>{t('authentication:connection')}</Title>
   <EmailInput {...{ onChange: setEmail, value: email }} container={{ className: "mt-16" }} />
   <PasswordInput {...{ onChange: setPassword, value: password }} container={{ className: "mt-8" }} />
   <SsoLoginForm />
   <div className="flex justify-between items-center mt-10 flex-col md:flex-row">
    <div className="flex justify-center items-between lg:flex-col xl:flex-row">
     {t('authentication:noAccount')}
     <Link to="/register" className="lg:ml-0 xl:ml-1 text-blue-600">{t('authentication:register')}</Link>
    </div>
    <ForgotPasswordLink />
   </div>
   <Button
    className="mt-10 w-full"
    template="secondary"
    {...{ onClick: async () => await onClick(email, password) }}>
    {t('authentication:connect')}
   </Button>
  </AuthenticationFormCard>
 )
}
