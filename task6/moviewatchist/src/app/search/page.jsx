"use client";
import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import SearchForm from "@/components/SearchForm";
import MovieCard from "@/components/MovieCard";

export default function SearchPage() {
  const [query, setQuery] = useState("batman");
  const [watchlist, setWatchlist] = useState([]);
  const { data, loading, error, fetchMovies } = useFetch();

  useEffect(() => {
    const stored = localStorage.getItem("watchlist");
    if (stored) setWatchlist(JSON.parse(stored));
    fetchMovies(query);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  const handleSave = (movie) => {
    if (!watchlist.find((m) => m.show.id === movie.show.id)) {
      const updated = [...watchlist, movie];
      setWatchlist(updated);
      localStorage.setItem("watchlist", JSON.stringify(updated));
    }
  };

  return (
    <div className="search-page-container">
      <SearchForm query={query} setQuery={setQuery} onSearch={handleSearch} />

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="movie-list">
        {data.map((movie, idx) => (
          <MovieCard
            key={idx}
            movie={movie}
            onSave={handleSave}
            isSaved={watchlist.some((m) => m.show.id === movie.show.id)}
          />
        ))}
      </div>
    </div>
  );
}
