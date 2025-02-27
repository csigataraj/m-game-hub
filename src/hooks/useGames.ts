import { useInfiniteQuery} from "@tanstack/react-query";
import { Game } from "../interfaces/game";
import APIClient, { FetchResponse } from "../services/apiClient";
import { ONE_DAY } from "../config/config";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

const useFetchGames = () => {
const filterConfig = useGameQueryStore(s=>s.query);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", filterConfig],
    queryFn: ({pageParam = 1}) =>
      apiClient.getAll({
        params: {
          genres: filterConfig.genre,
          parent_platforms: filterConfig.platform,
          ordering: filterConfig.order,
          search: filterConfig.searchText,
          page: pageParam
        },
      }),
      staleTime: ONE_DAY,
      keepPreviousData:true,
      getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined

  });
};

export default useFetchGames;
