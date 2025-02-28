import { Genre } from "./genre";
import { Platform } from "./platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: {
    platform: Platform
  }[];
  metacritic: number;
  rating_top: number;
}

export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export interface GameFilterConfig {
  genre?: number;
  platform?: number;
  order?: string;
  searchText?: string;
}

export interface Publisher {
  id: number;
  name: string;
}