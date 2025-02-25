import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../interfaces/genre";
import useFetchGenres from "../hooks/useGenres";

const GenreList = ({
  selectedGenre,
  onSelectGenre,
}: {
  selectedGenre?: number;
  onSelectGenre: (genre: Genre) => void;
}) => {
  const { data } = useFetchGenres();
  let sortedData = data ? [...data.results] : [];
  sortedData.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {sortedData.map((item) => (
          <ListItem key={item.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(item.image_background)}
              />
              <Button
                fontWeight={item.id === selectedGenre ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => onSelectGenre(item)}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
