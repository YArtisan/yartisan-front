export interface IBaseInputProps {
  label?: string;
  error?: boolean;
  placeholder?: string;
  id?: string;
  divClassName?: string;
  className?: string;
}

const InputWrapper = ({
  label,
  id,
  children,
  className,
}: {
  label?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={["flex flex-col gap-1 w-full", className].join(" ")}>
      {label && (
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default InputWrapper;
