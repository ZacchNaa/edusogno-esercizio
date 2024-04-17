import Heading from "../components/Heading";
import Layout from "../components/Layout/Layout";
import Register from "./Register";

function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <Layout>
        <div className="w-full flex flex-col gap-5">
          <Heading heading="Crea il tuo account" />
          <Register />
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
