import React from "react";
import { Link, useParams } from "react-router-dom";
import events from "../assets/data"; // Assuming events array is imported here
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { slugify } from "../utils/utils";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const event = events[parseInt(id, 10)];

  const handleEditEvent = (id: string) => {};
  const handleDeleteEvent = (id: string) => {};

  return (
    <Layout>
      <Heading heading="Event Details" />
      <div className="relative text-left flex flex-col gap-8 w-full md:w-1/2 md:mx-auto p-10 bg-white border border-blueblack rounded-2xl">
        <p>Name: </p>
        <p>Date: </p>
        <div className="flex justify-between pt-3 align-middle gap-3">
          <Link
            to={`/`}
            className="text-blue"
          >
            All Events
          </Link>
          <div className="flex">
            <Link
              to={`/events/edit`}
              className="border-r border-blueblack text-blueblack px-3"
            >
              Edit
            </Link>
            <Link
              to={`/events/delete`}
              className="border-red-400 text-red-500 px-3"
            >
              Delete
            </Link>
          </div>
          {/* <Link to={`/events/${slugify(eventName)}/edit`} className="border-r border-blueblack text-blueblack px-3">Edit</Link>
        <Link to={`/events/${slugify(eventName)}/delete`} className="border-red-400 text-red-500 px-3">Delete</Link> */}
        </div>
        {/* <button onClick={() => handleEditEvent(event.eventName)}>Edit</button>
          <button onClick={() => handleDeleteEvent(event.eventName)}>Delete</button> */}
      </div>
    </Layout>
  );
};

export default EventDetails;
