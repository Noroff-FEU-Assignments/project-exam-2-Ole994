import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useContext, useState } from "react";
import axios from "axios";
import { contactSchema } from "../utils/yupSchemas";
import { CONTACT_PATH } from "../helpers/api/api";
const url = CONTACT_PATH;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    const responseData = await axios.post(url, {
      data: {
        firstname: data.firstname,
        messages: data.messages,
        email: data.email,
      },
    });

    reset();
    alert("booking sent");
  };

  return (
    <>
      <div className="container">
        <h1>Contact us</h1>
        <form id="contact" onSubmit={handleSubmit(onSubmit)}>
          <h3>Quick Contact</h3>
          <h4>Contact us today, and get reply with in 24 hours!</h4>
          <fieldset>
            <div className="flexContact">
              <input {...register("firstname")} placeholder="ex. Ole" />
              {errors.firstname && (
                <span className="error-message">
                  {errors.firstname.message}
                </span>
              )}
            </div>
          </fieldset>

          <fieldset>
            <div className="flexContact">
              <input
                {...register("email")}
                placeholder="ex. hotel@example.no.."
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
          </fieldset>

          <fieldset>
            <div className="flexContact">
              <textarea
                {...register("messages")}
                placeholder="ex. Thank you for the stay, can not wait till next time :) "
              />
              {errors.messages && (
                <span className="error-message">{errors.messages.message}</span>
              )}
            </div>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Contact;
