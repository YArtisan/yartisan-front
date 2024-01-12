import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ForgotPasswordLink = (): ReactElement => {
 const { t } = useTranslation()

 return (
  <Link to="/forgot-password" className="mt-1 sm:mb-0 ml-1 text-blue-600">{t('authentication:forgotPassword')}</Link>
 )
}
