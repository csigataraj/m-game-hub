import { useQuery } from "@tanstack/react-query";
import { ONE_DAY } from "../config/config";
import APIClient from "../services/apiClient";
import { Movie } from "../interfaces/game";

const useTrailers = (id: number) => {
  const apiClient = new APIClient<Movie>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["trailer", id],
    queryFn: apiClient.getAll,
    staleTime: ONE_DAY,
  });
};

export default useTrailers;
