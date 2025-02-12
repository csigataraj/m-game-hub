import axios, { AxiosInstance } from "axios";

class HTTPService {
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

  get<T>() {
    return this.axiosAPI.get<T>("games");
  }
}

const create = (endpoint: string, apiKey: string) =>
  new HTTPService(endpoint, apiKey);

export default create;
