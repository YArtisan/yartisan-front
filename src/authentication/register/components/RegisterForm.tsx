import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard"
import { ReactElement, useState } from "react"
import { useTranslation } from "react-i18next"
import { EmailInput } from "@/user/components/form/EmailInput"
import { PasswordInput } from "@/user/components/form/PasswordInput"
import { PhoneInput } from "@/user/components/form/PhoneInput"
import { RadioSwitchFunctionGroupInputWithLabel } from "./RadioSwitchFunctionGroupInputWithLabel"
import Button from "@atoms/Button"
import { Title } from "@/text/components/Title"
import { UserType } from "@/user/enums/UserType"
import { RegisterFormInput } from "../types/RegisterFormInput.type"
import { FirstnameInput } from "@/user/components/form/FirstNameInput"
import { LastnameInput } from "@/user/components/form/LastNameInput"

interface Props {
 className: string
 onClick: (input: RegisterFormInput) => Promise<void>
}

export const RegisterForm = ({ className, onClick }: Props): ReactElement => {
 const { t } = useTranslation()
 const [userFunction, setUserFunction] = useState<string>(UserType.client)
 const [email, setEmail] = useState<string>('')
 const [firstname, setfirstname] = useState<string>('')
 const [lastname, setlastname] = useState<string>('')
 const [phone, setPhone] = useState<string>('')
 const [password, setPassword] = useState<string>('')

 return (
  <AuthenticationFormCard {...{ className, cardClassName: "w-2/3" }}>
   <Title>{t('authentication:registering')}</Title>
   <RadioSwitchFunctionGroupInputWithLabel
    container={{ className: "mt-8" }}
    className="mb-5"
    selectedValue={userFunction}
    setSelectedValue={setUserFunction}
   />
   <EmailInput {...{ value: email, onChange: setEmail }} container={{ className: "mb-5" }} />
   <FirstnameInput {...{ value: firstname, onChange: setfirstname }} container={{ className: "mb-5" }} />
   <LastnameInput {...{ value: lastname, onChange: setlastname }} container={{ className: "mb-5" }} />
   <PhoneInput {...{ value: phone, onChange: setPhone }} container={{ className: "mb-5" }} />
   <PasswordInput {...{ value: password, onChange: setPassword }} container={{ className: "mb-5" }} />
   <div className="flex justify-start">
    {t('authentication:haveAccount')}
    <a href="/login" className="ml-1 text-blue-600">{t('authentication:connect')}</a>
   </div>
   <Button {...{
    onClick: async () => await onClick({
     email,
     firstname,
     lastname,
     phone_number: phone,
     password,
     userFunction
    })
   }} className="mt-6 w-full" template="secondary">{t('authentication:register')}</Button>
  </AuthenticationFormCard>
 )
}