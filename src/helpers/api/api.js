import axios from "axios";
export const BASE_URL = "https://herokuhotels.herokuapp.com/api/hotels/";
export const POPULATE = "?populate=*";
export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);
