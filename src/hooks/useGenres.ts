import { useQuery } from "@tanstack/react-query";
import { Genre } from "../interfaces/genre";
import apiClient, { FetchResponse } from "../services/apiClient";

import genres from "../data/genres";
import { ONE_DAY } from "../config/config";

const useFetchGenres = () => 
     useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
        staleTime: ONE_DAY,
        initialData: {count: genres.length, results: genres}
      });
export default useFetchGenres;
