import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_PATH } from "../../helpers/api/api";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

const BookingsFetch = () => {
  // const [error, setError] = useState();
  // const [isContentExpanded, setIsContentExpanded] = useState(false);
  // const [bookings, setBookings] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [auth] = useContext(AuthContext);
  // const http = useAxios();
  // const [newList, setNewList] = useState(bookings);
  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchData = async () => {
  //     const data = await http.get(BOOKING_PATH);
  //     setBookings(data.data.data);
  //     setIsLoading(false);
  //   };
  //   fetchData().catch((error) => setError(error.response.data.error));
  // }, [newList, auth]);
  // const handleRemoveItem = async (e) => {
  //   const id = e.target.getAttribute("id");
  //   console.log(id);
  //   const deleteItem = await http.delete(`${BOOKING_PATH}/${id}`);
  //   setNewList(newList.filter((item) => item.id !== id));
  // };
  // if (error) {
  //   return (
  //     <div>
  //       <h1>You have to login to wiev the content on this page!</h1>
  //       <p>Error: {error.status} </p>
  //       <p>{error.message}</p>
  //       <Link to="/login">Login</Link>
  //     </div>
  //   );
  // }
  // if (isLoading) {
  //   return <div>Loading</div>;
  // }
  // if (!auth) {
  //   return (
  //     <div className="unLogged">
  //       <Link to="/login">
  //         {" "}
  //         <div className="buttonUnLogged">
  //           <button>Please login</button>
  //         </div>
  //       </Link>
  //     </div>
  //   );
  // }
  // return (
  //   <div className="bookingContainer">
  //     <h2>Bookings: kkkk</h2>
  //     <button>kjijiojiojoi </button>
  //     {isContentExpanded && (
  //       <div>
  //         {bookings.map((item, idx) => {
  //           return (
  //             <div key={idx} className="bookingAdminContainer">
  //               <div className="bookingAdmin">
  //                 <div className="adminName">Latest booking</div>
  //                 {""}
  //                 <div className="bookingResult">
  //                   <p>Name: {item.attributes.name}</p>
  //                   <p>Checkin: {item.attributes.checkin.substring(0, 10)}</p>
  //                   <p>Checkout:{item.attributes.checkout.substring(0, 10)}</p>
  //                   <p>Rooms: {item.attributes.rooms}</p>
  //                   <p>Adults:{item.attributes.adults}</p>
  //                   <p>Children: {item.attributes.children}</p>
  //                 </div>
  //                 <div className="deleteButton">
  //                   <button
  //                     id={item.id}
  //                     className="buttonMain"
  //                     onClick={handleRemoveItem}
  //                   >
  //                     DELETE
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     )}
  //   </div>
  // );
};

export default BookingsFetch;
