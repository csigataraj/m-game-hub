import genres from "../data/genres";
import { Genre } from "../interfaces/genre";
import useFetchData from "./useData";

const useFetchGenres = () => ({data: genres, error: null, isLoading: false});
export default useFetchGenres;
