import Heading from "../components/Heading";
import Layout from "../components/Layout/Layout";
import events from "../assets/data"
import BaseCard from "../components/BaseCard";

interface Event {
  eventName: string,
  eventDate: string,
}

function Dashboard() {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-5">
        <Heading heading="Ciao NOME ecco i tuoi eventi" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 gap-5 xl:gap-5 xl:mx-16 2xl:gap-16 2xl:mx-16">
          {events.map((event: Event) => <BaseCard eventName={event.eventName} eventDate={event.eventDate} /> )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
