import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_PATH } from "../../helpers/api/api";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

const BookingsFetch = () => {
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const http = useAxios();
  const [newList, setNewList] = useState(bookings);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(BOOKING_PATH);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [newList, auth]);

  const handleRemoveItem = async (e) => {
    const id = e.target.getAttribute("id");
    console.log(id);

    const deleteItem = await http.delete(`${BOOKING_PATH}/${id}`);
    setNewList(newList.filter((item) => item.id !== id));
  };

  if (error) {
    return (
      <div>
        <h1>You have to login to wiev the content on this page!</h1>
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
      <div className="unLogged">
        <Link to="/login">
          {" "}
          <div className="buttonUnLogged">
            <button>Please login</button>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="bookingContainer">
      {/* <h1>Messages {auth.user.userName}</h1> */}
      <h2>Bookings:</h2>
      <div>
        {bookings.map((item, idx) => {
          return (
            <div key={idx} className="contactAdminContainer">
              <div className="contactAdmin">
                <div className="adminName">Latest booking</div>
                {""}
                <div className="bookingResult">
                  <p>Name: {item.attributes.name}</p>
                  <p>Checkin: {item.attributes.checkin.substring(0, 10)}</p>
                  <p>Checkout:{item.attributes.checkout.substring(0, 10)}</p>
                  <p>Rooms: {item.attributes.rooms}</p>
                  <p>Adults:{item.attributes.adults}</p>
                  <p>Children: {item.attributes.children}</p>
                </div>
                <div className="deleteButton">
                  <button
                    id={item.id}
                    className="buttonMain"
                    onClick={handleRemoveItem}
                  >
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
      Copy
      <p>
        <a
          class="btn btn-primary"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Toggle first element
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Toggle second element
        </button>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Toggle both elements
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
      </div>
      <p>
        <a
          class="btn btn-primary"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Toggle first element
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Toggle second element
        </button>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Toggle both elements
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsFetch;
