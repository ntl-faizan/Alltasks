import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">🎬 Movie Watchlist</h2>
      <div className="navbar-links">
        <Link href="/" className="navbar-link">Home</Link>
        <Link href="/search" className="navbar-link">Search</Link>
        <Link href="/watchlist" className="navbar-link">Watchlist</Link>
      </div>
    </nav>
  );
}
