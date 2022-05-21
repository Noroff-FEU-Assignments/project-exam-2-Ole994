import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useContext, useState } from "react";
import axios from "axios";
import { contactSchema } from "../utils/yupSchemas";

import { CONTACT_PATH } from "../helpers/api/api";
// import { useEffect } from "react";
// import EditContact from "../admin&Login/admin/EditContact";

const url = CONTACT_PATH;

//på contact siden må jeg fylle ut alle felt for å få booket (supert),
//men jeg får ingen feilmelding fra yup hvis det ikke er fylt ut riktig

const Contact = () => {
  // const [submitting, setSubmitting] = useState(false);
  // const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    const responseData = await axios.post(url, {
      data: {
        firstname: data.firstname,
        lastname: data.lastame,
        messages: data.messages,
        email: data.email,
      },
    });
    console.log(responseData);
    alert("message sent");
  };

  return (
    <>
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>First name</label>
              <input {...register("firstname")} placeholder="ex. Ole" />
              {errors.firstname && (
                <span className="test">{errors.firstname.message}</span>
              )}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Last name</label>
              <input {...register("lastname")} placeholder="ex. Nordmann" />
              {errors.lastname && <span>{errors.lastname.message}</span>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Message</label>
              <input
                {...register("messages")}
                placeholder="ex. Thank you for the stay, can not wait till next time :) "
              />
              {errors.messages && <span>{errors.messages.message}</span>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input
                {...register("email")}
                placeholder="ex. hotel@example.no.."
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>

          {""}
          <div className="col">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
      {/* <EditContact /> */}
    </>
  );
};

export default Contact;
