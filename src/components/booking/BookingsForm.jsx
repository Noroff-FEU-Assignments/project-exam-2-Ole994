import { useForm } from "react-hook-form";
// description: yup.string().required("Write a topic"),s
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchemas } from "../../utils/yupSchemas";
import axios from "axios";
import { BOOKING_PATH } from "../../helpers/api/api";
const url = BOOKING_PATH;
//firsname
//lasname
// checkin
//checout
//rooms
//adults
//children

export const BookingsForm = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchemas),
  });

  const bookingSubmit = async (data) => {
    const responseData = await axios.post(url, {
      data: {
        name: data.name,
        lastname: data.lastname,
        checkin: data.checkin,
        checkout: data.checkout,
        rooms: data.rooms,
        adults: data.adults,
        children: data.children,
      },
    });
    console.log(responseData);
    alert("message sent");
  };

  return (
    <>
      <div className="bookingContainer">
        <form
          action=""
          className="bookingForm"
          onSubmit={handleSubmit(bookingSubmit)}
        >
          <div className="firstName">
            <label>
              First name
              <input
                {...register("name")}
                type="Your firstname"
                placeholder="first name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </label>
          </div>
          <div className="lastName">
            <label>
              last name
              <input
                {...register("lastname")}
                type="your lastname"
                placeholder="Last name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </label>
          </div>
          <div className="checkin">
            <label>
              checkin
              <input {...register("checkin")} type="date" />
              {errors.checkin && <span>{errors.checkin.message}</span>}
            </label>
          </div>
          {/* <div className="checkout">
            <label>
              checkout
              <input {...register("checkout")} type="date" name="" id="" />
              {errors.checkout && <span>{errors.checkout.message}</span>}
            </label>
          </div> */}
          <div className="rooms">
            <select name="" id="">
              {" "}
              <option {...register("rooms")} value=""></option>
              <option value="">one bed</option>
              <option value="">rwo beds</option>
              <option value="">three beds</option>
              {errors.rooms && <span>{errors.rooms.message}</span>}
            </select>
          </div>
          <div className="children">
            <select {...register("rooms")} name="" id="">
              {" "}
              <option value=""></option>
              <option value="">one child</option>
              <option value="">two children</option>
              <option value="">three children</option>
              {errors.children && <span>{errors.children.message}</span>}
            </select>
          </div>
          <div className="adults">
            <select {...register("adults")} name="" id="">
              {" "}
              <option value=""></option>
              <option value="">one adult</option>
              <option value="">two adults </option>
              <option value="">three adults</option>
              {errors.adults && <span>{errors.adults.message}</span>}
            </select>
          </div>
          <div className="bookingSub">
            <button type="submit" value="submit">
              retard
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingsForm;

{
  /* <select
            {...register("beds")}
            onChange={(e) =>
              setValue("select", e.target.value, { shouldValidate: true })
            }
          >
            <option value="">How many beds ?</option>
            <option value="one bed">One Bed</option>
            <option value="two beds">Two Beds</option>
            <option value="three beds">Three Beds</option> */
}
