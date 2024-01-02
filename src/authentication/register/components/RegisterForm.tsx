import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { EmailInput } from "@/user/components/form/EmailInput";
import { PasswordInput } from "@/user/components/form/PasswordInput";
import { PhoneInput } from "@/user/components/form/PhoneInput";
import { RadioSwitchFunctionGroupInputWithLabel } from "./RadioSwitchFunctionGroupInputWithLabel";
import Button from "@atoms/Button";
import { Title } from "@/text/components/Title";
import { UsernameInput } from "@/user/components/form/UsernameInput";

interface Props {
 className: string
}

export const RegisterForm = ({ className }: Props): ReactElement => {
 const { t } = useTranslation()

 return (
  <AuthenticationFormCard {...{ className, cardClassName: "w-2/3" }}>
   <Title>{t('authentication:registering')}</Title>
   <RadioSwitchFunctionGroupInputWithLabel container={{ className: "mt-8" }} className="mb-5" />
   <EmailInput container={{ className: "mb-5" }} />
   <UsernameInput container={{ className: "mb-5" }} />
   <PhoneInput container={{ className: "mb-5" }} />
   <PasswordInput container={{ className: "mb-5" }} />
   <div className="flex justify-start">
    {t('authentication:haveAccount')}
    <a href="/login" className="ml-1 text-blue-600">{t('authentication:connect')}</a>
   </div>
   <Button className="mt-6 w-full" template="secondary">{t('authentication:connect')}</Button>
  </AuthenticationFormCard>
 )
}