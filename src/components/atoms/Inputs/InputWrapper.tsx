export interface IBaseInputProps {
  label?: string;
  error?: boolean;
  placeholder?: string;
  id?: string;
  className?: string;
}

const InputWrapper = ({
  label,
  id,
  children,
}: {
  label?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
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
