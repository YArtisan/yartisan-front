import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const ForgotPasswordLink = (): ReactElement => {
 const { t } = useTranslation()

 return (
  <a href="/forgot-password" className="mt-1 sm:mb-0 ml-1 text-blue-600">{t('authentication:forgotPassword')}</a>
 )
}
