import BookingsFetch from "../components/booking/BookingsFetch";
import FetchContactData from "../components/contact/FetchContactData";
import AdminForm from "../components/AdminForm";

export const Admin = () => {
  return (
    <>
      <BookingsFetch></BookingsFetch>
      <FetchContactData></FetchContactData>
    </>
  );
};

//bookings

export default Admin;
