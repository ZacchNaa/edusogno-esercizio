import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import events from "../assets/data"; // Assuming events array is imported here
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { slugify } from "../utils/utils";

const EditEvent: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const event = events[parseInt(id, 10)];
    setEventName(event.eventName);
    setEventDate(event.eventDate);
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedEvent = { eventName, eventDate, slug: slugify(eventName) };
    events[parseInt(id, 10)] = updatedEvent; // Update event in events array
    navigate(`/events/${id}`); // Redirect to Event Details Page
  };

  return (
    <Layout>
      <Heading heading="Edit Event" />
      <h1>Edit Event</h1>
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
        <button type="submit">Update Event</button>
      </form>
    </Layout>
  );
};

export default EditEvent;
