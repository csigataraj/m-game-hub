export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GenreResponse {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}
