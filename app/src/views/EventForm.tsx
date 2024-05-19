import React, { useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import BaseInput from "../components/BaseInput";
import { Controller, useForm } from "react-hook-form";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import { yupResolver } from "@hookform/resolvers/yup";
import eventSchema from "../utils/enventValidationSchemas";
import BaseButton from "../components/BaseButton";
import { EventData } from "../types";
import { useAuth } from "../context/AuthContext";
import client from "../configurations/ApiClients";
import useDataMutate from "../hooks/useDataMutate";
import ApiConstants from "../configurations/apiConstants";

interface FormData {
  attendees?: string[];
  event_name: string;
  event_date: Date;
}

const EventForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentEvent: EventData = location.state
  const { id } = useParams();
  const isEditing = !!id;
  const { setMessage } = useAuth();
  const { mutateAsync: addEvent } = useDataMutate<EventData>(["events"], client.createEvent);
  const { mutateAsync: editEvent } = useDataMutate<EventData>(["events"], client.updateEvent);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(eventSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (isEditing) {
      const updatedEvent = {
        ...data,
        event_date: data.event_date.toISOString(),
        _id: currentEvent._id || id
      };
      try {
        await editEvent(updatedEvent)
        navigate("/");
      } catch (error) {
        setMessage({text: "We could not update the event, please try again", type:"error"})
      }
    } else {
      const newEvent = {
        ...data,
        event_date: data.event_date.toISOString(), 
      };
      await addEvent(newEvent)
      navigate("/");
    }
  };

  useEffect(() => {
    if(isEditing){setValue("event_name", currentEvent?.event_name);
    setValue("event_date", new Date(currentEvent?.event_date));
    setValue("attendees", currentEvent?.attendees);}
  }, [setValue, currentEvent, isEditing]);

  return (
    <Layout>
      <Heading heading={isEditing  ? 'Edit Event' : 'Add Event'} />
      <form onSubmit={handleSubmit(onSubmit)} 
        className="relative flex flex-col gap-8 w-full md:w-1/2 mx-auto p-10 bg-white border border-blueblack rounded-2xl">
        <BaseInput
          type="text"
          name="event_name"
          placeholder="Event Name"
          label="Event Name"
          register={register}
          error={errors.event_name?.message}
        />
        <div className="relative">
          <textarea 
          {...register("attendees")} 
          name="attendees" 
          id="attendees" 
          cols={30} 
          rows={3} 
          className={`h-full w-full disabled:text-muted border-b border-metal placeholder:text-muted pt-4 pb-1.5 text-sm font-normal focus:outline-none disabled:bg-blue-gray-50`}></textarea>
          
      <label htmlFor="attendees" className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-bold leading-tight !text-dark transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Event Attendees
      </label>
        </div>
        <Controller
          control={control}
          name="event_date"
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
            className="border-b border-metal text-left text-sm"
              onChange={onChange}
              value={value ? new Date(value) : null}
            />
          )}
        />
        <BaseButton label={isEditing  ? 'Update' : 'Add'} loading={isSubmitting} disabled={isSubmitting}/>
        <Link to="/" className="border-r border-muted text-blue text-left px-3">View Events</Link>
      </form>
    </Layout>
  );
};

export default EventForm;
