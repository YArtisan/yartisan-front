import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import { DivProps } from "@styles/types/DivProps";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
 container?: DivProps
 value: string
 onChange: (newValue: string) => void
}

export const PasswordInput = ({ container, value, onChange }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <TextInputWithLabel {...{ container }} label={t('authentication:password.label')} textInput={{ value, onChange, type: "password", placeholder: t('authentication:password.placeholder'), className: "w-full" }} />
 )
}