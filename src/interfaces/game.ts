import { Genre } from "./genre";
import { Platform } from "./platform";

export interface Game {
  id: number;
  name: string;
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
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  searchText: string;
}
