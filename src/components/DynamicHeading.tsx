import { Heading } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/usePlatforms";
import useFetchGenres from "../hooks/useGenres";
import useId from "../hooks/useId";
import useGameQueryStore from "../store";

const DynamicHeading = () => {
  const { data: platforms } = useFetchPlatforms();
  const { data: genres } = useFetchGenres();

  const query = useGameQueryStore((s) => s.query);

  const heading = `${useId(platforms, query.platform)?.name || ""} ${
    useId(genres, query.genre)?.name || ""
  } Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default DynamicHeading;
