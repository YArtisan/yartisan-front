import { getLatLonFromAddress } from "@utils/functions";
import InputWrapper from "./InputWrapper";
import TextInput from "./TextInput";
import { useState } from "react";
import { ICoords } from "@/types/interfaces";
import Button from "@atoms/Button";
import Map from "@atoms/Map";
import { IBaseInputProps } from "./InputWrapper";
import { IAddress } from "@/types/interfaces";

export interface IAdressInputProps extends IBaseInputProps {
  value?: IAddress;
  handleChange?: (value: IAddress) => void;
}

const AdressInput = ({
  label,
  error,
  className,
  ...props
}: IAdressInputProps) => {
  const [coords, setCoords] = useState<ICoords | null>(null);

  const testAddress = () => {
    console.log("value", props.value);

    if (!props.value) return;
    getLatLonFromAddress(props.value)
      .then((res) => {
        console.log("testAddress", res);

        setCoords(res);
      })
      .catch(() => setCoords(null));
  };

  return (
    <InputWrapper label={label} id={props.id}>
      <TextInput className={className} placeholder="Code postal"></TextInput>
      <Button
        template="secondary"
        className="w-fit px-1 !py-0.5"
        onClick={testAddress}
      >
        Tester l'adresse
      </Button>
      {coords && <Map coords={coords} />}
    </InputWrapper>
  );
};

export default AdressInput;
