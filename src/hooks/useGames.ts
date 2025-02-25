import { useInfiniteQuery} from "@tanstack/react-query";
import { Game, GameFilterConfig } from "../interfaces/game";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient<Game>("/games");

const useFetchGames = (filterConfig: GameFilterConfig) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", filterConfig],
    queryFn: ({pageParam = 1}) =>
      apiClient.getAll({
        params: {
          genres: filterConfig.genre?.id,
          parent_platforms: filterConfig.platform?.id,
          ordering: filterConfig.order,
          search: filterConfig.searchText,
          page: pageParam
        },
      }),
      staleTime: 1000,
      keepPreviousData:true,
      getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined

  });
};

export default useFetchGames;
