import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HTTPService<T> {
  endpoint: string;
  axiosAPI: AxiosInstance;
  API_KEY: string;

  constructor(endpoint: string, apiKey: string) {
    this.endpoint = endpoint;
    this.API_KEY = apiKey;
    this.axiosAPI = axios.create({
      baseURL: this.endpoint,
      params: {
        key: this.API_KEY,
      },
    });
  }

  get(endpoint: string, options?: AxiosRequestConfig) {
    return this.axiosAPI.get<T[]>(endpoint, options).then((res) => res.data);
  }
}

export default HTTPService;
