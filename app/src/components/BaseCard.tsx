import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "./BaseButton";
import { slugify } from "../utils/utils";

interface Event {
  eventName: string;
  eventDate: string;
}

interface BaseCardProps {
  event: Event;
  userRole: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ event, userRole }) => {
  const handleEdit = () => {
    // Handle edit logic
  };

  const handleDelete = () => {
    // Handle delete logic
  };

  return (
    <div className="relative flex flex-col text-left gap-4 p-5 bg-white border border-blueblack rounded-2xl">
      <h1 className="text-dark font-bold text-3xl">{event.eventName}</h1>
      <p className="text-muted text-xl font-400">{event.eventDate}</p>
      {userRole === 'admin' && (
        <>
          <BaseButton label="JOIN" />
          <div className="flex justify-start pt-3 align-middle gap-3">
            <Link to={`/events/${slugify(event.eventName)}`} className="border-r border-muted text-blue px-3">View</Link>
            <Link to={`/events/${slugify(event.eventName)}/edit`} className="border-r border-blueblack text-blueblack px-3" onClick={handleEdit}>Edit</Link>
            <Link to={`/events/${slugify(event.eventName)}/delete`} className="border-red-400 text-red-500 px-3" onClick={handleDelete}>Delete</Link>
          </div>
        </>
      )}
      {userRole !== 'admin' && (
        <Link to={`/events/${slugify(event.eventName)}`} className="border-r border-muted text-blue px-3">View</Link>
      )}
    </div>
  );
};

export default BaseCard;
