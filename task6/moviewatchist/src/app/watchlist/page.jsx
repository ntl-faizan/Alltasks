"use client";
import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("watchlist");
    if (stored) setWatchlist(JSON.parse(stored));
  }, []);

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="empty-message">No movies saved.</p>
      ) : (
        watchlist.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} isSaved />
        ))
      )}
    </div>
  );
}
