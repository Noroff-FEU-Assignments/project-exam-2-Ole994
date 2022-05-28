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
      <h2>Messages: {auth.user.userName}</h2>

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
              <div key={idx} className="contactFlex">
                <div className="contactAdminContainer">
                  <div className="contactAdmin">
                    {""}
                    <div className="adminContactStuff">
                      <p>Name: {item.attributes.firstname}</p>
                      <p>Last name: {item.attributes.lastname}</p>
                      <p>Email: {item.attributes.email}</p>
                      <p>Messages: {item.attributes.messages}</p>
                    </div>
                  </div>
                </div>
                <div className="buttonContact">
                  <button onClick={handleDelete}>DELETE</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FetchContactData;
