import { firebaseAuthentication } from '@/api/service/firebase'
import Button from '@atoms/Button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface Props {
 className?: string
 redirectionPath: string
}

export const GoogleSignButton = ({ redirectionPath, className = '' }: Props): ReactElement => {
 const { t } = useTranslation()
 const navigate = useNavigate()

 const onClick = async (): Promise<void> => {
  const googleProvider = new GoogleAuthProvider()
  const { user } = await signInWithPopup(firebaseAuthentication, googleProvider)
  const { email } = user
  navigate(redirectionPath, { state: { email } })
 }

 return (
  <Button {...{ onClick }} className={`flex justify-center items-center ${className}`}>
   <img src='/images/google-icon.svg' className='w-7 h-7 mr-1' />
   <p className='text-gray-500 ml-1'>{t('authentication:googleSignIn')}</p>
  </Button>
 )
}
