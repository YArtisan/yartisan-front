import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
 className: string
}

export const PasswordNavigationBar = ({ className }: Props): ReactElement => {
 const { t } = useTranslation()

 return (
  <div {...{ className: `flex justify-between items-center ${className}` }}>
   <Link to="/login">
    <FaArrowLeft size={26} />
   </Link>
   <div className="">{t('authentication:welcoming')}</div>
  </div>
 )
}