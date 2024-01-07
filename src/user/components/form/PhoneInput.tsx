import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import { DivProps } from "@styles/types/DivProps";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
 container?: DivProps
 value: string
 onChange: (newValue: string) => void
}

export const PhoneInput = ({ container, value, onChange }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <TextInputWithLabel {...{ container }} label={t('user:phone.label')} textInput={{ value, onChange, type: "text", placeholder: t('user:phone.placeholder'), className: "w-full" }} />
 )
}