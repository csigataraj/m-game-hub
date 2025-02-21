import { useQuery } from "@tanstack/react-query";
import { Game, GameFilterConfig } from "../interfaces/game";
import apiClient, { FetchResponse } from "../services/apiClient";

const useFetchGames = (filterConfig: GameFilterConfig) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", filterConfig],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: filterConfig.genre?.id,
            parent_platforms: filterConfig.platform?.id,
            ordering: filterConfig.order,
            search: filterConfig.searchText,
          },
        })
        .then((res) => res.data),
  });
};

export default useFetchGames;
