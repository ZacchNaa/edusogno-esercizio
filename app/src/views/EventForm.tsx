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
  eventName: string;
  eventDate: Date;
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
        eventName: data.eventName,
        eventDate: data.eventDate.toISOString(),
        slug: slugify(data.eventName),
      };
      events[parseInt(id!, 10)] = updatedEvent;
    } else {
      const newEvent = {
        eventName: data.eventName,
        eventDate: data.eventDate.toISOString(), 
        slug: slugify(data.eventName),
      };
      events.push(newEvent);
    }
    navigate("/");
  };

  return (
    <Layout>
      <Heading heading={isEditing  ? 'Edit Event' : 'Add Event'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          type="text"
          name="eventName"
          placeholder="Event Name"
          label="Event Name"
          register={register}
          error={errors.eventName?.message}
        />
        <Controller
          control={control}
          name="eventDate"
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              onChange={onChange}
              value={value ? new Date(value) : null}
            />
          )}
        />
        <BaseButton label={isEditing  ? 'Update Event' : 'Add Event'} loading={isSubmitting} disabled={isSubmitting}/>
      </form>
    </Layout>
  );
};

export default EventForm;
