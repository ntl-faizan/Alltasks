import globalStyles from './globals.css';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Next Counter App',
  description: 'A modern counter app with API table',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
