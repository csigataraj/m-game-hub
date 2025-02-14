import { Game, GameFilterConfig } from "../interfaces/game";
import useFetchData from "./useData";

const useFetchGames = (filterConfig: GameFilterConfig) =>
  useFetchData<Game>(
    "games",
    {
      params: {
        genres: filterConfig.genre?.id,
        platforms: filterConfig.platform?.id,
        ordering: filterConfig.order,
      },
    },
    [filterConfig]
  );

export default useFetchGames;
