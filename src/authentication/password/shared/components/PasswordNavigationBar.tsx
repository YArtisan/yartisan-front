import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
 className: string
}

export const PasswordNavigationBar = ({ className }: Props): ReactElement => {
 const { t } = useTranslation()

 return (
  <div {...{ className: `flex justify-between items-center ${className}` }}>
   <a href="/login">
    <FaArrowLeft size={26} />
   </a>
   <div className="">{t('authentication:welcoming')}</div>
  </div>
 )
}