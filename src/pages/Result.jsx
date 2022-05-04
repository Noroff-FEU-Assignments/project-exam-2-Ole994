import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { POPULATE, BASE_URL } from "../helpers/api/api";

const Result = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios

      .get(BASE_URL + POPULATE)
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
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem aliquam a quia dolores, exercitationem
                            asperiores nihil, veniam vero molestiae quibusdam
                            officia quis expedita voluptas nemo! Odit vitae
                            numquam nobis officiis.
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
