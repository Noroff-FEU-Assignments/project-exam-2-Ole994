import BookingsFetch from "../components/booking/BookingsFetch";
import FetchContactData from "../components/contact/FetchContactData";

export const Admin = () => {
  return (
    <>
      {" "}
      <h1 className="adminPageHeader">Welcome to the admin page</h1>
      <div className="gridAdminContent">
        <BookingsFetch></BookingsFetch>
        <FetchContactData></FetchContactData>
      </div>
    </>
  );
};

export default Admin;
