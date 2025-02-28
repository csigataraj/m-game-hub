import { useQuery } from "@tanstack/react-query";
import { ONE_DAY } from "../config/config";
import APIClient from "../services/apiClient";
import { Game } from "../interfaces/game";

const apiClient = new APIClient<Game>("/games");

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getDetails(slug),
    staleTime: ONE_DAY,
  });

export default useGameDetails;
