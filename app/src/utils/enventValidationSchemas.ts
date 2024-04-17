// validationSchema.ts
import * as yup from 'yup';

const eventSchema = yup.object().shape({
  eventName: yup.string().required('Event name is required'),
  eventDate: yup.date().required('Event date is required'),
});

export default eventSchema

