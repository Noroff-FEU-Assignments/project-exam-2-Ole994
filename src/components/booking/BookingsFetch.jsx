import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_PATH } from "../../helpers/api/api";
import { useContext } from "react";
import useToggle from "../../hooks/useToogle";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

const BookingsFetch = () => {
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
      const data = await http.get(BOOKING_PATH);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  if (error) {
    return (
      <div>
        <h1>Du må være logget inn for å se meldinger</h1>
        <p>Error: {error.status} </p>
        <p>{error.message}</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!auth) {
    return (
      <div>
        <h1>Du må være logget inn for å se denne siden</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div className="bookingContainer">
      {/* <h1>Messages {auth.user.userName}</h1> */}
      <h2>Bookings:</h2>
      <div>
        {bookings.map((item, idx) => {
          const deleteBooking = async () => {
            const responseData = await http.delete(
              `${BOOKING_PATH}/${item.id}`
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
            <div key={idx} className="contactAdminContainer">
              <div className="contactAdmin">
                <div className="adminName">heiLatest booking</div>
                {""}
                <div className="bookingResult">
                  <p>Name: {item.attributes.name}</p>
                  <p>Checkin: {item.attributes.checkin}</p>
                  <p>Checkout:{item.attributes.checkout}</p>
                  <p>Rooms: {item.attributes.rooms}</p>
                  <p>Adults:{item.attributes.adults}</p>
                  <p>Children: {item.attributes.children}</p>
                </div>
                <div className="deleteButton">
                  <button className="buttonMain" onClick={handleDelete}>
                    DELETE
                  </button>
                </div>
              </div>

              {/* <Link to={`/booking/${item.id}`}>VIEW</Link> */}
            </div>
          );
        })}
      </div>
      {/* <BookingsForm sendBooking={sendBooking} /> */}
    </div>
  );
};

export default BookingsFetch;
