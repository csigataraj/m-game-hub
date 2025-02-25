import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../interfaces/platform";
import { ONE_DAY } from "../config/config";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const useFetchPlatforms = () =>  useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ONE_DAY,
        initialData: platforms
      });
export default useFetchPlatforms;
