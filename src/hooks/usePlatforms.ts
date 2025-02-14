import { Platform } from "../interfaces/platform";
import useFetchData from "./useData";


const useFetchPlatforms = () => useFetchData<Platform>("platforms");
export default useFetchPlatforms;
