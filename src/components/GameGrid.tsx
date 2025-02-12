import { Text, SimpleGrid } from "@chakra-ui/react";
import useFetchGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useFetchGenres from "../hooks/useGenres";

const GameGrid = () => {
  const { games, error, isLoading } = useFetchGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer>
              <GameCardSkeleton key={item} />
            </GameCardContainer>
          ))}
        {games.map((item) => (
          <GameCardContainer>
            <GameCard key={item.id} game={item} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
