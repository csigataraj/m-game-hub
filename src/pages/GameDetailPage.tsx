import useGameQueryStore from "../store";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

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
      <Text>{data.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
