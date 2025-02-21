import { useQuery } from "@tanstack/react-query";
import { Genre } from "../interfaces/genre";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

const useFetchGenres = () => 
     useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
        staleTime: 24*60*60*1000, //24h
        initialData: {count: genres.length, results: genres}
      });
export default useFetchGenres;
