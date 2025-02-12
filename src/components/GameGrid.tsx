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

const GameGrid = () => {
  const { games, error } = useFetchGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((item) => (
          <GameCard key={item.id} game={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
