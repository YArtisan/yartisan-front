import { ReactElement } from "react";
import { TextInput, TextInputProps } from "./TextInput";
import { DivProps } from "@styles/types/DivProps";
import { ContainerWithInputLabel } from "./ContainerWithInputLabel";

interface Props {
 textInput?: TextInputProps
 label: string
 container?: DivProps
}

export const TextInputWithLabel = ({ label, textInput, container }: Props): ReactElement => {
 return (
  <ContainerWithInputLabel {...{ label, container }}>
   <TextInput {...textInput} />
  </ContainerWithInputLabel>
 )
}
