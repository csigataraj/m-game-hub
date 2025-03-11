import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw Error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <Box>
          <Heading size="4xl" mb={4}>
            {data.name}
          </Heading>
          <ExpandableText>{data.description_raw}</ExpandableText>
          <GameAttributes game={data} />
        </Box>
        <Box>
          <GameTrailer id={data.id} />
          <GameScreenShots id={data.id} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
