import { useQuery } from "@tanstack/react-query";
import { Game, GameFilterConfig } from "../interfaces/game";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient<Game>("/games");

const useFetchGames = (filterConfig: GameFilterConfig) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", filterConfig],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: filterConfig.genre?.id,
          parent_platforms: filterConfig.platform?.id,
          ordering: filterConfig.order,
          search: filterConfig.searchText,
        },
      }),
  });
};

export default useFetchGames;
