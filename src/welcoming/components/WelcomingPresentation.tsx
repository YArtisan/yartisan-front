import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import rocketPicture from "@/locales/rocket.png"

interface Props {
 className?: string
}

export const WelcomingPresentation = ({ className }: Props): ReactElement => {
 const { t } = useTranslation()

 return (
  <div className={`flex justify-center items-center ${className}`}>
   <div className="flex-1">
    <div className="text-4xl font-bold mb-4">YArtisan</div>
    <div className="text-2xl mb-8">{t('authentication:welcoming')}</div>
    <div className="text-md text-justify">{t('authentication:highlight')}</div>
   </div>
   <img className="flex-1" src={rocketPicture} />
  </div>
 )
}