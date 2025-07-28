// app/layout.js
import './globals.css';
import Navbar from './components/navbar';

export const metadata = {
  title: 'MySite',
  description: 'Example site with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
