import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../interfaces/platform";
import apiClient, { FetchResponse } from "../services/apiClient";
import { ONE_DAY } from "../config/config";

const useFetchPlatforms = () =>  useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res=>res.data),
        staleTime: ONE_DAY,
        initialData: {count: platforms.length, results: platforms}
      });
export default useFetchPlatforms;
