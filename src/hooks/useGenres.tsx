import { useState, useEffect } from "react";
import { RAWG_API_URL, RAWG_API_KEY } from "../config/config";
import create from "../services/http-service";
import { Genre, GenreResponse } from "../interfaces/genre";

const useFetchGenres = () => {
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const API = create(RAWG_API_URL, RAWG_API_KEY);

  useEffect(() => {
    setLoading(true);
    API.get<GenreResponse>("genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch((err) => {
        setGenres([]);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { genres, error, isLoading };
};

export default useFetchGenres;
