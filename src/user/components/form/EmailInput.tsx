import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import { DivProps } from "@styles/types/DivProps";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
 container?: DivProps
}

export const EmailInput = ({ container }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <TextInputWithLabel {...{ container }} label={t('authentication:emailAddress.label')} textInput={{ type: "text", placeholder: t('authentication:emailAddress.placeholder'), className: "w-full" }} />
 )
}