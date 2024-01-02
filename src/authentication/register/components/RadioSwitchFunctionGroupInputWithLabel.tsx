import { ContainerWithInputLabel } from "@/form/inputs/components/ContainerWithInputLabel";
import { ReactElement } from "react";
import { RadioSwitchFunctionGroupInput } from "./RadioSwitchFunctionGroupInput";
import { useTranslation } from "react-i18next";
import { DivProps } from "@styles/types/DivProps";

interface Props {
 className?: string
 container?: DivProps
}

export const RadioSwitchFunctionGroupInputWithLabel = ({ className = '', container = {} }: Props): ReactElement => {
 const { t } = useTranslation()
 return (
  <ContainerWithInputLabel {...{ container, label: t('user:userType.label') }}>
   <RadioSwitchFunctionGroupInput {...{ className }} />
  </ContainerWithInputLabel>
 )
}