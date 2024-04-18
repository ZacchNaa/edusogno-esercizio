import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "./BaseButton";
import { EventData } from "../types";

interface BaseCardProps {
  event: EventData;
  userRole?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ event, userRole }) => {
  const handleEdit = () => {
    // Handle edit logic
  };

  const handleDelete = (id: string) => {
    // Handle delete logic
  };

  return (
    <div className="relative flex flex-col text-left gap-4 p-5 bg-white border border-blueblack rounded-2xl">
      <h1 className="text-dark font-bold text-3xl">{event.event_name}</h1>
      <p className="text-muted text-xl font-400">{event.event_date}</p>
      <BaseButton label="JOIN" />
      {userRole === "admin" && (
        <>
          <div className="flex justify-start pt-3 align-middle gap-3">
            <Link
              to={`/events/${event._id}/view`}
              state={event}
              className="border-r border-muted text-blue px-3"
            >
              View
            </Link>
            <Link
              to={`/events/${event._id}/edit`}
              state={event}
              className="border-r border-blueblack text-blueblack px-3"
            >
              Edit
            </Link>
            <button
              className="border-red-400 text-red-500 px-3"
              onClick={() => handleDelete(event._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
      {userRole !== "admin" && (
        <Link
          to={`/events/${event._id}/view`}
          className="border-r border-muted text-blue px-3"
        >
          View
        </Link>
      )}
    </div>
  );
};

export default BaseCard;
