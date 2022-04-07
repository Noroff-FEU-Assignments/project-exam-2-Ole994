import image from "../pictures/Bergen-brygge-pixlr.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { POPULATE } from "../helpers/api/api";
import { BASE_URL } from "../helpers/api/api";
import { format } from "fecha";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);
  return (
    <>
      <div className="container">
        {data.length > 0
          ? data.map(({ attributes, id }) => {
              return (
                <div key={id}>
                  <div className="contentContainer">
                    <div className="headingContainer">
                      <h1 className={`heading ${attributes.text}`}>
                        {" "}
                        {attributes.Text}{" "}
                      </h1>
                    </div>

                    <div>
                      <p>
                        {" "}
                        {format(new Date(attributes.updatedAt), "Do MMMM YYYY")}
                      </p>

                      <div className="detailButton">
                        <Link to={`/Detail/${id}`}>
                          <button>Read more</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      {/* Data end */}
    </>
  );
};

export default Home;
{
  /* <div className="parent-container">
      <div className="image-container-front">
        <img className="hero-front" src={image} alt="" />
      </div>
    </div> */
}
