import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function BaseAlertMessage() {
  const { message, setMessage } = useAuth();

  useEffect(() => {
    if (message?.text) {
      setTimeout(() => {
        setMessage(null);
      }, 6000);
    }
  }, [message]);

  return (
    <>
      {message?.text && (
        <div
          className={` right-1/2 translate-x-1/2 fixed top-1 z-50 border-t-4 ${
            message.type === "success"
              ? "border-teal-500 text-teal-900 bg-teal-100"
              : "border-red-600 text-red-800 bg-red-100"
          } rounded-b  px-4 py-3 shadow-md`}
          role="alert"
        >
          <div>
            <p className="text-sm">{message?.text}</p>
          </div>
        </div>
      )}
    </>
  );
}
