import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard";
import { Title } from "@/text/components/Title";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const RegisterRedirection = (): ReactElement => {
 const { t } = useTranslation()

 return (
  <AuthenticationFormCard {...{ cardClassName: "w-1/3" }}>
   <Title className="mb-6">{t('authentication:Register')}</Title>
   <div>
    {t('authentication:registerRedirection')}
   </div>
  </AuthenticationFormCard>
 )
}
