import axios from "axios";
//NOT WORKING WITHOUT api/hotels AT THE END
// export const BASE_URL = "https://herokuhotels.herokuapp.com/";
export const BASE_URL = "https://fast-tor-53724.herokuapp.com/";
// export const BOOKINGS_PATH = "api/hotels";

///
export const BASE_URL_NEW = "https://fast-tor-53724.herokuapp.com";

export const CONTACT_PATH = "https://fast-tor-53724.herokuapp.com/api/contacts";

export const AUTH_URL = `https://fast-tor-53724.herokuapp.com/api/auth/local`;

export const POPULATE = "?populate=*";

export const getData = (url) => {
  axios.get(url).then((response) => response.data.data);
};
export const getHotels = getData(BASE_URL + POPULATE);
