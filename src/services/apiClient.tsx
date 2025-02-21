import axios from "axios";
import { RAWG_API_KEY, RAWG_API_URL } from "../config/config";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: RAWG_API_URL,
  params: {
    key: RAWG_API_KEY,
  },
});
