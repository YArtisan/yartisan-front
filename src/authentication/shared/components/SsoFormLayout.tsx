import { ReactElement, ReactNode } from "react"
import { useTranslation } from "react-i18next"

interface Props {
  children: ReactNode
  className?: string
}

export const SsoFormLayout = ({ children, className = '' }: Props): ReactElement => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-center flex-col">
      <p className={`text-center text-gray-500 ${className}`}> {t('expression:or')}</p>
      {children}
    </div >
  )
}
