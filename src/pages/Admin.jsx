import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKINGS_PATH_NEW, BOOKINGS_PATH } from "../helpers/api/api";
import { useContext } from "react";
import useToggle from "../hooks/useToogle";
import useAxios from "../hooks/useAxios";
import AuthContext from "../context/AuthContext";

const Admin = () => {
  //set const
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const http = useAxios();
  //

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(BOOKINGS_PATH_NEW);
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
    const responseData = await http.post(BOOKINGS_PATH_NEW, options);
    console.log(responseData);
    setIsTriggered();
  };
  if (error) {
    return (
      <div>
        <h1>Du må være logget inn for å se denne siden</h1>
        <p>Error: {error.status} </p>
        <p>{error.message}</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="bookingContainer">
      <h1> velkommen til admin siden {auth.user.userName}</h1>
      <h2>Booking liste:</h2>
      <div>
        {bookings.map((item, idx) => {
          const deleteBooking = async () => {
            const responseData = await http.delete(
              `${BOOKINGS_PATH_NEW}/${item.id}`
            );
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
              <Link to={`/booking/${item.id}`}>VIEW</Link>
              <button className="defaultBtn" onClick={handleDelete}>
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
