import { Text, SimpleGrid } from "@chakra-ui/react";
import useFetchGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameFilterConfig } from "../interfaces/game";

const GameGrid = ({ filterConfig }: { filterConfig: GameFilterConfig }) => {
  const { data, error, isLoading } = useFetchGames(filterConfig);
  const skeletons = Array()
    .fill(6)
    .map((_, index) => index + 1);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!data?.results.length) {
    return (
      <Text paddingTop={2} paddingLeft="9px">
        {`No results `}
      </Text>
    );
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((item) => (
        <GameCardContainer key={item.id}>
          <GameCard game={item} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
