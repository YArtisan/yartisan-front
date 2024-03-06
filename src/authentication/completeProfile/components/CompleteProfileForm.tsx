import { AuthenticationFormCard } from "@/authentication/shared/components/AuthenticationFormCard"
import { ReactElement, useState } from "react"
import { useTranslation } from "react-i18next"
import { RadioSwitchFunctionGroupInputWithLabel } from "./radioSwitchFunctionGroup/RadioSwitchFunctionGroupInputWithLabel"
import { Title } from "@/text/components/Title"
import { UserType } from "@/user/enums/UserType"
import { IArtisanFormData } from "@/types/interfaces"
import CompleteUserProfileForm from "./CompleteUserProfileForm"
import CompleteArtisanProfileForm from "./CompleteArtisanProfileForm"

interface Props {
  className: string
  onClick: (input: IArtisanFormData) => Promise<void>
}

export const CompleteProfileForm = ({ className, onClick }: Props): ReactElement => {
  const { t } = useTranslation()
  const [userFunction, setUserFunction] = useState<string>(UserType.client)

  return (
    <AuthenticationFormCard {...{ className, cardClassName: `w-2/3 max-h-[700px]` }}>
      <Title>{t("authentication:registering")}</Title>
      <RadioSwitchFunctionGroupInputWithLabel
        container={{ className: "mt-8" }}
        className="mb-5"
        selectedValue={userFunction}
        setSelectedValue={setUserFunction}
      />
      {userFunction === UserType.client && (
        <CompleteUserProfileForm onClick={onClick} />
      )}
      {userFunction === UserType.artisan && <CompleteArtisanProfileForm onClick={onClick} />}
    </AuthenticationFormCard>
  )
}
