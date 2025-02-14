import { filter, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GameFilterConfig } from "./interfaces/game";
import SortingDropDown from "./components/SortingDropdown";
import styles from "./index.css";

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
        <NavBar
          onSearch={(searchText) =>
            setFilterConfig({ ...filterConfig, searchText })
          }
        />
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
        <HStack paddingLeft="9px" paddingBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setFilterConfig({ ...filterConfig, platform })
            }
          />
          <SortingDropDown
            onSelectSorting={(order) =>
              setFilterConfig({ ...filterConfig, order })
            }
          />
        </HStack>
        <GameGrid
          filterConfig={{
            genre: filterConfig.genre,
            platform: filterConfig.platform,
            order: filterConfig.order,
            searchText: filterConfig.searchText,
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
