import { GoogleSignButton } from '@/authentication/shared/components/GoogleSignButton'
import { SsoFormLayout } from '@/authentication/shared/components/SsoFormLayout'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export const SsoRegisterForm = (): ReactElement => {
 const { t } = useTranslation()

 return (
  <SsoFormLayout>
   <GoogleSignButton {...{ text: t('authentication:googleRegister'), redirectionPath: '/complete-profile', className: 'my-4' }} />
  </SsoFormLayout>
 )
}
