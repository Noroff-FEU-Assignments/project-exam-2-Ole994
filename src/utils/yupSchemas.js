import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email adresse påkrevd")
    .email(
      "Du trenger å legge inn med e-postadressen som er registrert på din konto hos oss"
    ),
  password: yup.string().required("Passord er påkrevd"),
});

export const bookingSchema = yup.object().shape({
  title: yup.string().required("Please enter a title"),
  message: yup.string().required("Please provide a message"),
  contact: yup
    .string()
    .required("Please provide an email so we can contact you"),
});

// export const userLoginSchema = yup.object().shape({
//   email: yup
//     .string()
//     .required("Skriv inn dine mail adresse")
//     .email("Vær snill å skriv inn en gylding email  adresse"),
//   password: yup
//     .string()
//     .required("Vær snill å skriv inn en gyldig email adresse"),
// });
// ("");
// export const bookingSchemas = yup.object().shape({
//   title: yup.string().required("vær snill å skriv inn en overskrift"),
//   message: yup.string().required("vær snill å skriv inn en melding"),
//   contact: yup
//     .string()
//     .required("Skriv inn en email slik at vi kan kontakte deg"),
// });
