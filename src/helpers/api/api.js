import axios from "axios";
export const BASE_URL = "https://herokuhotels.herokuapp.com/api/hotels";
export const AUTH_URL = `https://herokuhotels.herokuapp.com/api/auth/local`;
export const BOOKINS_URL = `${BASE_URL}api/bookings`;
export const POPULATE = "?populate=*";
export const BOOKINGS_PATH = "api/bookings";
export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);
