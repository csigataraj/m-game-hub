import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { GameFilterConfig } from "./interfaces/game";
import SortingDropDown from "./components/SortingDropdown";

import DynamicHeading from "./components/DynamicHeading";

function App() {
  const [filterConfig, setFilterConfig] = useState<GameFilterConfig>(
    {} as GameFilterConfig
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
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
              setFilterConfig({ ...filterConfig, genre: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft="9px">
          <DynamicHeading filterConfig={filterConfig} />
          <HStack paddingBottom={5}>
            <PlatformSelector
              selectedPlatform={filterConfig.platform}
              onSelectPlatform={(platform) =>
                setFilterConfig({ ...filterConfig, platform: platform.id })
              }
            />
            <SortingDropDown
              currentSortOrder={filterConfig.order}
              onSelectSorting={(order: string) =>
                setFilterConfig({ ...filterConfig, order })
              }
            />
          </HStack>
        </Box>
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
