import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_PATH } from "../../helpers/api/api";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

export const FetchContactData = () => {
  const [error, setError] = useState();
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const http = useAxios();
  const [newList, setNewList] = useState(contacts);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(CONTACT_PATH);
      setContacts(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [newList, auth]);

  const handleRemoveItem = async (e) => {
    const id = e.target.getAttribute("id");
    console.log(id);

    const deleteItem = await http.delete(`${CONTACT_PATH}/${id}`);
    setNewList(newList.filter((item) => item.id !== id));
  };

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

  if (!auth) {
    return (
      <div>
        {/* <h1>Du må være logget inn for å se denne siden</h1>
        <Link to="/login">Login</Link> */}
      </div>
    );
  }

  return (
    <div className="contactContainer">
      <h3> {auth.user.userName}</h3>
      <h2>Contacts</h2>

      <div>
        {contacts.map((item, idx) => {
          return (
            <div key={idx} className="contactAdminContainer">
              <div className="contactAdmin">
                <div className="adminName">
                  <h3>{item.attributes.firstname}</h3>
                </div>
                {""}
                <div className="adminContactStuff">
                  <p>{item.attributes.messages}</p>
                  <p>{item.attributes.email}</p>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchContactData;
