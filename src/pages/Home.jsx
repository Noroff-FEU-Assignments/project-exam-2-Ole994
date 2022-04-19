import image from "../pictures/Bergen-brygge-pixlr.jpg";
import breakfast from "../pictures/breakfeast.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { POPULATE, BASE_URL } from "../helpers/api/api";
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
      <div>
        <div className="backgroundImgFront">
          <img className="heroImgFront" src={image} alt="" />
        </div>
      </div>{" "}
      <div className="headerFront">
        <h1>Bergen</h1>
      </div>
      <div className="container">
        {data.length > 0
          ? data.map(({ attributes, id }) => {
              return (
                <div key={id}>
                  <div className="contentContainer">
                    <div className="headingContainer">
                      <h1 className={`heading ${attributes.text}`}>
                        {" "}
                        {attributes.text}{" "}
                      </h1>
                    </div>
                    <div className="imageContainerFront">
                      <img
                        className="dynamicImagesFront"
                        src={attributes.imageUrl}
                        alt=""
                      />
                    </div>

                    <div>
                      <div className="detailButton">
                        <Link to={`/Detail/${id}`}>
                          <button className="readMore">Les mer</button>
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
