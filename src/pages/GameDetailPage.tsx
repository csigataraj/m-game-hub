import useGameDetails from "../hooks/useGameDetails";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import Score from "../components/Score";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw Error;

  return (
    <>
      <Heading size="4xl" mb={4}>
        {data.name}
      </Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetailPage;
