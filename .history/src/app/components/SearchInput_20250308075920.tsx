"use client"; // Marca o componente como Client Component

interface SearchInputProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}


export default function SearchInput({ searchQuery, setSearchQuery } : SearchInputProps) {
  return (
    <form className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Pesquisar filmes..."
        className="w-full p-2 rounded-lg bg-gray-700 text-white"
      />
    </form>
  );
}