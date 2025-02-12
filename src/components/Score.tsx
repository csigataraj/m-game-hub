import { Badge } from "@chakra-ui/react";

const Score = ({ value }: { value: number }) => {
  const color: string = value > 75 ? "green" : value > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={5} fontSize={14} paddingX={2}>
      {value}
    </Badge>
  );
};

export default Score;
