import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/usePlatforms";
import { Platform } from "../interfaces/platform";
import { BsChevronDown } from "react-icons/bs";
import useId from "../hooks/useId";

const PlatformSelector = ({
  selectedPlatform,
  onSelectPlatform,
}: {
  selectedPlatform?: number;
  onSelectPlatform: (value: Platform) => void;
}) => {
  const { data } = useFetchPlatforms();

  let sortedData = data ? [...data.results] : [];
  sortedData.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {useId(data, selectedPlatform)?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {sortedData.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
