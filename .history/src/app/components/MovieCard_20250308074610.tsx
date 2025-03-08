"use client"; // Marca o componente como Client Component
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import Movie from "@/Models/Movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie: movie }: MovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <p className="text-gray-400 mt-2">{movie.overview.substring(0, 100)}...</p>
          <p className="text-yellow-400 mt-2">Nota: {movie.vote_average}</p>
        </div>
      </div>
      <MovieDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movie={movie}
      />
    </>
  );
}