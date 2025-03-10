import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailer";

const GameTrailer = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useTrailers(id);

  if (isLoading) return <Spinner />;
  if (error) throw Error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailer;
