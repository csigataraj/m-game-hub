import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Game } from "../interfaces/game";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

const GameCard = ({ game }: { game: Game }) => {
  const { colorMode } = useColorMode();

  return (
    <Link to={`/games/${game.slug}`}>
      <Card backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody flex={"none"} height={"185px"}>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms} />
            <Score value={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
