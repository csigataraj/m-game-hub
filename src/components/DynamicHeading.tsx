import { Heading } from "@chakra-ui/react";
import { GameFilterConfig } from "../interfaces/game";
import useFetchPlatforms from "../hooks/usePlatforms";
import useFetchGenres from "../hooks/useGenres";

const DynamicHeading = ({
  filterConfig,
}: {
  filterConfig: GameFilterConfig;
}) => {
  const { data: platforms } = useFetchPlatforms();
  const { data: genres } = useFetchGenres();

  let selectedGenre;
  let selectedPlatform;

  if (filterConfig.genre) {
    selectedGenre = genres?.results.find(
      (item) => item.id === filterConfig.genre
    )?.name;
  }

  if (filterConfig.platform) {
    selectedPlatform = platforms?.results.find(
      (item) => item.id === filterConfig.platform
    )?.name;
  }

  const heading = `${selectedGenre || ""} ${selectedPlatform || ""} Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default DynamicHeading;
