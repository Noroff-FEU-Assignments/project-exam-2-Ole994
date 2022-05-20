import { Component } from "react";
import axios from "axios";
import { BASE_URL, getData } from "../../helpers/api/api";
import { useEffect, useState } from "react";

export const LiveSearchFilter = () => {
  // const [data, setData] = useState([]);
  // const [input, setInput] = useState("");
  // const [output, setOutput] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const res = await axios.get(BASE_URL + "api/hotels");
  //     setData(res.data.data);
  //   }
  //   getData();
  // }, []);
  // useEffect(() => {
  //   setOutput([]);
  //   data.filter((val) => {});
  // }, [input]);
  // return (
  //   <>
  //     <div className="filterContainer">
  //       {"searchbar"}
  //       <div className="">
  //         <input
  //           type="text"
  //           placeholder=" search "
  //           onChange={(e) => setInput(e.target.value)}
  //         />
  //       </div>
  //       {"output"}
  //       <div className="output">
  //         {/* {data.map((item) => (
  //           // <p>{item.attrubtes.text}</p>
  //         ))} */}
  //       </div>
  //     </div>
  //   </>
  // );
};

export default LiveSearchFilter;
