import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import events from "../assets/data"; // Assuming events array is imported here
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading";
import { slugify } from "../utils/utils";
import BaseInput from "../components/BaseInput";
import { Controller, useForm } from "react-hook-form";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import { yupResolver } from "@hookform/resolvers/yup";
import eventSchema from "../utils/enventValidationSchemas";
import BaseButton from "../components/BaseButton";

interface FormData {
  attendees?: string[];
  event_name: string;
  event_date: Date;
}

const EventForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(eventSchema),
  });

  const onSubmit = (data: FormData) => {
    if (isEditing) {
      const updatedEvent = {
        event_name: data.event_name,
        event_date: data.event_date.toISOString(),
        slug: slugify(data.event_name),
      };
      // events[parseInt(id!, 10)] = updatedEvent;
    } else {
      const newEvent = {
        event_name: data.event_name,
        event_date: data.event_date.toISOString(), 
        slug: slugify(data.event_name),
      };
      // events.push(newEvent);
    }
    navigate("/");
  };

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
        <div className="flex">
          <label htmlFor="attendees" className=""></label>
          <textarea 
          {...register("attendees")} 
          name="attendees" 
          id="attendees" 
          cols={30} 
          rows={10} 
          className={`h-full w-full disabled:text-muted border-b border-metal placeholder:text-muted pt-4 pb-1.5 text-sm font-normal focus:outline-none disabled:bg-blue-gray-50`}></textarea>
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
      </form>
    </Layout>
  );
};

export default EventForm;
