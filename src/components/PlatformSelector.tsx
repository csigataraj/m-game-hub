import { Select, Spinner } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/usePlatforms";
import { Platform } from "../interfaces/platform";

const PlatformSelector = ({
  onSelectPlatform,
}: {
  onSelectPlatform: (value: Platform) => void;
}) => {
  const { data } = useFetchPlatforms();

  const sortedData = [...data].sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  return (
    <Select
      variant="filled"
      placeholder="Platform"
      width={"auto"}
      onChange={(event) => {
        const selectedPlatform = data.find(
          (item) => item.id.toString() === event.target.value
        ) as Platform;
        onSelectPlatform(selectedPlatform);
      }}
    >
      {sortedData.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

export default PlatformSelector;
