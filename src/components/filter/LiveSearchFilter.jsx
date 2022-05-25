import { useState } from "react";
import { HOTELS_PATH } from "../../helpers/api/api";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LiveSearchFilter = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState(true);
  const [render, setRender] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(HOTELS_PATH).then((response) => setHotels(response.data.data));
    console.log(hotels);
  }, [render]);

  if (isLoading) {
    <h4>loading</h4>;
  }

  const searchFilter = (e) => {
    let filterHotels = hotels.filter((item) => {
      return item.attributes.text
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setHotels(filterHotels);
    setSearchTerm(false);

    console.log(e);

    if (e.target.value < 1) {
      setRender(!render);
    }
  };

  const showResults = () => {
    setRender(false);
  };

  return (
    <>
      <div className="filterWrap">
        <div className="inputResult">
          <input
            placeholder="Search"
            type="text"
            onChange={searchFilter}
            onFocus={showResults}
            tabIndex="0"
          />
        </div>

        <div className="filterResultContainer">
          {hotels.map((item) => {
            return (
              <div
                className="typehead-item"
                key={item.id}
                style={{
                  backgroundColor: "white",
                  display: searchTerm ? "none" : "block",
                }}
              >
                <Link to={`detail/${item.id}`}>{item.attributes.text}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LiveSearchFilter;
