import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./BaseButton";
import { slugify } from "../utils/utils";

interface BaseCardProps {
  eventName: string;
  eventDate: string;
  handleClick?: () => void;
}

const BaseCard: FC<BaseCardProps> = ({ eventName, eventDate, handleClick }) => {
    const navigate = useNavigate();
  return (
    <div className="relative flex flex-col text-left gap-4 p-5 bg-white border border-blueblack rounded-2xl">
      <h1 className="text-dark font-bold text-3xl">{eventName}</h1>
      <p className="text-muted text-xl font-400">{eventDate}</p>
      <BaseButton label="JOIN" />
    <div className="flex justify-start pt-3 align-middle gap-3">
        <Link to={`/events/${slugify(eventName)}`} className="border-r border-muted text-muted px-3">View</Link>
        <Link to={`/events/${slugify(eventName)}/edit`} className="border-r border-blueblack text-blueblack px-3">Edit</Link>
        <Link to={`/events/${slugify(eventName)}/delete`} className="border-red-400 text-red-500 px-3">Delete</Link>
    </div>
    </div>
  );
};

export default BaseCard;
