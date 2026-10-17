import { useState, useEffect } from "react";

export function useCharacteres(page) {
  const [character, setCharacter] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los personajes");
        }
        return res.json();
      })
      .then((data) => {
        setCharacter(data.results);
        setTotalPages(data.info.pages);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return { character, totalPages, loading, error };
}