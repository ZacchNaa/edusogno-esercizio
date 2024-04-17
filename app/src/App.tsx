import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserDashboard from "./views/UserDashboard";
import Register from "./views/Register";
import Login from "./views/Login";
import ResetPassword from "./views/ResetPassword";
import AdminDashboard from "./views/AdminDashboard";
import EventForm from "./views/EventForm";
import EventDetails from "./views/EventDetails";
// import EditEvent from "./views/EditEvent";

function App() {
  return (
    <div className="w-full flex flex-cols text-center h-screen">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/me" element={<UserDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/events/add" element={<EventForm />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/:id/edit" element={<EventForm />} />
      </Routes>
    </div>
  );
}

export default App;
