import { Heading } from "@chakra-ui/react";

const DynamicHeading = ({ text }: { text: string }) => {
  return (
    <Heading as={"h1"} paddingBottom={4}>
      {text}
    </Heading>
  );
};

export default DynamicHeading;
