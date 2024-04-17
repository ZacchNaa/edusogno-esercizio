import { FC } from "react";

interface BaseButtonProps {
  label: string;
}

const BaseButton: FC<BaseButtonProps> = ({ label }) => {
  return <button type="submit" className="bg-blue text-white uppercase rounded-xl px-4 py-3">{label}</button>
};

export default BaseButton;
