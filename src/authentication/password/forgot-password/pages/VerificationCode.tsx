import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";

export const VerificationCode = (): ReactElement => {
 const location = useLocation();
 const params = location.state ?? {};
 const { email } = params
 const { t } = useTranslation()

 return (
  <AuthenticationFormCard {...{ cardClassName: "w-1/3" }}>
   <Title className="mb-6">{t('authentication:forgotPasswordTitle')}</Title>
   <div>
    {t('authentication:resetPasswordSubTitle', { email })}
   </div>
  </AuthenticationFormCard>
 )
}