import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../interfaces/platform";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";

const useFetchPlatforms = () =>  useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms').then(res=>res.data),
        staleTime: 24*60*60*1000, //24h
        initialData: {count: platforms.length, results: platforms}
      });
export default useFetchPlatforms;
