import axios from "axios";

export const BASE_URL = "https://fast-tor-53724.herokuapp.com/";
export const FILTER_URL = "https://fast-tor-53724.herokuapp.com/api/hotels";

export const CONTACT_PATH = "https://fast-tor-53724.herokuapp.com/api/contacts";
export const BOOKING_PATH = "https://fast-tor-53724.herokuapp.com/api/bookings";

export const AUTH_URL = `https://fast-tor-53724.herokuapp.com/api/auth/local`;

export const POPULATE = "?populate=*";

export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);

export default axios.create({});
