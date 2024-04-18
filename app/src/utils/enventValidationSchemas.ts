// validationSchema.ts
import * as yup from 'yup';

const eventSchema = yup.object().shape({
  event_name: yup.string().required('Event name is required'),
  event_date: yup.date().required('Event date is required'),
});

export default eventSchema

