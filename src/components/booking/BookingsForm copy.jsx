import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchemas } from "../../utils/yupSchemas";
import { BOOKING_PATH } from "../../helpers/api/api";
import axios from "axios";
export const BookingForm = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookingSchemas),
  });
  const onFormSubmit = async (data) => {
    const response = await axios.post(BOOKING_PATH, {
      data: {
        name: data.name,
        checkin: data.checkin,
        checkout: data.checkout,
        rooms: data.rooms,
        adults: data.adults,
        children: data.children,
      },
    });
    console.log("After post:", data);
    reset();
    alert("message sent");
  };
  return (
    <>
      <div className="bookingHero"></div>
      <div className="bookingWrap">
        <form className="bookingForm" onSubmit={handleSubmit(onFormSubmit)}>
          <h2>Book your room today</h2>
          <br />
          <input {...register("name")} placeholder="Name" type="text" />
          {errors.name && (
            <p className="error-message-booking">{errors.name.message}</p>
          )}
          <br />
          <input {...register("checkin")} placeholder="Check in" type="date" />
          {errors.checkin && (
            <p className="error-message-booking">{errors.checkin.message}</p>
          )}
          <br />
          <input
            {...register("checkout")}
            placeholder="Check out"
            type="date"
          />
          {errors.checkout && (
            <p className="error-message-booking">{errors.checkout.message}</p>
          )}
          <br />
          <input
            {...register("checkout")}
            placeholder="Check out"
            type="date"
          />
          {errors.checkout && (
            <p className="error-message-booking">{errors.checkout.message}</p>
          )}
          <br />
          <input
            {...register("adults")}
            placeholder="Number of adults"
            type="text"
          />
          {errors.adults && (
            <p className="error-message-booking">{errors.adults.message}</p>
          )}
          <br />
          <input
            {...register("children")}
            placeholder="Number of children"
            type="text"
          />
          {errors.children && (
            <p className="error-message-booking">{errors.children.message}</p>
          )}
          <br />
          <button type="submit">Book</button>
        </form>
      </div>
    </>
  );
};
export default BookingForm;
