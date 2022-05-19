import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email address required")
    .email("Please write a valid username"),
  password: yup.string().required("Password is required"),
});
//remove the below
export const bookingSchema = yup.object().shape({
  title: yup.string().required("Please enter a title"),
  message: yup.string().required("Please provide a message"),
  contact: yup
    .string()
    .required("Please provide an email so we can contact you"),
});

export const contactSchema = yup.object().shape({
  email: yup
    .string()
    .required("Skriv inn dine mail adresse")
    .email("Please type in a valid email  address"),
  password: yup
    .string()
    .required("Vær snill å skriv inn en gyldig email adresse"),
});
////

export const bookingSchemas = yup.object().shape({
  description: yup.string().required("Write a topic"),
  checkin: yup.string().required("Choose date for cheick in"),
  checkout: yup.string().required("Choose date for cheick out"),
  rooms: yup.string().required("Please pick a room"),
  adults: yup.string().required("How many adults will there be?"),
  children: yup.string().required("how many children will there be?"),
  message: yup.string().required("vær snill å skriv inn en melding"),
});
