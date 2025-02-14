import { Select } from "@chakra-ui/react";

const SortingDropDown = ({
  onSelectSorting,
}: {
  onSelectSorting: (value: string) => void;
}) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];

  return (
    <Select
      width={"auto"}
      variant="filled"
      placeholder={`Order by: `}
      onChange={(event) => {
        const sortValue = sortOrders.find(
          (item) => item.value === event.target.value
        )?.value as string;

        onSelectSorting(sortValue);
      }}
    >
      {sortOrders.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  );
};

export default SortingDropDown;
