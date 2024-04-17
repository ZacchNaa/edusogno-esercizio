import Heading from "../components/Heading";
import Layout from "../components/Layout/Layout";
import events from "../assets/data";
import BaseCard from "../components/BaseCard";
import BaseButton from "../components/BaseButton";

interface Event {
  eventName: string;
  eventDate: string;
}

function AdminDashboard() {
  return (
    <Layout>
      <Heading heading="Ciao NOME ecco i tuoi eventi" />
      <div className="w-full flex flex-col lg:mt-14 xl:mt-5 xl:max-w-[95%] xl:mx-auto 2xl:mx-16 gap-5">
        <div className="flex justify-end">
          <BaseButton label="Add Event" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-5 2xl:gap-16">
          {events.map((event: Event) => (
            <BaseCard eventName={event.eventName} eventDate={event.eventDate} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard;
