import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import BaseCard from "../components/BaseCard";
import BaseButton from "../components/BaseButton";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import ApiConstants from "../configurations/apiConstants";
import { EventData } from "../types";
import BaseLoader from "../components/BaseLoader";
import { useQuery } from "@tanstack/react-query";
import client from "../configurations/ApiClients";

function Dashboard() {
  const navigate = useNavigate();
  const { userData, setMessage } = useAuth();

const { data: events, isLoading, isError, error} = useQuery({
  queryKey: ["events"],
  queryFn: client.getEvents
})

  const [_, setEvents] = useState<EventData[] | []>([]);
  const [loading, setLoading] = useState(false);

  const handleAddEvent = () => {
    navigate("/events/add");
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${ApiConstants.DELETE_EVENT_URL}${id}`);
      setLoading(true);
      const response = await axios.get(ApiConstants.GET_ALL_EVENTS_URL);
      const userEvents: EventData[] = response.data?.details;
      setEvents(userEvents);
    } catch (error) {
      setMessage({text: "We could not delete the event, please try again", type:"error"})
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(isError) {
      setMessage({text: error.message, type:"error"})
    }
  }, [error?.message, isError]);

  return (
    <Layout>
      <Heading
        heading={`Ciao ${userData?.first_name} ${userData?.last_name} ecco i tuoi eventi`}
      />
      <div className="w-full flex flex-col lg:mt-14 xl:mt-5 xl:max-w-[95%] xl:mx-auto 2xl:mx-16 gap-5">
        {userData?.role === "admin" && (
          <div className="flex justify-end">
            <BaseButton label="Add Event" handleClick={handleAddEvent} />
          </div>
        )}
        <div className="w-full flex flex-col items-center justify-center">
          {!isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-5 2xl:gap-16">
              {events?.map((event: EventData) => (
                <BaseCard
                  key={event._id}
                  event={event}
                  handleDelete={handleDelete}
                  userRole={userData?.role}
                />
              ))}
            </div>
          ) : (
            <BaseLoader />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
