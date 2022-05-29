import { useState } from "react";
import { HOTELS_PATH } from "../../helpers/api/api";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const LiveSearchFilter = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState(true);
  const [render, setRender] = useState();

  useEffect(() => {
    axios.get(HOTELS_PATH).then((response) => setHotels(response.data.data));
  }, [render]);

  const searchFilter = (e) => {
    let filterHotels = hotels.filter((item) => {
      return item.attributes.text
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setHotels(filterHotels);
    setSearchTerm(false);

    if (e.target.value < 1) {
      setRender(!render);
    }
  };

  const showResults = () => {
    setSearchTerm(false);
    setRender();
  };

  const hideResults = () => {
    setTimeout(function () {
      setSearchTerm(true);
      setRender();
    }, 100);
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
            onBlur={hideResults}
            tabIndex="0"
          />
        </div>

        <div className="filterResultContainer">
          {hotels.map((item) => {
            return (
              <div
                className="filterLinks"
                key={item.id}
                style={{
                  display: searchTerm ? "none" : "block",
                }}
              >
                <Link to={`/Detail/${item.id}`}>{item.attributes.text}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LiveSearchFilter;
