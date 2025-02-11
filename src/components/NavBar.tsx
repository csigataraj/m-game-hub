import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    </HStack>
  );
};

export default NavBar;
