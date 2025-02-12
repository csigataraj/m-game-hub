import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../interfaces/game";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import getCroppedImageUrl from "../services/image-url";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms} />
          <Score value={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
