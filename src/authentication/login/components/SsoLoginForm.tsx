import { GoogleSignButton } from '@/authentication/shared/components/GoogleSignButton'
import { SsoFormLayout } from '@/authentication/shared/components/SsoFormLayout'
import { ReactElement } from 'react'

export const SsoLoginForm = (): ReactElement => {
 return (
  <SsoFormLayout className="mt-4">
   <GoogleSignButton {...{ redirectionPath: '/complete-profile', className: 'my-4' }} />
  </SsoFormLayout>
 )
}
