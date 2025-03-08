"use client"; // Marca o componente como Client Component
import Movie from "@/Models/Movie";
import ReactModal from "react-modal";
import { useEffect } from "react";

interface MovieDetailsModalProps {
  isOpen: boolean;
    onClose: () => void;
    movie: Movie;
}

export default function MovieDetailsModal({ isOpen, onClose, movie }: MovieDetailsModalProps) {

  // Configura o appElement quando o componente é montado
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Detalhes do Filme"
      className="modal w-[90%] lg:w-1/3"
      overlayClassName="overlay"
    >
      <div className="bg-gray-800 p-2 lg:p-6 rounded-lg text-white">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <div className="aspect-[2/3] overflow-hidden bg-gray-700">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover mt-4"
            onError={(e) => {
              const target = e.target as HTMLImageElement; // Type assertion
              target.src = "../../../public/image-notfound.png"; // Imagem de fallback
            }}
          />
        </div>
        <p className="mt-4">{movie.overview}</p>
        <p className="text-yellow-400 mt-2">Nota: {movie.vote_average}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 px-4 py-2 rounded-lg"
        >
          Fechar
        </button>
      </div>
    </ReactModal>
  );
}
