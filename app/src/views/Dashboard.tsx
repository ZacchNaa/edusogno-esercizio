import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import BaseCard from "../components/BaseCard";
import BaseButton from "../components/BaseButton";
import { useAuth } from "../context/AuthContext";
import { EventData } from "../types";
import BaseLoader from "../components/BaseLoader";
import client from "../configurations/ApiClients";
import useDataFetcher from "../hooks/useDataFetcher";
import useDataMutate from "../hooks/useDataMutate";

function Dashboard() {
  const navigate = useNavigate();
  const { userData, setMessage } = useAuth();

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useDataFetcher(["events"], client.getEvents);
  const { mutate: removeEvent } = useDataMutate<EventData>(
    ["events"],
    client.deleteEvent
  );

  const handleAddEvent = () => {
    navigate("/events/add");
  };

  const handleDelete = async (id: string) => {
    removeEvent(id);
  };

  useEffect(() => {
    if (isError) {
      setMessage({ text: error.message, type: "error" });
    }
  }, [error?.message, isError, setMessage]);

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
