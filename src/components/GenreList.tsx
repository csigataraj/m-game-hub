import useFetchGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useFetchGenres();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
