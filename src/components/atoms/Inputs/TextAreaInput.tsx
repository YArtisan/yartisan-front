import { useEffect, useRef } from "react";
import InputWrapper, { IBaseInputProps } from "./InputWrapper";
import autosize from "autosize";

interface ITextAreaInputProps
  extends IBaseInputProps,
    React.InputHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
}

const TextAreaInput = ({
  label,
  error,
  className,
  ...props
}: ITextAreaInputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) autosize(ref.current);
  }, []);

  return (
    <InputWrapper label={label} id={props.id}>
      <textarea
        {...props}
        ref={ref}
        className={[
          "border-[1px] border-black rounded-xl px-2 py-0.5",
          className,
        ].join(" ")}
      ></textarea>
    </InputWrapper>
  );
};

export default TextAreaInput;
