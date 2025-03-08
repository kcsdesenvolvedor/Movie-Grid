"use client"; // Marca o componente como Client Component
import { useEffect, useState } from "react";
import axios from "axios";
import MovieGrid from "./components/MovieGrid";
import SearchInput from "./components/SearchInput";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Função para buscar filmes populares
  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    }
  };

  // Função para buscar filmes com base na pesquisa
  const fetchSearchResults = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-BR`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  // Efeito para buscar filmes populares ao carregar a página
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  // Efeito para buscar filmes quando o termo de pesquisa muda
  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchPopularMovies(); // Se a pesquisa estiver vazia, busca os filmes populares
    } else {
      fetchSearchResults(searchQuery); // Caso contrário, busca os filmes com base na pesquisa
    }
  }, [searchQuery]);

  return (
    <div>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieGrid movies={movies} />
    </div>
  );
}