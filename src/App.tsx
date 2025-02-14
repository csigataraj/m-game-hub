import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./interfaces/genre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./interfaces/platform";
import { GameFilterConfig } from "./interfaces/game";

function App() {
  const [filterConfig, setFilterConfig] = useState<GameFilterConfig>(
    {} as GameFilterConfig
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "220px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={filterConfig.genre}
            onSelectGenre={(genre) =>
              setFilterConfig({ ...filterConfig, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setFilterConfig({ ...filterConfig, platform })
          }
        />
        <GameGrid
          filterConfig={{
            genre: filterConfig.genre,
            platform: filterConfig.platform,
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
