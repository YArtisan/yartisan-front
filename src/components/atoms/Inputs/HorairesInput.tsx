import InputWrapper from "./InputWrapper";
import TextInput from "./TextInput";
import { IHoraire } from "@/types/interfaces";
import { IBaseInputProps } from "./InputWrapper";
import { useTranslation } from "react-i18next";
import { days } from "@utils/variables";
import { capitalize } from "@utils/functions";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export interface IHorairesInputProps extends IBaseInputProps {
  value?: Partial<IHoraire>[];
  handleChange?: (value: Partial<IHoraire>[]) => void;
}

const HorairesInput = ({
  label,
  error,
  className,
  handleChange,
  ...props
}: IHorairesInputProps) => {
  const { t } = useTranslation("horaireInput");

  const onChange = (day_of_week: number, value: Partial<IHoraire>) => {
    if (handleChange) {
      const val = props.value ?? [];
      const idx = val.findIndex((e) => e.day_of_week === day_of_week);
      if (idx >= 0) val[idx] = value;
      else val.push(value);
      handleChange(val);
    }
  };

  const deleteHoraire = (day_of_week: number) => {
    if (handleChange && props.value) {
      handleChange(props.value.filter((e) => e.day_of_week !== day_of_week));
    }
  };

  return (
    <InputWrapper label={label} id={props.id}>
      {days.map((day, i) => {
        const existing = props.value?.find((e) => e.day_of_week === i);
        const value: Partial<IHoraire> = existing ?? { day_of_week: i };
        return (
          <div
            className="flex flex-1 flex-wrap gap-5 items-center justify-between max-[400px]:flex-col"
            key={`day-${day}`}
          >
            <p>{capitalize(day)}</p>
            <div className="flex gap-5 items-center justify-between max-[320px]:gap-2">
              <TextInput
                type="time"
                divClassName="!w-fit"
                className={["w-fit", className].join(" ")}
                value={value?.opening_time ?? ""}
                onChange={(e) =>
                  onChange(i, { ...value, opening_time: e.target.value })
                }
              />
              <p>à</p>
              <TextInput
                type="time"
                divClassName="!w-fit"
                className={["w-fit", className].join(" ")}
                value={value?.closing_time ?? ""}
                onChange={(e) =>
                  onChange(i, {
                    ...value,
                    day_of_week: i,
                    closing_time: e.target.value,
                  })
                }
              />
              {!existing ? (
                <FaEyeSlash onClick={() => onChange(i, { day_of_week: i })} />
              ) : (
                <FaEye onClick={() => deleteHoraire(i)} />
              )}
            </div>
          </div>
        );
      })}
    </InputWrapper>
  );
};

export default HorairesInput;
