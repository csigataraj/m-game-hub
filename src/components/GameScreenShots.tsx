import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

const GameScreenShots = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useScreenshots(id);

  if (isLoading) return <Spinner />;
  if (error) throw Error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((item) => (
        <Image key={item.id} src={item.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
