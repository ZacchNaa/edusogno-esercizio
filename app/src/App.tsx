import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./views/Register";
import Login from "./views/Login";
import ResetPassword from "./views/ResetPassword";
import Dashboard from "./views/Dashboard";
import EventForm from "./views/EventForm";
import EventDetails from "./views/EventDetails";
import ProtectedDashboardRoute from "./routes/ProtectedDashboardRoute";
import ProtectedEventManagementRoute from "./routes/ProtectedEventManagementRoute";

function App() {
  return (
    <div className="w-full flex flex-cols text-center h-screen">
      <Routes>
        <Route path="/" element={<ProtectedDashboardRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="events/:id/view" element={<EventDetails />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/events/" element={<ProtectedEventManagementRoute />}>
          <Route path="add" element={<EventForm />} />
          <Route path=":id/edit" element={<EventForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
