import { useEffect, useState } from "react";
import { RAWG_API_KEY, RAWG_API_URL } from "../config/config";
import create from "../services/http-service";
import { Game, GameResponse } from "../interfaces/game";

const useFetchGames = () => {
  const [isLoading, setLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const API = create(RAWG_API_URL, RAWG_API_KEY);

  useEffect(() => {
    setLoading(true);
    API.get<GameResponse>()
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch((err) => {
        setGames([]);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { games, error, isLoading };
};

export default useFetchGames;
