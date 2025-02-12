export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
}

export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}
