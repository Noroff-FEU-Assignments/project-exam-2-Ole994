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
          <h1>Bergen</h1>
        </div>
      </div>{" "}
      <div className="containerHome">
        {data.length > 0
          ? data.map(({ attributes, id }) => {
              if (attributes.featured) {
                return (
                  <div className="singleResult" key={id}>
                    <div className="contentContainer">
                      <div className="headingContainer">
                        <h2 className={`heading ${attributes.text}`}>
                          {" "}
                          {attributes.text}{" "}
                        </h2>
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
              }
            })
          : null}
      </div>
      {/* Data end */}
      <div className="breakfastContainer">
        <div className="breakfastDescription">
          <h2>Restaurant og bar</h2>
          <p>
            Vi serverer en stor og smakfull frokost hver morgen for å gi deg
            best mulig start på dagen. Den er fylt med organisk og sunn frokost
            varer med noe søte tillegg hvis det skulle la seg friste.
          </p>
        </div>
      </div>
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
