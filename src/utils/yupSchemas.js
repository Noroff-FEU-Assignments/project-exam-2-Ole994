import * as yup from "yup";

export const useLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Skriv inn dine mail adresse")
    .email("Vær snill å skriv inn en gylding email  adresse"),
  password: yup
    .string()
    .required("Vær snill å skriv inn en gyldig email adresse"),
});
("");
export const bookingSchemas = yup.object().shape({
  title: yup.string().required("vær snill å skriv inn en overskrift"),
  message: yup.string().required("vær snill å skriv inn en melding"),
  contact: yup
    .string()
    .required("Skriv inn en email slik at vi kan kontakte deg"),
});
