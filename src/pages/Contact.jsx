import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../utils/validation/useHooks";
import { BASE_URL_NEW, BASE_URL } from "../helpers/api/api";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = BASE_URL_NEW;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  // const { loginError, setLogginError } = useState(null);

  const sendMsg = async (data) => {
    const options = {
      data: {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        message: data.message,
      },
    };
    const responseData = await axios.post(url, options);
    console.log(responseData);
  };

  function onSubmit(data) {
    sendMsg(data);
  }
  navigate("/admin");
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        disabled={submitting}
        className="card"
      >
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Fornavn</label>
              <input {...register("title")} placeholder="ex. Ole" />
              {errors.title && <p>{errors.name.message}</p>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Etternavn</label>
              <input {...register("lastName")} placeholder="ex. Nordmann" />
              {errors.title && <p>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Melding</label>
              <input {...register("message")} placeholder="En melding" />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input {...register("contact")} placeholder="Email.." />
              {errors.contact && <p>{errors.email.message}</p>}
            </div>
          </div>

          {""}
          <div className="col">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact;

// const BookingsForm = ({ sendMsg }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(bookingSchema),
//   });

//   const onSubmit = (formData) => {
//     console.log("Form Data: ", formData);

//     sendMsg(formData).catch(console.error);
//     alert("Booking gjennomført");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className="card">
//         <div className="row">
//           <div className="col">
//             <div className="form-group">
//               <label>Fornavn</label>
//               <input {...register("title")} placeholder="ex. Ole" />
//               {errors.title && <p>{errors.title.message}</p>}
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Etternavn</label>
//               <input {...register("lastName")} placeholder="ex. Nordmann" />
//               {errors.title && <p>{errors.title.message}</p>}
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Melding</label>
//               <input {...register("message")} placeholder="En melding" />
//               {errors.message && <p>{errors.message.message}</p>}
//             </div>
//           </div>

//           <div className="col">
//             <div className="form-group">
//               <label>Email</label>
//               <input {...register("contact")} placeholder="Email.." />
//               {errors.contact && <p>{errors.contact.message}</p>}
//             </div>
//           </div>

//           {""}
//           <div className="col">
//             <input type="submit" value="Submit" />
//           </div>
//         </div>
//       </form>
