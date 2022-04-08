import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, getData, POPULATE } from "../helpers/api/api";

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
    <div key={id}>
      <div className="contentContainer">
        <div className="headingContainer">
          <h1 className={`heading ${data.name}`}> {data.Text} </h1>
          <p></p>
        </div>

        <div className="descriptionContainer">
          <p className="description"> {data.Description} </p>
        </div>

        <div className="imageContainer">
          <img className="muscles" src={data.Image} />
        </div>

        <div>
          <Link to={`/Detail/${id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
