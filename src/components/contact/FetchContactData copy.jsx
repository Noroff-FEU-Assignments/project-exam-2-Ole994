import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_PATH } from "../../helpers/api/api";
import { useContext } from "react";
import useToggle from "../../hooks/useToogle";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

export const FetchContactData = () => {
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
      const data = await http.get(CONTACT_PATH);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const sendContact = async (formData) => {
    const options = {
      data: {
        name: formData.firstname,
        lastname: formData.lasttname,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await http.post(CONTACT_PATH, options);
    console.log(responseData);
    setIsTriggered();
  };
  if (error) {
    // return (
    //   <div>
    //     <h1>Du må være logget inn for å se meldinger</h1>
    //     <p>Error: {error.status} </p>
    //     <p>{error.message}</p>
    //     <Link to="/login">Login</Link>
    //   </div>
    // );
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!auth) {
    return (
      <div>
        {/* <h1>Du må være logget inn for å se denne siden</h1>
        <Link to="/login">Login</Link> */}
      </div>
    );
  }

  return (
    <div className="bookingContainer">
      {/* <h1>Messages {auth.user.userName}</h1> */}

      <div>
        {bookings.map((item, idx) => {
          const deleteBooking = async () => {
            const responseData = await http.delete(
              `${CONTACT_PATH}/${item.id}`
            );
          };

          const handleDelete = () => {
            if (window.confirm("Are you sure?")) {
              deleteBooking();
              setIsTriggered();
            } else {
              <div>
                <h4>Message deleted</h4>
              </div>;
            }
          };
          return (
            <>
              <div className="contactFlex">
                <h3>Contact:</h3>
              </div>
              <div key={idx} className="contactAdminContainer">
                <div className="contactAdmin">
                  {""}
                  <div className="adminContactStuff">
                    <h>Name: {item.attributes.firstname}</h>
                    <h>Last name: {item.attributes.lastname}</h>
                    <h>Email: {item.attributes.email}</h>
                    <h>Messages: {item.attributes.messages}</h>
                  </div>
                  <div className="deleteButton">
                    <button className="buttonMain" onClick={handleDelete}>
                      DELETE
                    </button>
                  </div>
                </div>

                {/* <Link to={`/booking/${item.id}`}>VIEW</Link> */}
              </div>
            </>
          );
        })}
      </div>
      {/* <BookingsForm sendBooking={sendBooking} /> */}
    </div>
  );
};

export default FetchContactData;
