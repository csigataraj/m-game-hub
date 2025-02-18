import { Game, GameFilterConfig } from "../interfaces/game";
import useFetchData from "./useData";

const useFetchGames = (filterConfig: GameFilterConfig) => {
  // API has a bug that returns no data for playstation parent platform ID, so these are all the individual PS ID-s
  const playstationFailSafe = "15,16,17,18,19,27,187";

  return useFetchData<Game>(
    "games",
    {
      params: {
        genres: filterConfig.genre?.id,
        platforms:
          filterConfig.platform?.id !== 2
            ? filterConfig.platform?.id
            : playstationFailSafe,
        ordering: filterConfig.order,
        search: filterConfig.searchText,
      },
    },
    [filterConfig]
  );
};

export default useFetchGames;
