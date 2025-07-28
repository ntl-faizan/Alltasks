import '../app/globals.css'; // Make sure path is correct
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
