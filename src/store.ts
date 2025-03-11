import { create } from "zustand";
import { GameFilterConfig } from "./interfaces/game";

interface GameQueryStore {
  query: GameFilterConfig;
  search: (text: string) => void;
  selectGenre: (id: number) => void;
  selectPlatform: (id: number) => void;
  setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  query: {},
  search: (searchText: string) => set(() => ({ query: { searchText } })),
  selectGenre: (genre: number) =>
    set((store) => ({ query: { ...store.query, genre } })),
  selectPlatform: (platform: number) =>
    set((store) => ({ query: { ...store.query, platform } })),
  setSortOrder: (order: string) =>
    set((store) => ({ query: { ...store.query, order } })),
}));

export default useGameQueryStore;
