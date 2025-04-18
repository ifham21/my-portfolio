import Navbar from './components/Navbar';
import './globals.css';
import StarsBackground from './components/StarsBackground';


export const metadata = {
  title: 'My Portfolio',
  description: 'Developer | Designer | Tester',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StarsBackground />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
