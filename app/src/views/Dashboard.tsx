import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import events from "../assets/data";
import BaseCard from "../components/BaseCard";
import BaseButton from "../components/BaseButton";
import { useAuth } from "../context/AuthContext";

interface Event {
  eventName: string;
  eventDate: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const { userRole } = useAuth();

  const handleAddEvent = () => {
    navigate("/events/add");
  };

  return (
    <Layout>
      <Heading heading={`Ciao ${userRole === 'admin' ? 'ADMIN' : 'USER'} ecco i tuoi eventi`} />
      <div className="w-full flex flex-col lg:mt-14 xl:mt-5 xl:max-w-[95%] xl:mx-auto 2xl:mx-16 gap-5">
        {userRole === 'admin' && (
          <div className="flex justify-end">
            <BaseButton label="Add Event" handleClick={handleAddEvent} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-5 2xl:gap-16">
          {events.map((event: Event) => (
            <BaseCard key={event.eventName} event={event} userRole={userRole} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
