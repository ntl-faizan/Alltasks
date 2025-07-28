// components/Navbar.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MySite</h2>
      <div>
        <Link href="/" style={isActive('/') ? styles.activeLink : styles.link}>Home</Link>
        <Link href="/about" style={isActive('/about') ? styles.activeLink : styles.link}>About</Link>
        <Link href="/contact" style={isActive('/contact') ? styles.activeLink : styles.link}>Contact</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: '1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  activeLink: {
    marginLeft: '1rem',
    color: '#0f0',
    textDecoration: 'underline',
  },
};

export default Navbar;
