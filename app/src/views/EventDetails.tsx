import React from 'react';
import { useParams } from 'react-router-dom';
import events from '../assets/data'; // Assuming events array is imported here
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading';

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const event = events[parseInt(id, 10)];

  const handleEditEvent = (id: string) => {  }
  const handleDeleteEvent = (id: string) => {  }

  return (
    <Layout>
        <Heading heading="Event Details" />
      <p>Name: {event.eventName}</p>
      <p>Date: {event.eventDate}</p>
      <button onClick={() => handleEditEvent(event.eventName)}>Edit</button>
      <button onClick={() => handleDeleteEvent(event.eventName)}>Delete</button>
    </Layout>
  );
};

export default EventDetails;
