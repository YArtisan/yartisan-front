import InputWrapper, { IBaseInputProps } from "./InputWrapper";

interface ITextInputProps
  extends IBaseInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const TextInput = ({
  label,
  error,
  className,
  divClassName,
  ...props
}: ITextInputProps) => {
  return (
    <InputWrapper label={label} id={props.id} error={error} className={divClassName} required={props.required} >
      <input
        {...props}
        className={[
          "border-[1px] border-black rounded-xl px-2 py-0.5",
          className,
        ].join(" ")}
      />
    </InputWrapper>
  );
};

export default TextInput;
