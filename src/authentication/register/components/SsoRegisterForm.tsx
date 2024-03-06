import { GoogleSignButton } from '@/authentication/shared/components/GoogleSignButton'
import { SsoFormLayout } from '@/authentication/shared/components/SsoFormLayout'
import { ReactElement } from 'react'

export const SsoRegisterForm = (): ReactElement => {
 return (
  <SsoFormLayout>
   <GoogleSignButton {...{ redirectionPath: '/complete-profile', className: 'my-4' }} />
  </SsoFormLayout>
 )
}
