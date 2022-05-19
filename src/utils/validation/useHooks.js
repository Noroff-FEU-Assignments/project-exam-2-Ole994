import * as yup from "yup";

export const contactSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("please enter your first name")
    .min(3, "The name must be at least 3 characters"),

  lastname: yup
    .string()
    .required("Please enter your last name (minimum 4 charaters)")
    .min(4, "The last name must be at least 4 characters"),

  email: yup
    .string()
    .required("please enter your email")
    .email("please enter a valid email"),

  // subject: yup.string().required("Please choose a subject"),

  messages: yup
    .string()
    .required("please enter your message")
    .min(10, "The message must be at least 10 characters"),
});
