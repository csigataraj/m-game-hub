import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useFetchGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

const GenreList = () => {
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
            <Text fontSize="lg">{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
