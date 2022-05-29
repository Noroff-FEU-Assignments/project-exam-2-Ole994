import * as yup from "yup";
export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email address required")
    .email("Please write a valid username"),
  password: yup.string().required("Password is required"),
});

export const contactSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("please write a valid first name")
    .min(3, "The last name must be at least 3 characters"),

  messages: yup
    .string()
    .required("please write a message")
    .min(10, "The last message must be at least 10 characters"),

  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email"),
});
////

export const bookingSchemas = yup.object().shape({
  name: yup
    .string()
    .required("please write a name")
    .min(2, "The name must be at least  characters"),
  checkin: yup.date().required("Choose date for check in"),
  checkout: yup.date().nullable().required("Choose date for check out"),
  rooms: yup.string().required("Please pick a room"),
  adults: yup.string().required("How many adults will there be?"),
  children: yup.string().required("how many children will there be?"),
});
