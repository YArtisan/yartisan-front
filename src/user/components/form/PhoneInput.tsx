import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import { DivProps } from "@styles/types/DivProps";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
 container?: DivProps
}

export const PhoneInput = ({ container }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <TextInputWithLabel {...{ container }} label={t('user:phone.label')} textInput={{ type: "text", placeholder: t('user:phone.placeholder'), className: "w-full" }} />
 )
}