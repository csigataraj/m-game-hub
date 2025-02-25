import { Heading } from "@chakra-ui/react";
import { GameFilterConfig } from "../interfaces/game";
import useFetchPlatforms from "../hooks/usePlatforms";
import useFetchGenres from "../hooks/useGenres";
import useId from "../hooks/useId";

const DynamicHeading = ({
  filterConfig,
}: {
  filterConfig: GameFilterConfig;
}) => {
  const { data: platforms } = useFetchPlatforms();
  const { data: genres } = useFetchGenres();

  const heading = `${useId(platforms, filterConfig.platform) || ""} ${
    useId(genres, filterConfig.genre) || ""
  } Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default DynamicHeading;
