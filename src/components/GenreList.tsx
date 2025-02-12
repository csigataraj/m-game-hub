import useFetchGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useFetchGenres();
  return (
    <ul>
      {genres.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
