import axios from "axios";
//NOT WORKING WITHOUT api/hotels AT THE END
export const BASE_URL = "https://herokuhotels.herokuapp.com/";
export const BOOKINGS_PATH = "api/hotels";

///
export const BASE_URL_NEW = "https://fast-tor-53724.herokuapp.com";

export const BOOKINGS_PATH_NEW =
  "https://fast-tor-53724.herokuapp.com/api/contacts";

export const AUTH_URL = `https://herokuhotels.herokuapp.com/api/auth/local/`;
export const AUTH_URL_NEW = `https://fast-tor-53724.herokuapp.com/api/auth/local`;

// export const AUTH_URL_LOCAL = "https://localhost:1337";
// export const BOOKINGS_URL = `${BASE_URL}api/hotels`;

export const POPULATE = "?populate=*";

export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);
