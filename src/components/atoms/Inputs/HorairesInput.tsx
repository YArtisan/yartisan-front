import InputWrapper from "./InputWrapper";
import TextInput from "./TextInput";
import { IHoraire } from "@/types/interfaces";
import { IBaseInputProps } from "./InputWrapper";
import { useTranslation } from "react-i18next";
import { days } from "@utils/variables";

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

  const onChange = (
    day_of_week: number,
    type: "close" | "open",
    value: string
  ) => {
    if (handleChange) {
      const val = props.value ?? [];
      val[day_of_week] = { day_of_week };
      if (type === "open") val[day_of_week].opening_time = value;
      if (type === "close") val[day_of_week].closing_time = value;
      handleChange(val);
    }
  };

  return (
    <InputWrapper label={label} id={props.id}>
      {days.map((day, i) => {
        const value: Partial<IHoraire> = props.value ? props.value[i] : {};
        return (
          <div className="flex items-center justify-between" key={`day-${day}`}>
            <p>{day}</p>
            <p>de</p>
            <TextInput
              type="time"
              className={className}
              value={value.opening_time}
              onChange={(e) => onChange(i, "open", e.target.value)}
            />
            <p>à</p>
            <TextInput
              type="time"
              className={className}
              value={value.closing_time}
              onChange={(e) => onChange(i, "close", e.target.value)}
            />
          </div>
        );
      })}
    </InputWrapper>
  );
};

export default HorairesInput;
