import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, getData, POPULATE } from "../helpers/api/api";
import mathallen from "../pictures/mathallen.jpg";

const Detail = ({ attributes }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/" + id)
      .then((response) => setData(response.data.data.attributes));
    //
  }, []);
  console.log(data);
  return (
    <div>
      <div className="detailHero">
        <h1>Hotellrom</h1>
      </div>
      <div key={id}>
        <div className="detail-name-container">
          <p className={`name-detail ${data.text}`}> {data.text} </p>
        </div>
        <div className="detail-image-container">
          <img className="hotelRoom" src={data.imageUrl} />
        </div>

        <div>
          <Link to={`/Detail/${id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
