import axios from "axios";
//NOT WORKING WITHOUT api/hotels AT THE END
export const BASE_URL = "https://herokuhotels.herokuapp.com/";

export const URL_ = "https://herokuhotels.herokuapp.com/";

export const AUTH_URL = `https://herokuhotels.herokuapp.com/api/auth/local`;
export const BOOKINGS_URL = `${BASE_URL}api/hotels`;
export const AUTH_URL_ADMIN = `${BASE_URL}api/auth/local`;

export const POPULATE = "?populate=*";
export const BOOKINGS_PATH = BASE_URL + "api/hotels";

export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);
