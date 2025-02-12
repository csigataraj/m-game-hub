import { useState, useEffect } from "react";
import { RAWG_API_URL, RAWG_API_KEY } from "../config/config";
import create from "../services/http-service";

interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useFetchData = <T>(endpoint: string) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const API = create(RAWG_API_URL, RAWG_API_KEY);

  useEffect(() => {
    setLoading(true);
    API.get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch((err) => {
        setData([]);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { data, error, isLoading };
};

export default useFetchData;
