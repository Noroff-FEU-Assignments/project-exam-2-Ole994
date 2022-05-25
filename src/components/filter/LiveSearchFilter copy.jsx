import { useState } from "react";
import { FILTER_URL } from "../../helpers/api/api";
import { useEffect } from "react";
import axios from "axios";

const LiveSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(FILTER_URL).then((response) => setData(response.data.data));

    setIsLoading(false);
  }, []);
  // console.log(BASE_URL, BOOKINGS_URL);
  if (isLoading) {
    <h4>loading</h4>;
  }
  return (
    <>
      <div className="filterWrap">
        <div className="inputResult">
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />{" "}
        </div>
        {data
          .filter((hotel) => {
            if (searchTerm == "") {
              return hotel;
            } else if (
              hotel.attributes.text
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return hotel;
            }
          })
          .map((hotel, key) => {
            return (
              <div className="filterResultContainer" key={key}>
                {/* <p> {hotel.attributes.text} </p> */}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default LiveSearchFilter;
