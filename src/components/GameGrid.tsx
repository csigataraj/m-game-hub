import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";
import useFetchGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameFilterConfig } from "../interfaces/game";
import React from "react";

const GameGrid = ({ filterConfig }: { filterConfig: GameFilterConfig }) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useFetchGames(filterConfig);
  const skeletons = Array()
    .fill(6)
    .map((_, index) => index + 1);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!data?.pages.length) {
    return (
      <Text paddingTop={2} paddingLeft="9px">
        {`No results `}
      </Text>
    );
  }

  return (
    <Box padding={"10px"}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((item) => (
              <GameCardContainer key={item.id}>
                <GameCard game={item} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
