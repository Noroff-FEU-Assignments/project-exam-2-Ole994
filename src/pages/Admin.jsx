import BookingsFetch from "../components/booking/BookingsFetch";
import FetchContactData from "../components/contact/FetchContactData";

export const Admin = () => {
  return (
    <>
      <div className="gridAdminContent">
        <BookingsFetch></BookingsFetch>
        <FetchContactData></FetchContactData>
      </div>
    </>
  );
};

export default Admin;
