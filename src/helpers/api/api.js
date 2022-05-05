import axios from "axios";
export const BASE_URL = "https://herokuhotels.herokuapp.com/api/hotels";
export const AUTH_URL = `https://herokuhotels.herokuapp.com/api/auth/local`;
export const HOTELS_URL = `${BASE_URL}api/hotels`;
export const AUTH_URL_ADMIN = `${BASE_URL}api/auth/local`;

export const POPULATE = "?populate=*";
export const BOOKINGS_PATH = "api/hotels";
//local

export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);

//use only this until heroku works
// export const getHotels = getData(api_url + POPULATE);
