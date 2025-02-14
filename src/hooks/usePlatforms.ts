import platforms from "../data/platforms";

const useFetchPlatforms = () => ({data: platforms, isLoading: false, error: null});
export default useFetchPlatforms;
