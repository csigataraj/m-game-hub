import { Game } from "../interfaces/game";
import useFetchData from "./useData";

const useFetchGames = () => useFetchData<Game>("games");

export default useFetchGames;
