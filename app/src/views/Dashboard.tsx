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

function Dashboard() {
  const navigate = useNavigate();
  const { userData } = useAuth();

  const [events, setEvents] = useState<EventData[] | []>([]);
  const [loading, setLoading] = useState(false);

  const handleAddEvent = () => {
    navigate("/events/add");
  };

  useEffect(() => {
    let isCancelled: boolean = false;

    (async function () {
      if (!isCancelled) {
        try {
          setLoading(true);
          const response = await axios.get(ApiConstants.GET_ALL_EVENTS_URL);
          console.log("🚀 ~ response:", response);
          const userEvents: EventData[] = response.data?.details;
          setEvents(userEvents);
        } catch (error) {
          console.log("🚀 ~ error:", error);
        } finally {
          setLoading(false);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

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
        <div className="w-full flex flex-col justify-center">
          {!loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-5 2xl:gap-16">
              {events.map((event: EventData) => (
                <BaseCard
                  key={event._id}
                  event={event}
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
