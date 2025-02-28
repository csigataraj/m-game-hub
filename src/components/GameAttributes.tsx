import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../interfaces/game";
import DefinitionItem from "./DefinitionItem";
import Score from "./Score";

const GameAttributes = ({ game }: { game: Game }) => {
  return (
    <SimpleGrid as="dl" columns={2} spacing={20} padding={"10px"}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <Score value={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
