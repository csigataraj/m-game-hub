import { useEffect, useState } from "react";
import create from "../services/http-service";
import { RAWG_API_KEY, RAWG_API_URL } from "../config/config";
import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const API = create(RAWG_API_URL, RAWG_API_KEY);

  useEffect(() => {
    API.get<GameResponse>()
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setGames([]);
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((item) => (
        <Card maxW="sm">
          <CardBody>
            <Image
              src={item.background_image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default GameGrid;
