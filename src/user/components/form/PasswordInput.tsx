import { TextInputWithLabel } from "@/form/inputs/components/TextInputWithLabel";
import { DivProps } from "@styles/types/DivProps";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
 container?: DivProps
}

export const PasswordInput = ({ container }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <TextInputWithLabel {...{ container }} label={t('authentication:password.label')} textInput={{ type: "password", placeholder: t('authentication:password.placeholder'), className: "w-full" }} />
 )
}