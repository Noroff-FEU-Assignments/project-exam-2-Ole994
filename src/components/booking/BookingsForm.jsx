import React from "react";
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
  } = useForm({ resolver: yupResolver(bookingSchemas) });

  const onFormSubmit = async (data) => {
    console.log("response data before post:", { data });
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
    console.log("response data after post:", response.data);
    reset();
  };

  return (
    <form className="card" onSubmit={handleSubmit(onFormSubmit)}>
      <div className="row">
        <div className="col">
          <div className="">
            <label>First name</label>
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              required
            />
            <p>{errors.name?.message}</p>
            <br />
          </div>
        </div>

        <div className="col">
          <div className="">
            <label>Last name</label>
            <input
              {...register("checkin")}
              placeholder="Check in"
              type="date"
              required
            />
            <p>{errors.checkin?.message}</p>

            <br />
          </div>
        </div>

        <div className="col">
          <div className="">
            <label>checkout</label>
            <input
              {...register("checkout")}
              placeholder="Check out"
              type="date"
              required
            />
            <p>{errors.checkout?.message}</p>
            <br />
          </div>
        </div>

        <div className="col">
          <div className="">
            <label>rooms</label>
            <input
              {...register("rooms")}
              placeholder="Rooms"
              type="text"
              required
            />
            <p>{errors.rooms?.message}</p>
            <br />
          </div>
        </div>

        <div className="col">
          <div className="">
            <label>adults</label>
            <input
              {...register("adults")}
              placeholder="Number of adults"
              type="text"
              required
            />
            <p>{errors.adults?.message}</p>
            <br />

            <input
              {...register("children")}
              placeholder="Number of children"
              type="text"
              required
            />
            <p>{errors.children?.message}</p>
            <br />
          </div>
        </div>

        <input
          {...register("adults")}
          placeholder="Number of adults"
          type="text"
          required
        />
        <p>{errors.adults?.message}</p>
        <br />

        <input
          {...register("children")}
          placeholder="Number of children"
          type="text"
          required
        />
        <p>{errors.children?.message}</p>
        <br />

        {""}
      </div>
      <button type="submit" value="submit">
        Book
      </button>
    </form>
  );
};

export default BookingForm;

// import React from "react";
// import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";
// import { bookingSchemas } from "../../utils/yupSchemas";
// import { BOOKING_PATH } from "../../helpers/api/api";
// import axios from "axios";

// export const BookingForm = ({}) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({ resolver: yupResolver(bookingSchemas) });

//   const onFormSubmit = async (data) => {
//     console.log("response data before post:", { data });
//     const response = await axios.post(BOOKING_PATH, {
//       data: {
//         name: data.name,
//         checkin: data.checkin,
//         checkout: data.checkout,
//         rooms: data.rooms,
//         adults: data.adults,
//         children: data.children,
//       },
//     });
//     console.log("response data after post:", response.data);
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onFormSubmit)}>
//       <h2>Book your room today</h2>
//       <br />

//       <input {...register("name")} placeholder="Name" type="text" required />
//       <p>{errors.name?.message}</p>
//       <br />

//       <input
//         {...register("checkin")}
//         placeholder="Check in"
//         type="date"
//         required
//       />
//       <p>{errors.checkin?.message}</p>

//       <br />

//       <input
//         {...register("checkout")}
//         placeholder="Check out"
//         type="date"
//         required
//       />
//       <p>{errors.checkout?.message}</p>
//       <br />

//       <input {...register("rooms")} placeholder="Rooms" type="text" required />
//       <p>{errors.rooms?.message}</p>
//       <br />

//       <input
//         {...register("adults")}
//         placeholder="Number of adults"
//         type="text"
//         required
//       />
//       <p>{errors.adults?.message}</p>
//       <br />

//       <input
//         {...register("children")}
//         placeholder="Number of children"
//         type="text"
//         required
//       />
//       <p>{errors.children?.message}</p>
//       <br />

//       <button type="submit">Book</button>
//     </form>
//   );
// };

// export default BookingForm;
