import { useEffect, useState } from "react";
import { RAWG_API_KEY, RAWG_API_URL } from "../config/config";
import create from "../services/http-service";
import { Game, GameResponse } from "../interfaces/game";

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const API = create(RAWG_API_URL, RAWG_API_KEY);

  useEffect(() => {
    API.get<GameResponse>()
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setGames([]);
        setError(err.message);
      });
  }, []);

  return { games, error };
};

export default useFetchGames;
