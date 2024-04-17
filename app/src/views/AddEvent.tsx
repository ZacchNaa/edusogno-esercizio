import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import events from "../assets/data"; // Assuming events array is imported here
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { slugify } from "../utils/utils";

const AddEvent: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEvent = { eventName, eventDate, slug: slugify(eventName) };
    events.push(newEvent);
    navigate("/"); 
  };

  return (
    <Layout>
      <Heading heading="Add Event" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </Layout>
  );
};

export default AddEvent;
