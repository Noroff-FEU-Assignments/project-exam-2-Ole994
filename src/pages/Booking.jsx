import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditBooking from "../admin&Login/admin/editBookings";
import useAxios from "../hooks/useAxios";
import { CONTACT_PATH } from "../helpers/api/api";
import useToggle from "../hooks/useToogle";

const Booking = () => {
  const { id } = useParams();
  const http = useAxios();
  const [triggered, setTriggered] = useToggle();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await http.get(`${CONTACT_PATH}/${id}`);
      setBooking(responseData.data.data.attributes);
    };
    fetchData().catch(console.error);
  }, [triggered]);

  const updateBooking = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await http.put(`${CONTACT_PATH}/${id}`, options);
    console.log(responseData);
    setTriggered();
  };

  return (
    <div>
      <h1>{booking.title}</h1>
      <h2>{booking.contact}</h2>
      <p>{booking.message}</p>

      <h3>Edit:</h3>
      <EditBooking updateBooking={updateBooking} booking={booking} />
    </div>
  );
};

export default Booking;