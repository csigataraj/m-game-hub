import axios from "axios";
import { RAWG_API_KEY, RAWG_API_URL } from "../config/config";

export default axios.create({
  baseURL: RAWG_API_URL,
  params: {
    key: RAWG_API_KEY,
  },
});
