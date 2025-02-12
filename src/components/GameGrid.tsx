import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import useFetchGames from "../hooks/fetch-games-hook";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

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
        {isLoading && skeletons.map((item) => <GameCardSkeleton key={item} />)}
        {games.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
