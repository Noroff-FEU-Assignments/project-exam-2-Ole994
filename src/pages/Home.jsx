import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helpers/api/api";
// import { format } from "fecha";
import LiveSearchFilter from "../components/filter/LiveSearchFilter";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_URL + "api/hotels")
      .then((response) => setData(response.data.data));

    setIsLoading(false);
  }, []);
  // console.log(BASE_URL, BOOKINGS_URL);
  if (isLoading) {
    <h4>loading</h4>;
  }
  return (
    <>
      <div>
        <div className="backgroundImgFront">
          <div className="headerFront">
            <h1>Velkommen til Bergen</h1>
          </div>
          <div className="flexHeroButton">
            <div className="viewHotels">
              <Link to={`/Booking`}>
                <button>Book hotelroom now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="liveSearchFilter">
          {" "}
          <LiveSearchFilter />
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
                          src={attributes.imgUrl}
                          alt="Featured hotel rooms"
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
        <div className="backgroundBreakfast">
          <div className="breakfastDescription">
            <h2>Restaurant og bar</h2>
            <p>
              Vi serverer en stor og smakfull frokost hver morgen for å gi deg
              best mulig start på dagen. Den er fylt med organisk og sunn
              frokost varer med noe søte tillegg hvis det skulle la seg friste.
            </p>
          </div>
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
