import { GoogleSignButton } from '@/authentication/shared/components/GoogleSignButton'
import { SsoFormLayout } from '@/authentication/shared/components/SsoFormLayout'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export const SsoLoginForm = (): ReactElement => {
 const { t } = useTranslation()

 return (
  <SsoFormLayout className="mt-4">
   <GoogleSignButton {...{ text: t('authentication:googleSignIn'), redirectionPath: '/', className: 'my-4' }} />
  </SsoFormLayout>
 )
}
