import { Game } from "../interfaces/game";
import { Genre } from "../interfaces/genre";
import useFetchData from "./useData";

const useFetchGames = (selectedGenre: Genre | null) => useFetchData<Game>("games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useFetchGames;
