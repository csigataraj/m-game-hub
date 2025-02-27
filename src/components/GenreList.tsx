import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useFetchGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.query.genre);
  const setSelectedGenre = useGameQueryStore((s) => s.selectGenre);
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
                fontWeight={item.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => setSelectedGenre(item.id)}
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
