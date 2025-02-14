import { useState, useEffect } from "react";
import { RAWG_API_URL, RAWG_API_KEY } from "../config/config";
import create from "../services/http-service";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useFetchData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const API = create(RAWG_API_URL, RAWG_API_KEY);

  useEffect(() => {
    setLoading(true);
    API.get<FetchResponse<T>>(endpoint, {...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setData([]);
        setLoading(false);
        setError(err.message);
      });
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useFetchData;
