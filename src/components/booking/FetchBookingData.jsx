import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_PATH } from "../../helpers/api/api";
import { useContext } from "react";
import useToggle from "../../hooks/useToogle";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

// Jeg får ikke hentet all data fra apiet og displayet det på admin siden
//
//
//
//
//

export const FetchBookingData = () => {
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

  const sendBooking = async (formData) => {
    const options = {
      data: {
        name: formData.name,
      },
    };
    const responseData = await http.post(BOOKING_PATH, options);
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
      <h1>Dine meldinger {auth.user.userName}</h1>
      <h2>Messages:</h2>
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
                <div className="adminName">
                  <h3>{item.attributes.name}</h3>
                  <h3>{item.attributes.lastname}</h3>
                  <h3>{item.attributes.checkin}</h3>
                  <h3>{item.attributes.checkout}</h3>
                  <h3>{item.attributes.rooms}</h3>
                  <h3>{item.attributes.children}</h3>
                  <h3>{item.attributes.adults}</h3>
                </div>
                {""}
                <div className="adminContactStuff">
                  {/* <p>{item.attributes.messages}</p>
                  <p>{item.attributes.email}</p> */}
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

export default FetchBookingData;
