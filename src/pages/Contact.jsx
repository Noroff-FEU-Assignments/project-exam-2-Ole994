import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import EditContact from "../admin&Login/admin/EditContact";
import { contactSchema } from "../utils/validation/useHooks";
import { CONTACT_PATH } from "../helpers/api/api";
const url = CONTACT_PATH;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

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
              {/* {errors.name && (<p {errors.name.messages}></p>)} */}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Last name</label>
              <input {...register("lastname")} placeholder="ex. Nordmann" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Message</label>
              <input {...register("messages")} placeholder="En melding" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input {...register("email")} placeholder="Email.." />
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
