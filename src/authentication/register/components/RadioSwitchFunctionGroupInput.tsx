import { RadioSwitchGroupInput } from "@/form/inputs/components/RadioSwitchGroupInput";
import { UserType } from "@/user/enums/UserType";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string
  selectedValue: string
  setSelectedValue: (newValue: string) => void
}

export const RadioSwitchFunctionGroupInput = ({ className, selectedValue, setSelectedValue }: Props): ReactElement => {
  const { t } = useTranslation()

  const options = [{
    title: t(`user:userType.${UserType.client}`),
    inputId: UserType.client,
    value: UserType.client
  },
  {
    title: t(`user:userType.${UserType.artisan}`),
    inputId: UserType.artisan,
    value: UserType.artisan
  }]

  return (
    <RadioSwitchGroupInput {...{ options, className, selectedValue, setSelectedValue }} />
  )
}