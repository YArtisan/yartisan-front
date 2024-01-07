import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import { DivProps } from "@styles/types/DivProps";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
 container?: DivProps
 value: string
 onChange: (newValue: string) => void
}

export const UsernameInput = ({ container, value, onChange }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <TextInputWithLabel {...{ container }} label={t('user:username.label')} textInput={{ value, onChange, type: "text", placeholder: t('user:username.placeholder'), className: "w-full" }} />
 )
}