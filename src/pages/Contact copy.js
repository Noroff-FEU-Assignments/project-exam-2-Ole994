import { useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/validation/useHooks";
import { BASE_URL } from "../helpers/api/api";



const ContactForm = () => {
  const http = useAxios();
  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] =  useState(null)
  const [success, setSuccess] = useState(null)

  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(contactSchema),
  })


  const onSubmit = async data => {
    setSubmitting(true)
    setPostError(null)

    console.log(data)
    try{
      const response = await http.post(`${BASE_URL}/contacts`, data);
    }
  }
}









  return (
    <>
      <form className="card" onSubmit={sendMsg}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>First name</label>
              <input {...register("name")} placeholder="ex. Ole" />
              {/* {errors.name && (<p {errors.name.messages}></p>)} */}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Last name</label>
              <input placeholder="ex. Nordmann" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Message</label>
              <input placeholder="En melding" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input placeholder="Email.." />
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
