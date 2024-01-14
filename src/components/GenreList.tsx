import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "./image-url";
const GenreList = () => {
  const { data, isLoadinng, error } = UseGenres();
  if (isLoadinng) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="Lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
