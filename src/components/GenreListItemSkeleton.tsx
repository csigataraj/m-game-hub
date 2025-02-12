import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListItemSkeleton = ({ key }: { key: number }) => {
  return (
    <ListItem key={key} paddingY="5px">
      <HStack>
        <Skeleton height="32px" />
        <SkeletonText />
      </HStack>
    </ListItem>
  );
};

export default GenreListItemSkeleton;
