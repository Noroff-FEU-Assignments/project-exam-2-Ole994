import BookingsFetch from "../components/booking/BookingsFetch";
import FetchContactData from "../components/contact/FetchContactData";

export const Admin = () => {
  return (
    <>
      <BookingsFetch></BookingsFetch>
      <FetchContactData></FetchContactData>
    </>
  );
};

export default Admin;
