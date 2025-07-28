'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div><Link href="/">Counter App</Link></div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/data">Data Table</Link>
      </div>
    </nav>
  );
}
