import axios from "axios";
// const PF = import.meta.env.VITE_REACT_APP_API_URL;
const PF = "https://musicstreamingapp-a2500a5331b4.herokuapp.com/api/v1/";
export const myAPIClient = axios.create({
  baseURL: `${PF}`,
});
