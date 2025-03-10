import { useQuery } from "@tanstack/react-query";
import { ONE_DAY } from "../config/config";
import APIClient from "../services/apiClient";
import { Screenshot } from "../interfaces/game";

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
    staleTime: ONE_DAY,
  });
};

export default useScreenshots;
