import { getCompleteAddress } from "@utils/functions";
import InputWrapper from "./InputWrapper";
import TextInput from "./TextInput";
import { useState } from "react";
import { IAddress, IApiAddress } from "@/types/interfaces";
import Button from "@atoms/Button";
import Map from "@atoms/Map";
import { IBaseInputProps } from "./InputWrapper";
import { useTranslation } from "react-i18next";
import { getAddresses } from "@/fetch/addressActions";

export interface IAddressInputProps extends IBaseInputProps {
  value?: Partial<IAddress>;
  handleChange?: (value: Partial<IAddress>) => void;
}

const AddressInput = ({
  label,
  error,
  className,
  handleChange,
  ...props
}: IAddressInputProps) => {
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
        setAddresses(res);
        if (res.length === 1) handleChangeAddress(0, res[0]);
      })
      .catch(() => {
        setAddressValid(false);
      });
  };

  const handleChangeAddress = (index: number, address: IApiAddress) => {
    setSelectedAddress(index);
    if (handleChange) handleChange(address);
  };

  const onChange = (slug: keyof Partial<IAddress>, value: string) => {
    if (handleChange) handleChange({ ...(props.value ?? {}), [slug]: value });
  };

  return (
    <InputWrapper
      label={label}
      id={props.id}
      error={error}
      required={props.required}
    >
      <TextInput
        className={className}
        placeholder={t("country")}
        value={props.value?.country ?? ""}
        onChange={(e) => onChange("country", e.target.value)}
      />
      <div className="flex flex-wrap gap-1">
        <TextInput
          divClassName="flex-1"
          className={className}
          placeholder={t("postal_code")}
          value={props.value?.postal_code ?? ""}
          onChange={(e) => onChange("postal_code", e.target.value)}
        />
        <TextInput
          divClassName="flex-2"
          className={className}
          placeholder={t("city")}
          value={props.value?.city ?? ""}
          onChange={(e) => onChange("city", e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-1">
        <TextInput
          divClassName="flex-1"
          className={className}
          placeholder={t("address_number")}
          value={props.value?.address_number?.toString() ?? ""}
          onChange={(e) => onChange("address_number", e.target.value)}
        />
        <TextInput
          divClassName="flex-2"
          className={className}
          placeholder={t("street_name")}
          value={props.value?.street_name ?? ""}
          onChange={(e) => onChange("street_name", e.target.value)}
        />
      </div>
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
      {addresses.length > 1 && (
        <>
          <p className="font-semibold">{t("foundAddresses")} :</p>
          <ul className="pl-5 list-disc">
            {addresses.map((address, i) => (
              <li
                onClick={() => handleChangeAddress(i, address)}
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
      {typeof selectedAddress === "number" && (
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
