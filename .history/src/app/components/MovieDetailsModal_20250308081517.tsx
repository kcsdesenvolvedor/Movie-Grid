"use client"; // Marca o componente como Client Component
import Movie from "@/Models/Movie";
import { useEffect } from "react";
import ReactModal from "react-modal";

interface MovieDetailsModalProps {
  isOpen: boolean;
    onClose: () => void;
    movie: Movie;
}

export default function MovieDetailsModal({ isOpen, onClose, movie }: MovieDetailsModalProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Garante que o componente está no cliente
      }, []);
    
      if (!isClient) {
        return null; // Não renderiza nada no servidor
      }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Detalhes do Filme"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="bg-gray-800 p-6 rounded-lg text-white">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover mt-4"
        />
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

function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
