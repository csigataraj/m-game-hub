import {
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { query } = useGameQueryStore();
  const search = useGameQueryStore((s) => s.search);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        if (ref.current) {
          search(ref.current.value);
          ref.current.value = "";
          navigate("/");
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
      {query.searchText && (
        <Badge
          colorScheme="blue"
          mt={2}
          onClick={() => {
            search("");
          }}
          cursor="pointer"
          marginLeft={1}
          borderRadius={5}
          position={"absolute"}
        >
          {query.searchText}
          <Text marginLeft="5px" display={"inline"} autoCapitalize="true">
            ✖
          </Text>
        </Badge>
      )}
    </form>
  );
};

export default SearchBar;
