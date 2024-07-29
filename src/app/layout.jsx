import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const gabarito = Gabarito ({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/scrollreveal"></script>
      <body className={`${gabarito.className} bg-color-secondary`} suppressHydrationWarning={true}> 
      <Navbar /> 
      {children}
      <Footer />
      <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
