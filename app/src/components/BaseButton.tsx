import { FC } from "react";
import BaseLoader from "./BaseLoader";

interface BaseButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  handleClick?: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({ label, disabled, loading, handleClick }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={handleClick}
      className="bg-blue flex justify-center disabled:cursor-wait items-center gap-3 text-white uppercase rounded-xl px-4 py-3"
    >
      {loading && <BaseLoader />}
      {label}
    </button>
  );
};

export default BaseButton;
