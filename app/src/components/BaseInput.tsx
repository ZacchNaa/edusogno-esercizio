import { FC } from "react";

interface BaseInputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  Icon?: JSX.Element;
  register: any;
  error?: string;
  handleClick?: () => void;
  isPasswordField?: boolean
}

const BaseInput: FC<BaseInputProps> = ({
  label,
  type,
  name,
  placeholder,
  Icon,
  value,
  readOnly,
  disabled,
  register,
  error,
  handleClick,
  isPasswordField
}) => {
  return (
    <div className="relative h-11 w-full min-w-[200px]">
      {isPasswordField && Icon && (
        <div onClick={handleClick} className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
          {Icon}
        </div>
      )}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        name={name}
        {...register(name)}
        className={`h-full w-full disabled:text-muted disabled:cursor-not-allowed border-b border-metal placeholder:text-muted pt-4 pb-1.5 text-sm font-normal focus:outline-none disabled:bg-blue-gray-50`}
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-bold leading-tight !text-dark transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-left text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default BaseInput;
