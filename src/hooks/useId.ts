import { FetchResponse } from "../services/apiClient";
export interface HasId {
  id: number;
}

const useId = <T extends HasId>(data?: FetchResponse<T>, id?: number) =>
  data?.results.find((item) => item.id === id);

export default useId;
