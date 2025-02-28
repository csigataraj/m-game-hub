import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpandableText";

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
    </>
  );
};

export default GameDetailPage;
