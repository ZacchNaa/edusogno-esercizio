import { FC } from "react";
import BaseButton from "./BaseButton";

interface BaseCardProps {
  eventName: string;
  eventDate: string;
  handleClick?: () => void;
}

const BaseCard: FC<BaseCardProps> = ({ eventName, eventDate, handleClick }) => {
  return (
    <div className="relative flex flex-col text-left gap-4 p-5 bg-white border border-blueblack rounded-2xl">
      <h1 className="text-dark font-bold text-3xl">{eventName}</h1>
      <p className="text-muted text-xl font-400">{eventDate}</p>
      <BaseButton label="JOIN" />
    </div>
  );
};

export default BaseCard;
