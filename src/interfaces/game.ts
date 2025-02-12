export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
export interface GameResponse {
    count: number;
    next: string;
    previous: string;
    results: Game[];
  }