import InputWrapper, { IBaseInputProps } from "./InputWrapper";

interface ITextInputProps
  extends IBaseInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ label, error, className, ...props }: ITextInputProps) => {
  return (
    <InputWrapper label={label} id={props.id}>
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
