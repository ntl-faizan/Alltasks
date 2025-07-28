import Link from "next/link";

export default function HomePage() {
  return (
    <main className="homepage-container">
      <h1 className="homepage-title">🎬 Movie Watchlist</h1>
      <p className="homepage-description">
        Search movies and save your favorites to a watchlist.
      </p>
      <Link href="/search" className="homepage-button">
        Start Searching
      </Link>
    </main>
  );
}
