import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import useFetchGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useFetchGames();
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

  const fetchGamesCount =
    data?.pages.reduce((acc, curr) => acc + curr.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={"10px"}
      >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
