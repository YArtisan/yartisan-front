import { getCompleteAddress } from "@utils/functions";
import InputWrapper from "./InputWrapper";
import TextInput from "./TextInput";
import { useState } from "react";
import {
  IAddress,
  IApiAddress,
  ICoords,
  IFormAddress,
} from "@/types/interfaces";
import Button from "@atoms/Button";
import Map from "@atoms/Map";
import { IBaseInputProps } from "./InputWrapper";
import { useTranslation } from "react-i18next";
import { getAddresses } from "@/fetch/addressActions";

export interface IAdressInputProps extends IBaseInputProps {
  value?: IFormAddress;
  handleChange?: (value: IFormAddress) => void;
}

const AddressInput = ({
  label,
  error,
  className,
  handleChange,
  ...props
}: IAdressInputProps) => {
  const { t } = useTranslation("addressInput");
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [addresses, setAddresses] = useState<IApiAddress[]>([]);
  const [addressValid, setAddressValid] = useState<boolean>(true);

  const testAddress = () => {
    if (!props.value) return;
    setSelectedAddress(null);
    setAddresses([]);
    const address = getCompleteAddress(props.value);

    getAddresses(address)
      .then((res) => {
        if (res.length === 1) setSelectedAddress(0);
        setAddresses(res);
      })
      .catch(() => {
        setAddressValid(false);
      });
  };

  const onChange = (slug: keyof IFormAddress, value: string) => {
    if (handleChange) handleChange({ ...(props.value ?? {}), [slug]: value });
  };

  return (
    <InputWrapper label={label} id={props.id}>
      <TextInput
        className={className}
        placeholder={t("country")}
        value={props.value?.country ?? ""}
        onChange={(e) => onChange("country", e.target.value)}
      />
      <TextInput
        className={className}
        placeholder={t("postal_code")}
        value={props.value?.postal_code ?? ""}
        onChange={(e) => onChange("postal_code", e.target.value)}
      />
      <TextInput
        className={className}
        placeholder={t("city")}
        value={props.value?.city ?? ""}
        onChange={(e) => onChange("city", e.target.value)}
      />
      <TextInput
        className={className}
        placeholder={t("address_number")}
        value={props.value?.address_number ?? ""}
        onChange={(e) => onChange("address_number", e.target.value)}
      />
      <TextInput
        className={className}
        placeholder={t("street_name")}
        value={props.value?.street_name ?? ""}
        onChange={(e) => onChange("street_name", e.target.value)}
      />
      {props.value && (
        <Button
          template="secondary"
          className="w-fit px-1 !py-0.5"
          onClick={testAddress}
        >
          {t("testAddress")}
        </Button>
      )}
      {!addressValid && <p className="text-red-500">{t("addressInvalid")}</p>}
      {addresses.length > 0 && (
        <>
          <p className="font-semibold">{t("foundAddresses")} :</p>
          <ul className="pl-5 list-disc">
            {addresses.map(({ lat, lon, ...address }, i) => (
              <li
                onClick={() => setSelectedAddress(i)}
                className={`cursor-pointer duration-150 rounded px-2 mb-1 ${
                  selectedAddress === i
                    ? "bg-secondary font-semibold"
                    : "hover:bg-accent"
                }`}
                key={`adresse-proposition-${i}`}
              >
                {getCompleteAddress(address)}
              </li>
            ))}
          </ul>
        </>
      )}
      {selectedAddress && (
        <Map
          coords={{
            lat: addresses[selectedAddress]?.lat,
            lon: addresses[selectedAddress]?.lon,
          }}
        />
      )}
    </InputWrapper>
  );
};

export default AddressInput;
