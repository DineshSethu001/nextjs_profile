import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import About from "./(portfolio)/about/page";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function RootLayout({ children }) {
 

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        
<main>
          {children}

  </main>   
        </body>
    </html>
  );
}
