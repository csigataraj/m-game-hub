import { Select, Spinner } from "@chakra-ui/react";
import useFetchPlatforms from "../hooks/usePlatforms";
import { Platform } from "../interfaces/platform";

const PlatformSelector = ({
  onSelectPlatform,
}: {
  onSelectPlatform: (value: Platform | undefined) => void;
}) => {
  const { data, isLoading, error } = useFetchPlatforms();

  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }

  const sortedData = [...data].sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  return (
    <Select
      paddingLeft="9px"
      variant="filled"
      placeholder="Platform"
      width={250}
      onChange={(event) => {
        const selectedPlatform = data.find(
          (item) => item.id.toString() === event.target.value
        );
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
