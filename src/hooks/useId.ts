import { UseQueryResult } from "@tanstack/react-query";
import { FetchResponse } from "../services/apiClient";

const useId = <T,>(data?: FetchResponse<T>, id?: number) =>
  data?.results.find((item) => item === id);

export default useId;
