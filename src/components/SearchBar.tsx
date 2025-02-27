import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const search = useGameQueryStore((s) => s.search);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        if (ref.current) {
          search(ref.current.value);
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
