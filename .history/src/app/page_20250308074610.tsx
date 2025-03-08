import axios from "axios";
import MovieGrid from "./components/MovieGrid";
import SearchInput from "./components/SearchInput";

export default async function Home() {
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return [];
    }
  };

  const movies = await fetchMovies();

  return (
    <>
      <SearchInput />
      <MovieGrid movies={movies} />
    </>
  );
}