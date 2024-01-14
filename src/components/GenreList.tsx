import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenres, { Genre } from "../hooks/UseGenres";
import getCroppedImageUrl from "./image-url";
interface Props {
  OnSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ OnSelectGenre }: Props) => {
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
            <Button
              onClick={() => OnSelectGenre(genre)}
              fontSize="Lg"
              variant="List"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
