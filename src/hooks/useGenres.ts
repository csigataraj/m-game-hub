import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { ONE_DAY } from "../config/config";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Genre } from "../interfaces/genre";

const apiClient = new APIClient<Genre>("/genres");

const useFetchGenres = () => 
     useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ONE_DAY,
        initialData: genres
      });
export default useFetchGenres;
