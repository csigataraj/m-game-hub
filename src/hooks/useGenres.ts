import { Genre } from "../interfaces/genre";
import useFetchData from "./useData";

const useFetchGenres = () => useFetchData<Genre>("genres");
export default useFetchGenres;
