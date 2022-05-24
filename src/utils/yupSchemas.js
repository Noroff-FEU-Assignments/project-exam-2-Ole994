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
    .min(3, "The last name must be at least 4 characters"),

  lastname: yup
    .string()
    .required("please write a valid last name")
    .min(4, "The last name must be at least 4 characters"),

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
    .required("please write a valid first name")
    .min(2, "The last name must be at least 4 characters"),
  checkin: yup.date().required("Choose date for check in"),
  checkout: yup.date().nullable().required("Choose date for check out"),
  rooms: yup.string().required("Please pick a room"),
  adults: yup.string().required("How many adults will there be?"),
  children: yup.string().required("how many children will there be?"),
});
// description: yup
//     .string()
//     .required("Write a topic")
//     .min(10, "The last name must be at least 10 characters"),// message: yup.string().required("vær snill å skriv inn en melding"),
// lastname: yup
//     .string()
//     .required("Please type in your last name")
//     .min(2, "The last name must be at least 4 characters"),
