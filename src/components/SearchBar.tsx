import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSearch }: { onSearch: (text: string) => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        if (ref.current) {
          onSearch(ref.current.value);
        }
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
