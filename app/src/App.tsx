import "./App.css";
import Heading from "./components/Layout/Heading";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <Layout>
        <div className="w-full flex flex-col gap-5">
          <Heading heading="Crea il tuo account" />
          <div className="w-1/2 mx-auto bg-white">
            <div className="text-4xl pt-10">HELLO WORLD</div>
            <div className="block">
              <button className="bg-slate-100 shadow-md px-4 py-3">
                {" "}
                Get started
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
