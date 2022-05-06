import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { POPULATE, BASE_URL } from "../helpers/api/api";

const Result = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios

      .get(BASE_URL + "api/hotels" + POPULATE)
      .then((response) => setData(response.data.data));
  }, []);
  return (
    <>
      <div className="headerResult">
        <h1>Alle våre hotellrom typer</h1>
      </div>

      {/* <div className="filterContainer">
        <label htmlFor="">
          Filter
          <input type="text" placeholder="Ex. Svitte" />
        </label> */}
      {/* </div> */}

      <div className="containerResult">
        {data.length > 0
          ? data.map(({ attributes, id }) => {
              return (
                <div className="singleResultContainer" key={id}>
                  <div className="ResultContainer">
                    <div className="imageContainerResult">
                      <img
                        className="dynamicImagesResult"
                        src={attributes.imageUrl}
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
                        <div className="descriptionContainer">
                          <p className={`created-result ${data.created_at}`}>
                            {" "}
                            {data.created_at}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="backToDetail">
                        {" "}
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

export default Result;
