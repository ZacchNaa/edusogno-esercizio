import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { EventData } from "../types";
import axios from "axios";
import ApiConstants from "../configurations/apiConstants";
import { useAuth } from "../context/AuthContext";
import { formatDateTime } from "../utils/utils";

const EventDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentEvent: EventData = location.state;

  const {userData, setMessage} = useAuth()

  const handleDeleteEvent = async () => {
    try {
      await axios.delete(`${ApiConstants.DELETE_EVENT_URL}${currentEvent?._id}`);
      navigate("/")
    } catch (error) {
      setMessage({text: "We could not delete the event, please try again", type:"error"})
    }
  };

  return (
    <Layout>
      <Heading heading="Event Details" />
      <div className="relative text-left flex flex-col gap-8 w-full md:w-1/2 md:mx-auto p-10 bg-white border border-blueblack rounded-2xl">
        <p><span className="text-muted">Name:</span> {currentEvent?.event_name} </p>
        <p><span className="text-muted">Date:</span> {formatDateTime(currentEvent?.event_date)} </p>
        <div>
          <p><span className="text-muted">Attendees:</span></p>
          <div className="w-full flex my-2 flex-wrap gap-2 justify-start">
            {currentEvent?.attendees &&
              currentEvent?.attendees.map((attendee) => (
                <div key={attendee} className="text-sm text-muted bg-blueblack px-2 rounded-full">
                  {attendee}
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-between pt-3 align-middle gap-3">
          <Link to={`/`} className="text-blue">
            All Events
          </Link>
          {userData?.role === "admin" && <div className="flex">
            <Link
              to={`/events/${currentEvent?._id}/edit`}
              state={currentEvent}
              className="border-r border-blueblack text-blueblack px-3"
            >
              Edit
            </Link>
            <button className="border-red-400 text-red-500 px-3" onClick={() => handleDeleteEvent()}>Delete</button>
          </div>}
        </div>
      </div>
    </Layout>
  );
};

export default EventDetails;
