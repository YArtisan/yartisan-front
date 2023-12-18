export interface IBaseInputProps {
  label?: string;
  error?: boolean;
  placeholder?: string;
  id?: string;
  divClassName?: string;
  className?: string;
  required?: boolean;
}

interface IProps {
  label?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
  error?: boolean;
  required?: boolean;
}

const InputWrapper = ({
  label,
  id,
  children,
  className,
  error,
  required,
}: IProps) => {
  return (
    <div className={["flex flex-col gap-1 w-full", className].join(" ")}>
      {label && (
        <label htmlFor={id} className="font-semibold">
          {label + `${required ? " *" : ""}`}
        </label>
      )}
      {error && (
        <p className="text-red-500">Veuillez remplir correctement ce champ.</p>
      )}
      {children}
    </div>
  );
};

export default InputWrapper;
