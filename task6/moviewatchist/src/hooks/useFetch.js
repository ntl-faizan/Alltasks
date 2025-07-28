import { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError("Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchMovies };
}
