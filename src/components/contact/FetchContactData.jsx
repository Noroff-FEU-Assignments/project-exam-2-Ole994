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

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!auth) {
    return (
      <>
        <div className="adminLogin">
          <div className="loginNow">
            <h3>You have to login to view the content on this page</h3>
            <Link to="/login">
              {" "}
              <button>Please Login</button>{" "}
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>Messages: {auth.user.userName}</h2>
        <div className="contactContainer">
          <div>
            {contacts.map((item, idx) => {
              return (
                <div key={idx} className="contactAdminContainer">
                  <div className="contactAdmin">
                    <div className="adminContactName">
                      <p>Name: {item.attributes.firstname}</p>
                    </div>
                    {""}

                    <div className="adminContactMessages">
                      <p>Message: {item.attributes.messages}</p>
                    </div>
                    <div className="adminContactEmail">
                      <p>Email: {item.attributes.email}</p>
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
      </div>
    </>
  );
};

export default FetchContactData;
