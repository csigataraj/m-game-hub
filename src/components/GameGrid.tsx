import { Text, SimpleGrid } from "@chakra-ui/react";
import useFetchGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameFilterConfig } from "../interfaces/game";

const GameGrid = ({ filterConfig }: { filterConfig: GameFilterConfig }) => {
  const { data, error, isLoading } = useFetchGames(filterConfig);
  console.log("GAME DATA: ", data);
  const skeletons = Array()
    .fill(6)
    .map((_, index) => index + 1);

  return (
    <>
      {error && <Text>{error}</Text>}
      {!data.length &&
        filterConfig.genre !== null &&
        filterConfig.platform !== null && (
          <Text paddingTop={2} paddingLeft="9px">
            {`No results for ${filterConfig.genre?.name} genre on ${filterConfig.platform?.name} platform`}
          </Text>
        )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((item) => (
          <GameCardContainer key={item.id}>
            <GameCard game={item} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
