import axios from "axios";
import React, { useState, useEffect } from "react";
import { POPULATE, BASE_URL } from "../helpers/api/api";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [post, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setPosts(response.data.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <>
      <div className="filter-container">
        SearchFilter
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        {loading ? (
          <h4>loading</h4>
        ) : (
          post
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.text
                  .toLowerCase()
                  .includes(searchTitle.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((attributes) => (
              <h4 key={attributes.id}> {attributes.text} </h4>
            ))
        )}
      </div>
    </>
  );
};
export default Search;
