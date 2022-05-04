import axios from "axios";
export const BASE_URL = "https://herokuhotels.herokuapp.com/api/hotels";
export const AUTH_URL = `https://herokuhotels.herokuapp.com/api/auth/local`;

export const BOOKINS_URL = `${BASE_URL}api/bookings`;
export const POPULATE = "?populate=*";
export const BOOKINGS_PATH = "api/bookings";
//local
export const api_url = "http://localhost:1337/";
export const login_url = "http://localhost:1337/auth/local/";
export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);

//use only this until heroku works
// export const getHotels = getData(api_url + POPULATE);
