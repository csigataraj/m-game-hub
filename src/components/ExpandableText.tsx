import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

const ExpandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(true);
  const limit = 300;
  const summary = expanded ? children : `${children.substring(0, limit)} ... `;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <>
      <Text>
        {summary}
        <Button
          size={"xs"}
          fontWeight={"bold"}
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show More" : "Show Less"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
