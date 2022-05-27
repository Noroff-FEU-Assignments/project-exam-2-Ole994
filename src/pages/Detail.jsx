import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helpers/api/api";
import LiveSearchFilter from "../components/filter/LiveSearchFilter";

const Detail = ({ attributes }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "api/hotels" + "/" + id)
      .then((response) => setData(response.data.data.attributes));
    //
  }, [id]);
  console.log(data);
  return (
    <div className="detailContainer">
      {""}
      <div key={id} className="detailWrapper">
        <div className="detail-image-header-container">
          <img
            className="dynamicPic"
            src={data.imgUrl}
            alt="hotelroom pictures"
          />

          <h2 className={`heading-detail ${data.text}`}> {data.text} </h2>
        </div>
        <LiveSearchFilter></LiveSearchFilter>
        <div className="welcome-text">
          <h1>WELCOME TO HOLIDAZE HOTEL</h1>
          <h2>BEST LOCATION IN BERGEN</h2>
        </div>

        <div className="description-detail">
          <p className={`description-text-detail ${data.description}`}>
            {" "}
            {data.description}{" "}
          </p>
        </div>
        <div>
          <Link to={`/Detail/${id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
//       Hotellrommene av denne standaren har en nydelig utsikt over
// Bergens sjarmerende brygge. Her vil du kunne ligge i en
// dobbeltseng med myke og gode madrasser, med et nattbord som ligger
// rett ved stikkontakter for å lade mobiltelefoner eller annet
// elektroiske komponenter du har med deg på din reise.
// {""}I tillegg vil du på rommet ha tilgang til en god sofa med
// stoler hvor du kan se på tv og slappe av. Rommene er også
// innstalert med vannkoker og stuebord med teppe under. Badet har en
// stor dusj og dobbel vask, med hårføner lett tilgjengelig.
