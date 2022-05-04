import { useContext } from "react";
import { useEffect, useState } from "react";
import { BOOKINGS_PATH } from "../helpers/api/api";
import useToggle from "../hooks/useToogle";
import useAxios from "../hooks/useAxios";
import AuthContext from "../context/AuthContext";
import BookingsForm from "../admin/BookingsForm";

// import BookingCard from "../components/siteBlocks/bookingCard";

const Admin = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(BOOKINGS_PATH);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const sendBooking = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await http.post(BOOKINGS_PATH, options);
    console.log(responseData);
    setIsTriggered();
  };

  // if error object is populated, show user what happened and urge them to login
  if (error) {
    return (
      <div>
        <h1>Du må være logget inn for å se innholdet på denne siden</h1>
        <h3>Error : {error.status}</h3>
        <p>{error.message}</p>
        <p>Please Login</p>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {auth.user.username}</h1>
      <hr />
      <h2>Bookings List:</h2>

      {bookings.map((item, idx) => {
        const deleteBooking = async () => {
          const responseData = await http.delete(`${BOOKINGS_PATH}/${item.id}`);
          console.log(responseData);
        };

        const handleDelete = () => {
          if (window.confirm("Are you sure?")) {
            deleteBooking();
            setIsTriggered();
          } else {
            return;
          }
        };
        return (
          <div key={idx}>
            <h3>{item.attributes.title}</h3>
            <p to={`/booking/${item.id}`}>VIEW</p>
            <button className="defaultBtn" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        );
      })}

      <hr />
      <h2>Manual Booking entry: </h2>
      <BookingsForm sendBooking={sendBooking} />
    </div>
  );
};

export default Admin;
