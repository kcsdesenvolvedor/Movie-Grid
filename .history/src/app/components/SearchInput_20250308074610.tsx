"use client"; // Marca o componente como Client Component
import { ReactHTMLElement, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

interface FormEvent extends React.FormEvent<HTMLFormElement> {}

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
};

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar filmes..."
        className="w-full p-2 rounded-lg bg-gray-700 text-white"
      />
    </form>
  );
}