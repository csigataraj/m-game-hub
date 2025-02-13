import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useFetchGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import { Genre } from "../interfaces/genre";

const GenreList = ({
  selectedGenre,
  onSelectGenre,
}: {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}) => {
  const { data, isLoading, error } = useFetchGenres();
  const skeletons = Array()
    .fill(19)
    .map((_, index) => index + 1);
  if (error) {
    return null;
  }
  if (isLoading) {
    return (
      <List>
        {skeletons.map((item) => (
          <GenreListItemSkeleton key={item} />
        ))}
      </List>
    );
  }

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(item.image_background)}
            />
            <Button
              fontWeight={item.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(item)}
            >
              {item.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
