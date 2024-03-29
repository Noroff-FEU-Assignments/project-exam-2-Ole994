import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helpers/api/api";

const Result = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios

      .get(BASE_URL + "api/hotels")
      .then((response) => setData(response.data.data));
  }, []);
  return (
    <>
      <div className="headerResult">
        <h1>Our hotels</h1>
      </div>

      <div className="containerResult">
        {data.length > 0
          ? data.map(({ attributes, id }) => {
              return (
                <div className="singleResultContainer" key={id}>
                  <div className="ResultContainer">
                    <div className="imageContainerResult">
                      <img
                        className="dynamicImagesResult"
                        src={attributes.imgUrl}
                        alt=""
                      />
                    </div>
                    <div className="textArea">
                      <div className="headingResult">
                        <h2 className={`headingResult ${attributes.text}`}>
                          {" "}
                          {attributes.text}{" "}
                        </h2>
                        {""}
                        <div className="created-at-wrap">
                          <p
                            className={`created-result ${attributes.created_at}`}
                          >
                            {" "}
                            {data.created_at}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="backToDetail">
                        {" "}
                        <Link to={`/Detail/${id}`}>
                          <button className="readMore">Read more</button>
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

export default Result;
