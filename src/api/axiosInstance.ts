import axios from "axios";
const PF = import.meta.env.VITE_REACT_APP_API_URL;
export const myAPIClient = axios.create({
  baseURL: `${PF}`,
});
