import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../utils/yupSchemas";

const BookingsForm = ({ sendBooking }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const on = (formData) => {
    console.log("Form Data: ", formData);

    sendBooking(formData).catch(console.error);
    alert("Booking gjennomført");
  };

  return (
    <>
      <form onSubmit={handleSubmit(on)} className="card">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Fornavn</label>
              <input {...register("title")} placeholder="ex. Ole" />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Etternavn</label>
              <input {...register("lastName")} placeholder="ex. Nordmann" />
              {errors.title && <p>{errors.title.message}</p>}
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
              {errors.contact && <p>{errors.contact.message}</p>}
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

export default BookingsForm;
