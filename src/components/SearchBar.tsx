import { Badge, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch, BsXCircleFill } from "react-icons/bs";
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
          marginLeft={1}
          borderRadius={5}
          position={"absolute"}
          paddingX={2}
          paddingY={1}
          display={"flex"}
          alignItems={"center"}
        >
          {query.searchText}
          <BsXCircleFill
            onClick={() => {
              search("");
            }}
            cursor={"pointer"}
            style={{ marginLeft: "8px" }}
          />
        </Badge>
      )}
    </form>
  );
};

export default SearchBar;
