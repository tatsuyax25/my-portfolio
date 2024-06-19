import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Miguel Urena Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
